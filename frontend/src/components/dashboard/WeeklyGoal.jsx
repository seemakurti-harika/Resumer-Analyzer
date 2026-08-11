function WeeklyGoal() {
    return (
      <section className="weekly-goal">
  
        <h2 className="section-title">
          Weekly Goal
        </h2>
  
        <div className="goal-card">
  
          <div className="goal-header">
  
            <h3>Improve Resume Score</h3>
  
            <span>80%</span>
  
          </div>
  
          <div className="progress-bar">
  
            <div className="progress-fill"></div>
  
          </div>
  
          <div className="goal-details">
  
            <p>Current Score: <strong>82%</strong></p>
  
            <p>Target Score: <strong>90%</strong></p>
  
          </div>
  
          <div className="goal-footer">
  
            🎯 Complete 3 more tasks to reach your weekly goal.
  
          </div>
  
        </div>
  
      </section>
    );
  }
  
  export default WeeklyGoal;