import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    date_of_birth: "",
    college: "",
    degree: "",
    year_of_study: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        "/api/students",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: formData.full_name,
            email: formData.email,
            password: formData.password,
            college: formData.college,
            degree: formData.degree,
            year_of_study: Number(formData.year_of_study),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Registration failed");
      }

      setMessage(
        "Profile created successfully! You can now login."
      );

      setFormData({
        full_name: "",
        email: "",
        password: "",
        date_of_birth: "",
        college: "",
        degree: "",
        year_of_study: "",
      });
    } catch (error) {
      console.error("Registration error:", error);
      setMessage(error.message || "Failed to fetch");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b1020",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "520px",
          background: "#11182b",
          padding: "40px",
          borderRadius: "18px",
          border: "1px solid #202b45",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            lineHeight: "1.2",
            margin: "0 0 10px 0",
            textAlign: "center",
            color: "white",
            fontWeight: "700",
          }}
        >
          Create Your ARUX
          <br />
          Profile
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#aab4cc",
            marginBottom: "30px",
          }}
        >
          Start building your Career DNA
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="text"
            name="college"
            placeholder="College"
            value={formData.college}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={formData.degree}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="number"
            name="year_of_study"
            placeholder="Year of Study"
            value={formData.year_of_study}
            onChange={handleChange}
            min="1"
            max="6"
            required
            style={inputStyle}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "15px",
              marginTop: "10px",
              borderRadius: "10px",
              border: "none",
              background: "#4f8cff",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Creating..." : "Create ARUX Profile"}
          </button>
        </form>

        {message && (
          <p
            style={{
              marginTop: "20px",
              textAlign: "center",
              color: message.includes("successfully")
                ? "#5ee6a8"
                : "#ff7b7b",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  boxSizing: "border-box",
  borderRadius: "8px",
  border: "1px solid #2a3655",
  background: "#0b1020",
  color: "white",
  fontSize: "15px",
  outline: "none",
};

export default Register;