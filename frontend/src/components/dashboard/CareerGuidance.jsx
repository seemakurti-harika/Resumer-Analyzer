import {
  Target,
  BookOpen,
  Award,
  FolderGit2,
  Briefcase,
} from "lucide-react";

export default function CareerGuidance({ data }) {
  console.log("Career Guidance Data:", data);

  if (!data) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6 mt-6">
        <h2 className="text-2xl font-bold">Career Guidance</h2>
        <p className="text-gray-500 mt-4">
          Career guidance is not available.
        </p>
      </div>
    );
  }

  const {
    career_goal = "",
    skills_to_learn = [],
    recommended_certifications = [],
    project_suggestions = [],
    job_search_tips = [],
  } = data;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-6 border border-gray-100">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Career Guidance
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Career Goal */}
        <div className="bg-blue-50 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Target className="text-blue-600" size={22} />

            <h3 className="text-lg font-semibold">
              Career Goal
            </h3>
          </div>

          <p className="text-gray-700 leading-7">
            {career_goal || "No career goal generated."}
          </p>
        </div>

        {/* Skills */}
        <div className="bg-green-50 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="text-green-600" size={22} />

            <h3 className="text-lg font-semibold">
              Skills to Learn
            </h3>
          </div>

          <ul className="space-y-2">
            {skills_to_learn.length > 0 ? (
              skills_to_learn.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  • {skill}
                </li>
              ))
            ) : (
              <li className="text-gray-500">
                No recommendations available.
              </li>
            )}
          </ul>
        </div>

        {/* Certifications */}
        <div className="bg-yellow-50 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Award className="text-yellow-600" size={22} />

            <h3 className="text-lg font-semibold">
              Recommended Certifications
            </h3>
          </div>

          <ul className="space-y-2">
            {recommended_certifications.length > 0 ? (
              recommended_certifications.map((cert, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  • {cert}
                </li>
              ))
            ) : (
              <li className="text-gray-500">
                No certifications suggested.
              </li>
            )}
          </ul>
        </div>

        {/* Projects */}
        <div className="bg-purple-50 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <FolderGit2 className="text-purple-600" size={22} />

            <h3 className="text-lg font-semibold">
              Project Suggestions
            </h3>
          </div>

          <ul className="space-y-2">
            {project_suggestions.length > 0 ? (
              project_suggestions.map((project, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-700"
                >
                  • {project}
                </li>
              ))
            ) : (
              <li className="text-gray-500">
                No project suggestions available.
              </li>
            )}
          </ul>
        </div>

      </div>

      {/* Job Search Tips */}
      <div className="bg-indigo-50 rounded-xl p-5 mt-6">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="text-indigo-600" size={22} />

          <h3 className="text-lg font-semibold">
            Job Search Tips
          </h3>
        </div>

        <ul className="space-y-2">
          {job_search_tips.length > 0 ? (
            job_search_tips.map((tip, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-gray-700"
              >
                • {tip}
              </li>
            ))
          ) : (
            <li className="text-gray-500">
              No job search tips available.
            </li>
          )}
        </ul>
      </div>

    </div>
  );
}