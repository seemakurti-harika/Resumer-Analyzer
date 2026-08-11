import MainLayout from "../layouts/MainLayout";

import UploadCard from "../components/resume/UploadCard";
import ResumeInfo from "../components/resume/ResumeInfo";
import "../styles/resume.css";
import { useState } from "react";
import ATSScore from "../components/resume/ATSScore";
import SkillCard from "../components/resume/SkillCard";
function Resume() {
    const [resumeData, setResumeData] = useState(null);
    console.log("Resume Data:", resumeData);
    return (

        <MainLayout>

<UploadCard setResumeData={setResumeData} />
{
    resumeData && (
        <>

            <ATSScore
                score={resumeData.match_score}
            />

            <ResumeInfo
                resumeData={resumeData}
            />

        </>
    )
}
        </MainLayout>

    );

}

export default Resume;