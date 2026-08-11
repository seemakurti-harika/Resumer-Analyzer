import { Sparkles } from "lucide-react";

export default function DashboardHeader({ resumeData }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl p-10 text-white shadow-xl">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">
            AI Resume Report
          </h1>

          <p className="mt-3 opacity-90">
            Personalized AI analysis generated successfully.
          </p>
        </div>

        <div className="text-right">
          <Sparkles size={40} />

          <p className="mt-3">
            ATS Score
          </p>

          <h2 className="text-5xl font-bold">
            {resumeData?.ats_score ?? 0}%
          </h2>
        </div>
      </div>
    </div>
  );
}