from fastapi import FastAPI
import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()


@app.get("/")
def home():
    return {"message": "Welcome to ARUX!"}


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