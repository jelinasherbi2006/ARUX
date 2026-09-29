function Dashboard({ student }) {
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
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "32px",
          }}
        >
          ARUX
        </h1>

        <span
          style={{
            color: "#aab4cc",
          }}
        >
          Student Dashboard
        </span>
      </header>

      {/* WELCOME */}
      <main
        style={{
          maxWidth: "1200px",
          margin: "70px auto 0",
        }}
      >
        <p
          style={{
            color: "#6ea8ff",
            fontSize: "15px",
            letterSpacing: "2px",
          }}
        >
          YOUR CAREER INTELLIGENCE
        </p>

        <h2
          style={{
            fontSize: "42px",
            margin: "15px 0",
          }}
        >
          Welcome,{" "}
          <span style={{ color: "#4f8cff" }}>
            {student?.full_name || "Student"}
          </span>
        </h2>

        <p
          style={{
            color: "#aab4cc",
            fontSize: "18px",
          }}
        >
          Your ARUX career journey starts here.
        </p>

        {/* MODULES */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginTop: "50px",
          }}
        >
          <DashboardCard
            title="Career DNA"
            description="Build and understand your evolving career profile."
          />

          <DashboardCard
            title="Performance Analysis"
            description="Analyze your academic and assessment performance."
          />

          <DashboardCard
            title="Skill Gap Analysis"
            description="Discover the skills you need to improve."
          />

          <DashboardCard
            title="Personalized Learning"
            description="Get learning paths based on your skill gaps."
          />

          <DashboardCard
            title="Career Recommendations"
            description="Explore careers that match your evolving profile."
          />

          <DashboardCard
            title="Job & Company Matching"
            description="Find opportunities that match your Career DNA."
          />
        </section>
      </main>
    </div>
  );
}

function DashboardCard({ title, description }) {
  return (
    <div
      style={{
        background: "#11182b",
        border: "1px solid #202b45",
        borderRadius: "16px",
        padding: "30px",
        minHeight: "150px",
      }}
    >
      <h3
        style={{
          fontSize: "21px",
          marginBottom: "15px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#aab4cc",
          lineHeight: "1.6",
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default Dashboard;