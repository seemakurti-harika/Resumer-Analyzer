import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import MetricCards from "../components/dashboard/MetricCards";
import ResumeInfo from "../components/resume/ResumeInfo";
import LearningRoadmap from "../components//LearningRoadmap";
import CareerGuidance from "../components/dashboard/CareerGuidance";
import SkillProficiency from "../components/dashboard/SkillProficiency";
import InterviewPreparation from "../components/dashboard//InterviewPreparation";
function Results() {

    const { state } = useLocation();

    const resumeData = state?.resumeData;

    if (!resumeData) {
        return <h2>No Resume Analysis Found</h2>;
    }

    return (
        <>
            <Navbar />

            <main className="min-h-screen pt-32 pb-20 px-5 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

                <motion.div className="space-y-8 max-w-[1500px] mx-auto">

                    <DashboardHeader resumeData={resumeData} />

                    <MetricCards resumeData={resumeData} />

                    <ResumeInfo resumeData={resumeData} />

                    <SkillProficiency
                        data={resumeData?.skill_proficiency}
                    />

                    <CareerGuidance
                        data={resumeData?.career_guidance}
                    />

                    <LearningRoadmap
                        data={resumeData?.learning_roadmap}
                    />

                    <InterviewPreparation
                        data={resumeData?.interview_preparation}
                    />
                </motion.div>

            </main>
        </>
    );
}

export default Results;