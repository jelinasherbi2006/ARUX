import { useState } from "react";
import Register from "./Register";

function App() {
  const [showRegister, setShowRegister] = useState(false);

  // Show registration page
  if (showRegister) {
    return <Register />;
  }

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
      {/* Header */}
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
          style={{
            padding: "12px 22px",
            borderRadius: "8px",
            border: "1px solid #4f7cff",
            background: "transparent",
            color: "white",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </header>

      {/* Hero Section */}
      <main
        style={{
          maxWidth: "1200px",
          margin: "100px auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#6ea8ff",
            fontSize: "16px",
            letterSpacing: "2px",
          }}
        >
          AI-POWERED CAREER INTELLIGENCE
        </p>

        <h2
          style={{
            fontSize: "56px",
            margin: "20px 0",
            lineHeight: "1.1",
            color: "white",
          }}
        >
          Discover Your
          <br />
          <span style={{ color: "#4f8cff" }}>Career DNA</span>
        </h2>

        <p
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            color: "#aab4cc",
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          ARUX analyzes your skills, performance, interests and
          learning progress to build a continuously evolving
          career profile and guide your next career move.
        </p>

        {/* Get Started Button */}
        <button
          onClick={() => setShowRegister(true)}
          style={{
            marginTop: "35px",
            padding: "15px 32px",
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
      </main>

      {/* Feature Cards */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {/* Career DNA */}
        <div
          style={{
            background: "#11182b",
            padding: "28px",
            borderRadius: "16px",
            border: "1px solid #202b45",
          }}
        >
          <h3>🧬 Career DNA</h3>

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

        {/* Skill Gap */}
        <div
          style={{
            background: "#11182b",
            padding: "28px",
            borderRadius: "16px",
            border: "1px solid #202b45",
          }}
        >
          <h3>🎯 Skill Gap Analysis</h3>

          <p
            style={{
              color: "#aab4cc",
              lineHeight: "1.6",
            }}
          >
            Identify the skills you need to develop for your
            target career.
          </p>
        </div>

        {/* Career Matching */}
        <div
          style={{
            background: "#11182b",
            padding: "28px",
            borderRadius: "16px",
            border: "1px solid #202b45",
          }}
        >
          <h3>🚀 Career Matching</h3>

          <p
            style={{
              color: "#aab4cc",
              lineHeight: "1.6",
            }}
          >
            Discover career paths and opportunities that match
            your evolving profile.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;