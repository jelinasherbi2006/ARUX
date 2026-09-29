from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pwdlib import PasswordHash
import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Allow React frontend to communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Password hashing
password_hash = PasswordHash.recommended()


# Student registration data
class Student(BaseModel):
    full_name: str
    email: str
    password: str
    college: str
    degree: str
    year_of_study: int


# Home
@app.get("/")
def home():
    return {"message": "Welcome to ARUX!"}


# Database connection test
@app.get("/db-test")
def db_test():
    connection = psycopg2.connect(
        host=os.getenv("DB_HOST"),
        port=os.getenv("DB_PORT"),
        database=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD")
    )

    cursor = connection.cursor()

    cursor.execute("SELECT current_database(), current_user;")
    result = cursor.fetchone()

    cursor.close()
    connection.close()

    return {
        "database": result[0],
        "user": result[1],
        "status": "ARUX connected to PostgreSQL successfully!"
    }


# Create student profile
@app.post("/students")
def create_student(student: Student):

    # Hash password before storing it
    hashed_password = password_hash.hash(student.password)

    connection = psycopg2.connect(
        host=os.getenv("DB_HOST"),
        port=os.getenv("DB_PORT"),
        database=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD")
    )

    cursor = connection.cursor()

    cursor.execute(
        """
        INSERT INTO students
        (full_name, email, password_hash, college, degree, year_of_study)
        VALUES (%s, %s, %s, %s, %s, %s)
        RETURNING student_id;
        """,
        (
            student.full_name,
            student.email,
            hashed_password,
            student.college,
            student.degree,
            student.year_of_study
        )
    )

    student_id = cursor.fetchone()[0]

    connection.commit()

    cursor.close()
    connection.close()

    return {
        "message": "ARUX student profile created successfully!",
        "student_id": student_id
    }