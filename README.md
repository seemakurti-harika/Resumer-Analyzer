# 🤖 AI Career Copilot

An AI-powered career assistance platform that analyzes a candidate's resume against a target job description and provides personalized career insights, resume feedback, skill analysis, learning guidance, and interview preparation.

The application uses Google's Gemini API to generate personalized recommendations based on the candidate's resume, skills, projects, internships, and the selected job description.

---

## 🚀 Features

### 📄 Resume Analysis

Upload your resume and provide a target company and job description.

The system analyzes:

- ATS compatibility
- Resume summary
- Matched skills
- Missing skills
- Resume strengths
- Resume weaknesses
- Resume improvement suggestions
- Job match percentage
- Keyword coverage
- Recruiter decision
- Confidence score

---

### 📝 Resume Feedback

The system provides recruiter-style feedback explaining:

- What is strong in the resume
- What needs improvement
- How well the resume matches the target job
- Which areas should be improved for better job alignment

The feedback is generated specifically from the uploaded resume and job description.

---

### 🎯 Personalized Career Guidance

Instead of showing the same career recommendations for every candidate, the system generates guidance based on the candidate's actual profile.

It includes:

- Career goal
- Skills to learn
- Recommended certifications
- Project suggestions
- Job search tips

---

### 📊 Skill Proficiency

The application estimates the candidate's proficiency in relevant skills based on evidence found in:

- Projects
- Internships
- Certifications
- Technical experience
- Resume skills

Each skill receives a score between `0–100`.

Example:

```text
Python              90%
Machine Learning    85%
React               75%
Flask               72%
SQL                 68%
