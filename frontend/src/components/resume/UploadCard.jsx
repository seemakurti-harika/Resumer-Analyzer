import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadResume } from "../../services/resumeService";
import toast from "react-hot-toast";

import LoadingOverlay from "../common/LoadingOverlay";
import "../../styles/resume.css";

function UploadCard() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [file, setFile] = useState(null);
    const [company, setCompany] = useState("");
    const [jobDescription, setJobDescription] = useState("");

    const [isUploading, setIsUploading] = useState(false);
    const [loadingStep, setLoadingStep] = useState(0);

    const handleUpload = async () => {
        if (isUploading) return;

        if (!file) {
            toast.error("Please upload a PDF.");
            return;
        }
        
        const formData = new FormData();
        formData.append("resume", file);
        formData.append("company", company);
        formData.append("job_description", jobDescription);

        try {
            setIsUploading(true);

            // Step 1
            setLoadingStep(1);
            await new Promise((resolve) => setTimeout(resolve, 600));

            // Step 2
            setLoadingStep(2);

            const data = await uploadResume(formData);

            console.log("Backend Response:", data);

            // Step 3
            setLoadingStep(3);
            await new Promise((resolve) => setTimeout(resolve, 600));

            // Step 4
            setLoadingStep(4);
            await new Promise((resolve) => setTimeout(resolve, 500));

            toast.success("Resume analyzed successfully!");

            navigate("/results", {
                state: {
                    resumeData: data,
                },
            });
        } catch (error) {
            console.error(error);

            toast.error(
                error.response?.data?.error ||
                error.message ||
                "Analysis failed."
            );
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <>
            {isUploading && <LoadingOverlay step={loadingStep} />}
            <div className="upload-card">

<h2 className="text-3xl font-bold">
    Resume Analysis
</h2>

<p className="text-slate-500 mb-8">
    Upload your resume and receive an AI-powered career report.
</p>

<label className="drop-zone">

    <input
        ref={fileInputRef}
        type="file"
        hidden
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
    />

    <div className="upload-icon">
        📄
    </div>

    <h3>
        {file ? "Resume Selected" : "Drag & Drop Resume"}
    </h3>

    <p>
        {file ? file.name : "PDF • Maximum 10 MB"}
    </p>

</label>
{file && (
    <div className="selected-file">
        ✅ {file.name}
    </div>
)}

<div className="mt-6">
    <label className="font-medium">
        Target Company
    </label>

    <input
        type="text"
        value={company}
        placeholder="Google, Microsoft, Infosys..."
        onChange={(e) => setCompany(e.target.value)}
    />
</div>

<div className="mt-6">
    <label className="font-medium">
        Job Description
    </label>

    <textarea
        rows="6"
        value={jobDescription}
        placeholder="Paste the Job Description..."
        onChange={(e) => setJobDescription(e.target.value)}
    />
</div>

<button
    className="analyze-btn"
    onClick={handleUpload}
    disabled={isUploading}
>
    {isUploading ? "Analyzing..." : "🚀 Analyze Resume"}
</button>

</div>
        </>
    );
}

export default UploadCard;