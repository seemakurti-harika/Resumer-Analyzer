import {
  Brain,
  FileText,
  Target,
  TrendingUp,
  Sparkles
} from "lucide-react";

function AnalysisPreview() {

  const features = [

      {
          icon: <FileText size={24} />,
          title: "ATS Compatibility",
          desc: "Instant resume scoring"
      },

      {
          icon: <Brain size={24} />,
          title: "Skill Gap Analysis",
          desc: "Missing technical skills"
      },

      {
          icon: <Target size={24} />,
          title: "Career Match",
          desc: "Best job recommendations"
      },

      {
          icon: <TrendingUp size={24} />,
          title: "Learning Roadmap",
          desc: "Personalized growth plan"
      }

  ];

  return (

      <div className="bg-white rounded-3xl shadow-2xl p-10">

          <div className="flex items-center gap-3 mb-8">

              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center">

                  <Sparkles />

              </div>

              <div>

                  <h2 className="text-3xl font-bold">

                      AI Analysis Preview

                  </h2>

                  <p className="text-slate-500">

                      Upload your resume to unlock your personalized report.

                  </p>

              </div>

          </div>

          <div className="space-y-5">

              {features.map((item, index) => (

                  <div
                      key={index}
                      className="flex items-center gap-5 p-5 rounded-2xl bg-slate-50 hover:bg-blue-50 transition duration-300"
                  >

                      <div className="w-14 h-14 rounded-xl bg-white shadow flex items-center justify-center text-blue-600">

                          {item.icon}

                      </div>

                      <div>

                          <h3 className="font-semibold text-lg">

                              {item.title}

                          </h3>

                          <p className="text-slate-500">

                              {item.desc}

                          </p>

                      </div>

                  </div>

              ))}

          </div>

          <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-8 text-white">

              <h3 className="text-2xl font-bold">

                  AI Powered Report

              </h3>

              <p className="mt-3 opacity-90">

                  ATS Score • Recruiter Review • Career Match • Skill Gap • Learning Roadmap

              </p>

          </div>

      </div>

  );

}

export default AnalysisPreview;