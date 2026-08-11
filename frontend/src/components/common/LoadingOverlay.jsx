
import "./LoadingOverlay.css";
function LoadingOverlay({ step }) {
    const steps = [
      "Uploading Resume",
      "Extracting Resume",
      "Calculating ATS Score",
      "AI Analysis",
      "Generating Report"
    ];
  
    return (
      <div className="loading-overlay">
        <div className="loading-box">
          <h2>Analyzing Resume...</h2>
  
          {steps.map((item, index) => (
            <div
              key={index}
              className={`loading-step ${
                index < step
                  ? "completed"
                  : index === step
                  ? "active"
                  : ""
              }`}
            >
              {index < step ? "✅" : index === step ? "⏳" : "○"} {item}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default LoadingOverlay;