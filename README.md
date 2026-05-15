# Resumer-Analyzer
Resume2Job
Resume2Job is a learning-focused full-stack project that analyzes how well a resume matches a given job description.

It helps users clearly understand their strengths, gaps, and improvement areas using structured AI-generated feedback without vague or essay-style responses.

This project is built to demonstrate real-world LLM integration, document processing, and frontend–backend coordination.
It is not a commercial product, but a solid engineering + portfolio project.

🚀 Features
Upload Resume (PDF / DOCX / Image)
Upload or paste Job Description
Automatic resume & JD text extraction
Cleaning, sectioning, and chunking of content
Context-aware AI analysis
Structured, readable output (no essay dumping)
Adaptive response depth:
Short answers by default
Detailed guidance only when explicitly asked
Fully working frontend + backend
Free-tier friendly (no paid APIs required)
🧠 How the System Works
User uploads a resume and a job description
Backend extracts raw text from uploaded files
Text is cleaned and split into logical sections
Important content chunks are stored per session
User asks a question (e.g. "Am I qualified for this role?")
Relevant resume & JD chunks are injected into an AI prompt
Gemini generates a structured, career-focused response
Frontend renders the output using Markdown
🏗️ Tech Stack
Frontend
React
Fetch API
React Markdown (clean formatted output)
Backend
Python (Flask)
Flask-CORS
Background threading for processing
Session-based in-memory storage
AI / LLM
Google Gemini (gemini-pro)
Prompt engineering for output control
Embeddings intentionally disabled (free-tier safe)
📁 Project Structure
resume2job/
│
├── backend/
│   ├── app.py                # Flask API entry point
│   ├── extraction/           # Resume text extraction logic
│   ├── processing/           # Cleaning, sectioning, chunking
│   ├── matching/             # JD parsing & in-memory storage
│   ├── utils/                # File handling helpers
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   └── Resume2Job.jsx    # Main UI logic
│   └── package.json
│
└── README.md

✨Response Intelligence (Important Design)
The system controls response length and depth, not the model.

Default Behavior
Short, scannable responses
Clear verdict, strengths, and gaps
When the User Asks for Details (e.g. "What should I do to guarantee qualification?")

Deeper analysis
Actionable improvement steps
Structured recommendations
This is handled using prompt-level response modes, not by switching models.
🎯Project Goals
This project was built to:
Learn end-to-end LLM integration
Practice backend architecture & debugging
Understand prompt engineering deeply
Build a deployable AI system
Focus on clarity, correctness, and stability
This is a learning + portfolio project, not a commercial product.
⚠️Limitations
No semantic similarity search (embeddings disabled)
Session data is not persistent
Output quality depends on input quality
Not optimized for high concurrent users
These trade-offs were made intentionally to keep the system simple, reliable, and free-tier friendly.
👤 Author
Danish Shaikh BCA Student | Python & Data-Oriented Developer

📄 License
This project is intended for educational and personal learning purposes
