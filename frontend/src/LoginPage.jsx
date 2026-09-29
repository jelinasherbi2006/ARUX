import { useState } from "react";

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Login failed.");
      }

      setMessage(`Welcome back, ${data.full_name}!`);

      onLoginSuccess(data);
    } catch (error) {
      setError(error.message);
    }
  };

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
      <div
        style={{
          maxWidth: "450px",
          margin: "80px auto",
          background: "#11182b",
          padding: "40px",
          borderRadius: "18px",
          border: "1px solid #202b45",
        }}
      >
        <h1>Welcome Back</h1>

        <p
          style={{
            color: "#aab4cc",
            marginBottom: "30px",
          }}
        >
          Login to continue your ARUX journey.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            style={inputStyle}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            style={inputStyle}
            required
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              marginTop: "15px",
              border: "none",
              borderRadius: "10px",
              background: "#4f8cff",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>

        {message && (
          <p
            style={{
              marginTop: "20px",
              color: "#4ade80",
              textAlign: "center",
            }}
          >
            {message}
          </p>
        )}

        {error && (
          <p
            style={{
              marginTop: "20px",
              color: "#ff6b6b",
              textAlign: "center",
            }}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "13px",
  marginTop: "8px",
  marginBottom: "20px",
  boxSizing: "border-box",
  borderRadius: "8px",
  border: "1px solid #34415f",
  background: "#0b1020",
  color: "white",
  fontSize: "15px",
};

export default Login;