from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pwdlib import PasswordHash
import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

password_hash = PasswordHash.recommended()


# -----------------------------
# Student Registration Model
# -----------------------------

class Student(BaseModel):
    full_name: str
    email: str
    password: str
    college: str
    degree: str
    year_of_study: int


# -----------------------------
# Login Model
# -----------------------------

class LoginRequest(BaseModel):
    email: str
    password: str


# -----------------------------
# Database Connection
# -----------------------------

def get_connection():
    return psycopg2.connect(
        host=os.getenv("DB_HOST"),
        port=os.getenv("DB_PORT"),
        database=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD")
    )


# -----------------------------
# Home
# -----------------------------

@app.get("/")
def home():
    return {"message": "Welcome to ARUX!"}


# -----------------------------
# Database Test
# -----------------------------

@app.get("/db-test")
def db_test():

    connection = get_connection()

    cursor = connection.cursor()

    cursor.execute(
        "SELECT current_database(), current_user;"
    )

    result = cursor.fetchone()

    cursor.close()
    connection.close()

    return {
        "database": result[0],
        "user": result[1],
        "status": "ARUX connected to PostgreSQL successfully!"
    }


# -----------------------------
# Student Registration
# -----------------------------

@app.post("/students")
def create_student(student: Student):

    hashed_password = password_hash.hash(
        student.password
    )

    connection = get_connection()

    cursor = connection.cursor()

    cursor.execute(
        """
        INSERT INTO students
        (
            full_name,
            email,
            password_hash,
            college,
            degree,
            year_of_study
        )
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


# -----------------------------
# Student Login
# -----------------------------

@app.post("/login")
def login_student(login: LoginRequest):

    connection = get_connection()

    cursor = connection.cursor()

    cursor.execute(
        """
        SELECT
            student_id,
            full_name,
            password_hash
        FROM students
        WHERE email = %s;
        """,
        (login.email,)
    )

    student = cursor.fetchone()

    cursor.close()
    connection.close()

    if not student:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password."
        )

    student_id = student[0]
    full_name = student[1]
    stored_password_hash = student[2]

    if not password_hash.verify(
        login.password,
        stored_password_hash
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password."
        )

    return {
        "message": "Login successful!",
        "student_id": student_id,
        "full_name": full_name
    }