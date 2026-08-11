from pydantic import BaseModel

class CareerGuidance(BaseModel):
    career_goal: str
    skills_to_learn: list[str]
    recommended_certifications: list[str]
    project_suggestions: list[str]
    job_search_tips: list[str]

class InterviewPreparation(BaseModel):
    technical_questions: list[str]
    hr_questions: list[str]
    coding_topics: list[str]
    concepts_to_study: list[str]

class SkillItem(BaseModel):
    skill: str
    score: int


class WeekPlan(BaseModel):
    topics: list[str]
    mini_project: str
    interview_focus: str


class LearningRoadmap(BaseModel):
    week1: WeekPlan
    week2: WeekPlan
    week3: WeekPlan
    week4: WeekPlan

class ResumeAnalysis(BaseModel):
    ats_score: int
    resume_summary: str
    resume_feedback: str

    matched_skills: list[str]
    missing_skills: list[str]

    strengths: list[str]
    weaknesses: list[str]
    suggestions: list[str]

    career_guidance: CareerGuidance

    learning_roadmap: LearningRoadmap
    skill_proficiency: list[SkillItem]

    interview_preparation: InterviewPreparation

    confidence_score: float
    keyword_coverage: float
    job_match_percentage: int
    recruiter_decision: str