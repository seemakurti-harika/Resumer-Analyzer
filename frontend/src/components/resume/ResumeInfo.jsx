import SkillProgress from "../dashboard/SkillProficiency";
import {
  CheckCircle,
  AlertTriangle,
  Sparkles,
  Brain,
} from "lucide-react";

import { motion } from "framer-motion";

function ResumeInfo({ resumeData }) {
  return (
    <div className="space-y-8">

      {/* AI Analysis */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="
        bg-white/80
        backdrop-blur-xl
        rounded-3xl
        shadow-xl
        border
        border-white/60
        p-8
      "
      >
        <div className="flex items-center gap-3 mb-6">

          <div className="bg-blue-100 p-3 rounded-2xl">

            <Brain className="text-blue-600" />

          </div>

          <div>

            <h2 className="text-3xl font-bold text-slate-800">

              AI Resume Insights

            </h2>

            <p className="text-slate-500">

              Generated using AI analysis

            </p>

          </div>

        </div>

        <div className="space-y-8">

          {/* Strengths */}

          <div>

            <h3 className="text-xl font-bold text-green-600 mb-4">
              ✅ Strengths
            </h3>

            <ul className="space-y-3">

              {resumeData.strengths.map((item, index) => (

                <li key={index}>
                  • {item}
                </li>

              ))}

            </ul>

          </div>

          {/* Weaknesses */}

          <div>

            <h3 className="text-xl font-bold text-red-600 mb-4">
              ⚠️ Weaknesses
            </h3>

            <ul className="space-y-3">

              {resumeData.weaknesses.map((item, index) => (

                <li key={index}>
                  • {item}
                </li>

              ))}

            </ul>

          </div>

          {/* Suggestions */}

          <div>

            <h3 className="text-xl font-bold text-blue-600 mb-4">
              💡 Suggestions
            </h3>

            <ul className="space-y-3">

              {resumeData.suggestions.map((item, index) => (

                <li key={index}>
                  • {item}
                </li>

              ))}

            </ul>

          </div>

        </div>

      </motion.div>

      {/* Skill Progress */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="
        bg-white/80
        backdrop-blur-xl
        rounded-3xl
        shadow-xl
        border
        border-white/60
        p-8
      "
      >
        <div className="flex items-center gap-3 mb-8">

          <Sparkles className="text-indigo-600" />

          <h2 className="text-2xl font-bold">

            Skill Proficiency

          </h2>

        </div>

        <SkillProgress
          title="Resume Strength"
          value={resumeData.overall_score}
        />

        <SkillProgress
          title="Matched Skills"
          value={Math.min(
            resumeData.matched_skills.length * 10,
            100
          )}
        />

        <SkillProgress
          title="Career Readiness"
          value={95}
        />

      </motion.div>

      {/* Skills */}

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Matched */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="
          bg-white/80
          backdrop-blur-xl
          rounded-3xl
          shadow-xl
          border
          border-white/60
          p-8
        "
        >

          <div className="flex items-center gap-3 mb-6">

            <div className="bg-green-100 rounded-2xl p-3">

              <CheckCircle className="text-green-600" />

            </div>

            <h3 className="text-2xl font-bold">

              Matched Skills

            </h3>

          </div>

          <div className="flex flex-wrap gap-3">

            {resumeData.matched_skills.map((skill, index) => (

              <span
                key={index}
                className="
                rounded-full
                bg-gradient-to-r
                from-green-500
                to-emerald-600
                px-4
                py-2
                text-white
                shadow-md
                hover:scale-105
                transition
              "
              >
                {skill}
              </span>

            ))}

          </div>

        </motion.div>

        {/* Missing */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="
          bg-white/80
          backdrop-blur-xl
          rounded-3xl
          shadow-xl
          border
          border-white/60
          p-8
        "
        >

          <div className="flex items-center gap-3 mb-6">

            <div className="bg-red-100 rounded-2xl p-3">

              <AlertTriangle className="text-red-500" />

            </div>

            <h3 className="text-2xl font-bold">

              Missing Skills

            </h3>

          </div>

          {resumeData.missing_skills.length === 0 ? (

            <div className="rounded-2xl bg-green-50 p-5 text-green-700 font-semibold">

              🎉 Excellent! Your resume covers all the required skills.

            </div>

          ) : (

            <div className="flex flex-wrap gap-3">

              {resumeData.missing_skills.map((skill, index) => (

                <span
                  key={index}
                  className="
                  rounded-full
                  bg-gradient-to-r
                  from-red-500
                  to-rose-600
                  px-4
                  py-2
                  text-white
                  shadow-md
                  hover:scale-105
                  transition
                "
                >
                  {skill}
                </span>

              ))}

            </div>

          )}

        </motion.div>

      </div>

    </div>
  );
}

export default ResumeInfo;