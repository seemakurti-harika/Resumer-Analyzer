import {
    FaFileAlt,
    FaRobot,
    FaRoad,
    FaUserTie,
  } from "react-icons/fa";
  
  function RecentActivity() {
  
    const activities = [
      {
        icon: <FaFileAlt />,
        title: "Resume analyzed",
        time: "Today • 2:30 PM",
      },
      {
        icon: <FaRobot />,
        title: "Mock interview completed",
        time: "Yesterday",
      },
      {
        icon: <FaRoad />,
        title: "Learning roadmap generated",
        time: "2 days ago",
      },
      {
        icon: <FaUserTie />,
        title: "Recruiter review completed",
        time: "3 days ago",
      },
    ];
  
    return (
      <section className="recent-activity">
  
        <h2 className="section-title">
          Recent Activity
        </h2>
  
        <div className="activity-list">
  
          {activities.map((item, index) => (
  
            <div className="activity-card" key={index}>
  
              <div className="activity-icon">
                {item.icon}
              </div>
  
              <div>
  
                <h4>{item.title}</h4>
  
                <p>{item.time}</p>
  
              </div>
  
            </div>
  
          ))}
  
        </div>
  
      </section>
    );
  }
  
  export default RecentActivity;