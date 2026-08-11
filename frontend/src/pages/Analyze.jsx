import Navbar from "../components/Navbar";
import UploadCard from "../components/resume/UploadCard";

function Analyze() {
    return (
        <>
            <Navbar />

            <main
    className="
    min-h-screen
    pt-32
    pb-20
    px-6
    lg:px-10
    bg-gradient-to-br
    from-slate-50
    via-blue-50
    to-indigo-100
    "
>
    <div className="max-w-7xl mx-auto">

        {/* Page Heading */}
        <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-slate-900">
                AI Resume Analyzer
            </h1>

            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                Upload your resume and receive an AI-powered ATS score,
                skill gap analysis, interview questions, and a personalized
                career roadmap.
            </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Left Side */}
            <UploadCard />

            {/* Right Side */}
            <div className="bg-white rounded-3xl shadow-xl p-10">

                <h2 className="text-3xl font-bold mb-8">
                    What You'll Get
                </h2>

                <div className="space-y-6">

                    <div>
                        <h3 className="font-semibold text-xl">
                            📊 ATS Resume Score
                        </h3>
                        <p className="text-slate-600">
                            See how well your resume matches industry standards.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-xl">
                            🎯 Skill Gap Analysis
                        </h3>
                        <p className="text-slate-600">
                            Identify missing skills based on your target role.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-xl">
                            💬 Interview Questions
                        </h3>
                        <p className="text-slate-600">
                            Receive AI-generated interview questions tailored to your resume.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-xl">
                            🗺️ Career Roadmap
                        </h3>
                        <p className="text-slate-600">
                            Get personalized suggestions to improve your profile.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-xl">
                            🚀 Company Match
                        </h3>
                        <p className="text-slate-600">
                            Compare your resume against your target company and job description.
                        </p>
                    </div>

                </div>

            </div>

        </div>

    </div>
</main>
        </>
    );
}

export default Analyze;