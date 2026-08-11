import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ATSCircle({ score }) {
    return (
        <div style={{ width: 180, height: 180 }}>
            <CircularProgressbar
                value={score}
                text={`${score}%`}
                styles={buildStyles({
                    pathColor: "#2563eb",
                    trailColor: "#E5E7EB",
                    textColor: "#111827",
                    strokeLinecap: "round"
                })}
            />
        </div>
    );
}

export default ATSCircle;