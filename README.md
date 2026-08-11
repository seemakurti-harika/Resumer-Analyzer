# AI Career Copilot

AI Career Copilot is an AI-powered resume analysis and career preparation platform. It analyzes a candidate's resume against a target company and job description and generates personalized resume feedback, career guidance, skill proficiency, a learning roadmap, and interview preparation.

## Features

### Resume Analysis
- ATS score
- Resume summary
- Matched skills
- Missing skills
- Resume strengths
- Resume weaknesses
- Improvement suggestions
- Keyword coverage
- Job match percentage
- Recruiter decision
- Confidence score

### Resume Feedback
Provides recruiter-style feedback based on the uploaded resume and target job description.

### Career Guidance
Provides personalized:
- Career goal
- Skills to learn
- Recommended certifications
- Project suggestions
- Job search tips

### Skill Proficiency
Estimates proficiency in demonstrated skills using evidence from projects, internships, certifications, and technical experience.

### Personalized Learning Roadmap
Generates a four-week roadmap based on current skills, missing skills, resume experience, target job description, and career goals.

Each week includes:
- Topics to learn
- Mini project
- Interview preparation focus

### Interview Preparation
Generates personalized:
- 5 technical questions
- 3 HR questions
- 5 coding topics to revise
- 5 concepts to study

## Technology Stack

### Frontend
- React.js
- Vite
- JavaScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Axios
- React Router
- React CountUp

### Backend
- Python
- Flask
- Pydantic
- Google Gemini API

### AI
- Google Gemini
- Gemini 2.5 Flash
- Prompt Engineering
- LLM-based Resume Analysis

## Project Structure

```text
AI-Career-Copilot/
├── backend_v2/
│   ├── app.py
│   ├── gemini_service.py
│   ├── prompts.py
│   ├── schemas.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## How It Works

```text
User
  |
  |-- Upload Resume
  |-- Enter Company
  |-- Enter Job Description
  |
  v
React Frontend
  |
  | Axios
  v
Flask Backend
  |
  v
Resume Text Extraction
  |
  v
Google Gemini API
  |
  v
Structured JSON Response
  |
  v
Pydantic Validation
  |
  v
React Results Dashboard
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/seemakurti-harika/Resumer-Analyzer.git
cd Resumer-Analyzer
```

## Backend Setup

```bash
cd backend_v2
python -m venv venv
```

Activate the virtual environment on Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

### Gemini API Configuration

Create a `.env` file inside `backend_v2`:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Never commit the `.env` file.

Recommended `.gitignore`:

```text
.env
venv/
__pycache__/
*.pyc
node_modules/
dist/
```

### Run Backend

```bash
python app.py
```

Backend:

```text
http://127.0.0.1:5000
```

## Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

## Application Workflow

1. Upload a PDF resume.
2. Enter the target company.
3. Paste the job description.
4. Click Analyze Resume.
5. The frontend sends the data to Flask.
6. The backend extracts resume text.
7. Gemini analyzes the resume against the job description.
8. Pydantic validates the generated JSON.
9. The backend returns the analysis.
10. React displays the personalized results.

## Results Dashboard

The dashboard includes:

```text
AI Resume Report
|
|-- ATS Score
|-- Resume Summary
|-- Matched Skills
|-- Missing Skills
|-- Resume Feedback
|-- Strengths
|-- Weaknesses
|-- Suggestions
|
|-- Career Guidance
|   |-- Career Goal
|   |-- Skills to Learn
|   |-- Certifications
|   |-- Project Suggestions
|   `-- Job Search Tips
|
|-- Skill Proficiency
|
|-- Personalized Learning Roadmap
|   |-- Week 1
|   |-- Week 2
|   |-- Week 3
|   `-- Week 4
|
`-- Interview Preparation
    |-- Technical Questions
    |-- HR Questions
    |-- Coding Topics
    `-- Concepts to Study
```

## AI Personalization

The analysis is based on:

```text
Resume
+
Company
+
Job Description
+
Skills
+
Projects
+
Internships
+
Missing Skills
```

The system generates:

```text
ATS Analysis
+
Resume Feedback
+
Career Guidance
+
Skill Proficiency
+
Learning Roadmap
+
Interview Preparation
```

## Backend Validation

Gemini responses are generated as structured JSON and validated with Pydantic before being returned to the frontend.

The backend handles:
- Empty AI responses
- Invalid JSON
- Markdown code fences
- Trailing commas
- Missing fields
- Pydantic validation errors

## Security

Do not expose the Gemini API key in frontend code.

Keep the key in the backend `.env` file:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Never commit:

```text
.env
venv/
__pycache__/
node_modules/
```

## Future Improvements

- Downloadable analysis report
- Resume rewriting
- Interview simulation
- Voice-based interview practice
- Resume version comparison
- Job application tracking
- LinkedIn profile analysis
- Resume history
- Cloud deployment

## Limitations

AI-generated ATS scores, skill proficiency scores, confidence scores, and job-match percentages are estimates based on the supplied resume and job description. They should be treated as guidance rather than guaranteed hiring results.

## Author

**Seemakurti Harika**

B.Tech - Computer Science (Artificial Intelligence)

Areas of Interest:
- Artificial Intelligence
- Generative AI
- Machine Learning
- Full-Stack Development
- AI-powered Applications

## Project Objective

The objective of AI Career Copilot is to help students and job seekers understand their resume strength, identify gaps against a target job, improve their resume, build relevant skills, and prepare for interviews.

```text
Analyze -> Identify Gaps -> Improve -> Learn -> Prepare -> Apply
```

## License

This project is developed for educational and portfolio purposes.
