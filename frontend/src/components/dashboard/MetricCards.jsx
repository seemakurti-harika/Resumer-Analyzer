import {
    Brain,
    Target,
    TrendingUp,
    Award,
    ArrowUpRight,
  } from "lucide-react";
  
  import { motion } from "framer-motion";
  
  function MetricCards({ resumeData }) {
    const cards = [
      {
        title: "Matched Skills",
        value: resumeData.matched_skills?.length || 0,
        icon: Brain,
        color: "from-emerald-500 to-green-600",
        bg: "bg-emerald-50",
      },
    
      {
        title: "Missing Skills",
        value: resumeData.missing_skills?.length || 0,
        icon: Target,
        color: "from-red-500 to-rose-600",
        bg: "bg-red-50",
      },
    
      {
        title: "ATS Score",
        value: `${resumeData.ats_score || 0}%`,
        icon: Award,
        color: "from-blue-500 to-indigo-600",
        bg: "bg-blue-50",
      },
    
      {
        title: "Career Match",
        value: `${resumeData.job_match_percentage || 0}%`,
        icon: TrendingUp,
        color: "from-violet-500 to-purple-600",
        bg: "bg-violet-50",
      },
    ];
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mt-8">
  
        {cards.map((card, index) => {
  
          const Icon = card.icon;
  
          return (
  
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/50
              bg-white/80
              backdrop-blur-xl
              shadow-lg
              p-6
              transition-all
              duration-300
              "
            >
  
              {/* Decorative Circle */}
  
              <div
                className={`
                absolute
                -right-8
                -top-8
                h-28
                w-28
                rounded-full
                bg-gradient-to-br
                ${card.color}
                opacity-10
                `}
              />
  
              {/* Top */}
  
              <div className="flex items-center justify-between">
  
                <div
                  className={`
                  ${card.bg}
                  rounded-2xl
                  p-3
                  `}
                >
                  <Icon className="w-7 h-7 text-slate-700" />
                </div>
  
                <ArrowUpRight
                  className="text-slate-400"
                  size={18}
                />
  
              </div>
  
              {/* Title */}
  
              <p className="mt-6 text-sm font-medium uppercase tracking-wide text-slate-500">
  
                {card.title}
  
              </p>
  
              {/* Value */}
  
              <h2 className="mt-2 text-4xl font-bold text-slate-800">
  
                {card.value}
  
              </h2>
  
              {/* Bottom Progress */}
  
              <div className="mt-6 h-2 rounded-full bg-slate-100 overflow-hidden">
  
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${card.color}`}
                  style={{
                    width:
  card.title === "Matched Skills"
    ? `${Math.min((resumeData.matched_skills?.length || 0) * 8, 100)}%`
    : card.title === "Missing Skills"
    ? `${Math.min((resumeData.missing_skills?.length || 0) * 8, 100)}%`
    : card.title === "ATS Score"
    ? `${resumeData.ats_score || 0}%`
    : `${resumeData.job_match_percentage || 0}%`,
                  }}
                />
  
              </div>
  
            </motion.div>
  
          );
  
        })}
      </div>
    );
  }
  
  export default MetricCards;