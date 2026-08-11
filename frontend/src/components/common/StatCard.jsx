function StatCard({
    title,
    value,
    subtitle,
    icon,
    color
  }) {
    return (
      <div className="stat-card">
  
        <div className="stat-header">
  
          <div
            className="stat-icon"
            style={{ background: color }}
          >
            {icon}
          </div>
  
        </div>
  
        <h4>{title}</h4>
  
        <h1>{value}</h1>
  
        <p>{subtitle}</p>
  
      </div>
    );
  }
  
  export default StatCard;