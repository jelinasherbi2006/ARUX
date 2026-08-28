const modules = [

    {
        icon: "👤",
        title: "Student Profile Intelligence",
        description: "Creates a connected student profile by organizing academic information, skills, projects, certifications, interests and career goals.",
        feature: "One complete student career profile"
    },

    {
        icon: "🧬",
        title: "Career DNA Engine",
        description: "Builds an evolving representation of a student's strengths, weaknesses, skills, progress and overall career development.",
        feature: "The core intelligence of ARUX"
    },

    {
        icon: "🌍",
        title: "Career DNA World Rank",
        description: "Explores a comparative ranking concept based on defined Career DNA evaluation criteria and career development progress.",
        feature: "Compare progress using defined criteria"
    },

    {
        icon: "📄",
        title: "Resume Intelligence",
        description: "Analyzes resume information including education, technical skills, projects, certifications and career-related achievements.",
        feature: "Turn resume data into useful insights"
    },

    {
        icon: "⚡",
        title: "Skill Extraction & Verification",
        description: "Identifies important technical and professional skills and organizes them into a structured skill profile.",
        feature: "Understand the student's skill profile"
    },

    {
        icon: "🎯",
        title: "Skill-Gap Analysis",
        description: "Compares current skills with target career requirements to identify missing skills and improvement areas.",
        feature: "Find what needs improvement"
    },

    {
        icon: "🧭",
        title: "Career Recommendation",
        description: "Suggests suitable career paths based on skills, interests, strengths, performance and other career signals.",
        feature: "Discover suitable career directions"
    },

    {
        icon: "🗺️",
        title: "Personalized Learning Roadmap",
        description: "Creates a learning path that recommends what the student can learn next based on goals and skill gaps.",
        feature: "Know what to learn next"
    },

    {
        icon: "📚",
        title: "Smart Resource Recommendation",
        description: "Helps students discover useful courses, practice resources and learning materials related to their goals.",
        feature: "Find relevant learning resources"
    },

    {
        icon: "🔍",
        title: "Assessment & Weakness Detection",
        description: "Uses assessment results and performance information to identify weak topics and areas requiring improvement.",
        feature: "Detect weak areas early"
    },

    {
        icon: "📈",
        title: "Performance Prediction",
        description: "Explores possible future performance and readiness trends using available learning and assessment data.",
        feature: "Understand future progress trends"
    },

    {
        icon: "💼",
        title: "Project & Portfolio Intelligence",
        description: "Analyzes projects and portfolio development and suggests improvements based on target career direction.",
        feature: "Build a stronger portfolio"
    },

    {
        icon: "🏅",
        title: "Certification Intelligence",
        description: "Tracks completed certifications and considers their relevance to selected career goals and learning paths.",
        feature: "Understand certification relevance"
    },

    {
        icon: "🚀",
        title: "Job Readiness Score",
        description: "Creates a proposed career readiness indicator using skills, projects, assessments and other selected signals.",
        feature: "Measure career preparation"
    },

    {
        icon: "🤝",
        title: "Job & Opportunity Matching",
        description: "Matches students with relevant jobs, internships and opportunities based on skills, goals and readiness.",
        feature: "Connect students with opportunities"
    },

    {
        icon: "🏢",
        title: "Company / Recruiter Portal",
        description: "Provides a proposed interface where recruiters can discover suitable candidates using relevant career information.",
        feature: "Create a bridge between students and companies"
    },

    {
        icon: "🎤",
        title: "Interview Preparation",
        description: "Provides role-based interview preparation, practice guidance and progress tracking for selected careers.",
        feature: "Prepare with a clear focus"
    },

    {
        icon: "🔄",
        title: "Interview Outcome & Failure Analyzer",
        description: "Uses interview outcomes or feedback to identify possible improvement areas and recommend next actions.",
        feature: "Learn and improve from every interview"
    },

    {
        icon: "🔗",
        title: "Continuous Feedback Loop",
        description: "Updates career recommendations when new assessments, projects, learning progress or interview outcomes are added.",
        feature: "Keep Career DNA continuously evolving"
    },

    {
        icon: "📡",
        title: "Career Trend Intelligence",
        description: "Explores changing career and skill requirements to help students understand emerging opportunities.",
        feature: "Stay aware of changing career trends"
    },

    {
        icon: "🤖",
        title: "ARUX AI Career Assistant",
        description: "Acts as the conversational intelligence layer that helps students understand their profile and career journey.",
        feature: "Ask questions and receive career guidance"
    }

];


const modulesGrid = document.getElementById("modulesGrid");


modules.forEach((module, index) => {

    const card = document.createElement("article");

    card.className = "module-card";


    card.innerHTML = `

        <div class="module-top">

            <div class="module-icon">
                ${module.icon}
            </div>

            <div class="module-number">
                MODULE ${String(index + 1).padStart(2, "0")}
            </div>

        </div>


        <h3>${module.title}</h3>


        <p>
            ${module.description}
        </p>


        <div class="module-feature">
            ✦ ${module.feature}
        </div>

    `;


    modulesGrid.appendChild(card);

});