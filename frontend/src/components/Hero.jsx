import { motion } from "framer-motion";
import "../styles/Hero.css";
import UploadCard from "./resume/UploadCard";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();
    return (

        <section className="hero">

            <div className="hero-left">

            <h1 className="text-6xl font-extrabold leading-tight">

Land Better <br />

<span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">

Interviews with AI

</span>

</h1>
                <h2>
                    Your Personal AI Career Assistant
                </h2>

                <p className="mt-6 text-lg text-slate-500 leading-8 max-w-xl">

Upload your resume and receive an ATS score,
recruiter feedback, career recommendations,
and a personalized learning roadmap—all powered by AI.

</p>
<div className="flex gap-3 mt-8 flex-wrap">

<div className="rounded-full bg-blue-50 px-4 py-2">
✅ ATS Score
</div>

<div className="rounded-full bg-violet-50 px-4 py-2">
🚀 Career Match
</div>

<div className="rounded-full bg-green-50 px-4 py-2">
📈 Learning Roadmap
</div>

</div>
                <div className="hero-buttons">
               
                <button
    className="primary-btn"
    onClick={() => navigate("/analyze")}
>
    Analyze Resume
</button>
                    <button className="secondary-btn">
                    Watch Demo
                    </button>

                </div>

            </div>

            <div className="hero-right">

                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    

                </motion.div>

            </div>

        </section>

    );

}

export default Hero;