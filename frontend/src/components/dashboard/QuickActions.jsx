import {
    FaFileUpload,
    FaRobot,
    FaUserTie,
    FaRoad,
  } from "react-icons/fa";
  
  function QuickActions() {
    const actions = [
      {
        title: "Upload Resume",
        description: "Analyze your resume with AI",
        icon: <FaFileUpload />,
        button: "Open",
      },
      {
        title: "Mock Interview",
        description: "Practice AI interview questions",
        icon: <FaRobot />,
        button: "Open",
      },
      {
        title: "Recruiter Review",
        description: "Get recruiter-style feedback",
        icon: <FaUserTie />,
        button: "Open",
      },
      {
        title: "Learning Roadmap",
        description: "Improve missing skills",
        icon: <FaRoad />,
        button: "Open",
      },
    ];
  
    return (
      <section className="quick-actions">
  
        <h2 className="section-title">
          Quick Actions
        </h2>
  
        <div className="quick-actions-grid">
  
          {actions.map((action, index) => (
  
            <div className="quick-card" key={index}>
  
              <div className="quick-icon">
                {action.icon}
              </div>
  
              <h3>{action.title}</h3>
  
              <p>{action.description}</p>
  
              <button className="quick-btn">
                {action.button}
              </button>
  
            </div>
  
          ))}
  
        </div>
  
      </section>
    );
  }
  
  export default QuickActions;