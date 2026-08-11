import StatCard from "../common/StatCard";

import {
  FaFileAlt,
  FaRobot,
  FaBriefcase,
  FaChartLine,
} from "react-icons/fa";

function Stats() {
  return (
    <div className="dashboard-grid">
      <StatCard
        title="Resume Score"
        value="82%"
        subtitle="Excellent Resume"
        icon={<FaFileAlt />}
        color="#2563EB"
      />

      <StatCard
        title="Interview Readiness"
        value="74%"
        subtitle="Practice Needed"
        icon={<FaRobot />}
        color="#10B981"
      />

      <StatCard
        title="Applications"
        value="12"
        subtitle="Jobs Applied"
        icon={<FaBriefcase />}
        color="#F59E0B"
      />

      <StatCard
        title="Learning Progress"
        value="61%"
        subtitle="Keep Improving"
        icon={<FaChartLine />}
        color="#EF4444"
      />
    </div>
  );
}

export default Stats;