import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    college: "",
    degree: "",
    yearOfStudy: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:8000/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: formData.fullName,
          email: formData.email,
          password: formData.password,
          college: formData.college,
          degree: formData.degree,
          year_of_study: Number(formData.yearOfStudy),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Something went wrong.");
      }

      setMessage(
        `Profile created successfully! Student ID: ${data.student_id}`
      );

      setFormData({
        fullName: "",
        email: "",
        password: "",
        college: "",
        degree: "",
        yearOfStudy: "",
      });
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
          maxWidth: "550px",
          margin: "40px auto",
          background: "#11182b",
          padding: "40px",
          borderRadius: "18px",
          border: "1px solid #202b45",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>
          Create Your ARUX Profile
        </h1>

        <p
          style={{
            color: "#aab4cc",
            marginBottom: "30px",
          }}
        >
          Start building your Career DNA.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your name"
            value={formData.fullName}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label>College</label>
          <input
            type="text"
            name="college"
            placeholder="Enter your college"
            value={formData.college}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label>Degree</label>
          <input
            type="text"
            name="degree"
            placeholder="Example: B.E. CSE"
            value={formData.degree}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label>Year of Study</label>
          <select
            name="yearOfStudy"
            value={formData.yearOfStudy}
            onChange={handleChange}
            style={inputStyle}
            required
          >
            <option value="" disabled>
              Select your year
            </option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>

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
            Create ARUX Profile
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

export default Register;