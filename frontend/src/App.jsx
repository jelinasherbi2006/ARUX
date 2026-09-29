import { useState } from "react";
import Register from "./Register";
import Login from "./LoginPage.jsx";
import Dashboard from "./Dashboard.jsx";

function App() {
  const [page, setPage] = useState("home");
  const [student, setStudent] = useState(null);

  // REGISTER PAGE
  if (page === "register") {
    return <Register />;
  }

  // LOGIN PAGE
  if (page === "login") {
    return (
      <Login
        onLoginSuccess={(loggedInStudent) => {
          setStudent(loggedInStudent);
          setPage("dashboard");
        }}
      />
    );
  }

  // DASHBOARD PAGE
  if (page === "dashboard") {
    return <Dashboard student={student} />;
  }

  // HOME PAGE
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b1020",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            margin: 0,
            color: "white",
          }}
        >
          ARUX
        </h1>

        <button
          onClick={() => setPage("login")}
          style={{
            padding: "12px 24px",
            borderRadius: "8px",
            border: "1px solid #4f7cff",
            background: "transparent",
            color: "white",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          Login
        </button>
      </header>

      {/* HERO */}
      <main
        style={{
          maxWidth: "1200px",
          margin: "100px auto 80px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#6ea8ff",
            fontSize: "16px",
            letterSpacing: "2px",
            marginBottom: "20px",
          }}
        >
          AI-POWERED CAREER INTELLIGENCE
        </p>

        <h2
          style={{
            fontSize: "56px",
            margin: "0 0 25px",
            lineHeight: "1.15",
            color: "white",
            fontWeight: "700",
          }}
        >
          Discover Your
          <br />
          <span style={{ color: "#4f8cff" }}>
            Career DNA
          </span>
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: "#aab4cc",
            fontSize: "18px",
            lineHeight: "1.7",
          }}
        >
          ARUX analyzes your skills, performance, interests
          and learning progress to build a continuously
          evolving career profile and guide your next career move.
        </p>

        {/* GET STARTED */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "35px",
          }}
        >
          <button
            onClick={() => setPage("register")}
            style={{
              padding: "15px 34px",
              borderRadius: "10px",
              border: "none",
              background: "#4f8cff",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </div>
      </main>

      {/* FEATURES */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#11182b",
            padding: "30px",
            borderRadius: "16px",
            border: "1px solid #202b45",
            textAlign: "center",
          }}
        >
          <h3>Career DNA</h3>

          <p
            style={{
              color: "#aab4cc",
              lineHeight: "1.6",
            }}
          >
            Build a dynamic profile based on your skills,
            interests and performance.
          </p>
        </div>

        <div
          style={{
            background: "#11182b",
            padding: "30px",
            borderRadius: "16px",
            border: "1px solid #202b45",
            textAlign: "center",
          }}
        >
          <h3>Skill Gap Analysis</h3>

          <p
            style={{
              color: "#aab4cc",
              lineHeight: "1.6",
            }}
          >
            Identify the skills you need to develop for
            your target career.
          </p>
        </div>

        <div
          style={{
            background: "#11182b",
            padding: "30px",
            borderRadius: "16px",
            border: "1px solid #202b45",
            textAlign: "center",
          }}
        >
          <h3>Career Matching</h3>

          <p
            style={{
              color: "#aab4cc",
              lineHeight: "1.6",
            }}
          >
            Discover career paths and opportunities that
            match your evolving profile.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;