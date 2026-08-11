import {
  BookOpen,
  Code,
  Server,
  Rocket,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";

function LearningRoadmap({ data }) {
  if (!data) return null;

  const roadmap = [
    {
      week: "Week 1",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      ...data.week1,
    },
    {
      week: "Week 2",
      icon: Code,
      color: "from-violet-500 to-purple-600",
      ...data.week2,
    },
    {
      week: "Week 3",
      icon: Server,
      color: "from-green-500 to-emerald-600",
      ...data.week3,
    },
    {
      week: "Week 4",
      icon: Rocket,
      color: "from-pink-500 to-rose-600",
      ...data.week4,
    },
  ];

  return (
    <section className="mt-14">
      <div className="flex items-center gap-3 mb-8">
        <Rocket className="text-indigo-600" size={30} />

        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            Personalized Learning Roadmap
          </h2>

          <p className="text-slate-500 mt-1">
            AI-generated roadmap based on your resume and job description.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {roadmap.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                scale: 1.01,
                y: -5,
              }}
              className="
                relative
                overflow-hidden
                rounded-3xl
                bg-white/80
                backdrop-blur-xl
                border
                border-white/60
                shadow-xl
                p-8
              "
            >
              <div
                className={`
                  absolute
                  -right-12
                  -top-12
                  h-40
                  w-40
                  rounded-full
                  bg-gradient-to-br
                  ${item.color}
                  opacity-10
                  blur-2xl
                `}
              />

              <div className="relative z-10 flex gap-6">
                <div
                  className={`
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    ${item.color}
                    text-white
                    shadow-lg
                  `}
                >
                  <Icon size={28} />
                </div>

                <div className="flex-1">
                  <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
                    {item.week}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-slate-800">
                    Topics to Learn
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {item.topics?.map((topic, i) => (
                      <span
                        key={i}
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-full
                          bg-slate-100
                          px-4
                          py-2
                          text-sm
                          font-medium
                          text-slate-700
                          transition
                          hover:bg-blue-100
                        "
                      >
                        <CheckCircle2
                          size={16}
                          className="text-green-600"
                        />

                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 grid md:grid-cols-2 gap-6">
                    <div className="rounded-xl bg-indigo-50 p-5 border border-indigo-100">
                      <h4 className="font-semibold text-indigo-700 mb-2">
                        Mini Project
                      </h4>

                      <p className="text-slate-700 text-sm leading-6">
                        {item.mini_project}
                      </p>
                    </div>

                    <div className="rounded-xl bg-green-50 p-5 border border-green-100">
                      <h4 className="font-semibold text-green-700 mb-2">
                        Interview Focus
                      </h4>

                      <p className="text-slate-700 text-sm leading-6">
                        {item.interview_focus}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {index !== roadmap.length - 1 && (
                <div
                  className="
                    absolute
                    left-11
                    bottom-[-34px]
                    h-8
                    border-l-4
                    border-dashed
                    border-indigo-300
                  "
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default LearningRoadmap;