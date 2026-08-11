import json
import os
import re
from dotenv import load_dotenv
from google import genai
from pydantic import ValidationError

from prompts import UPLOAD_PROMPT
from schemas import ResumeAnalysis
from prompts import (
    IMPROVE_RESUME_PROMPT,
    CAREER_PROMPT,
    ROADMAP_PROMPT,
    INTERVIEW_PROMPT,
    RECRUITER_PROMPT
)
load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

def generate_text(prompt):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    if not response.text:
        raise Exception("Gemini returned an empty response.")

    return response.text.strip()
def improve_resume(resume_text):
    prompt = IMPROVE_RESUME_PROMPT.format(
        resume=resume_text
    )
    return generate_text(prompt)


def career_recommendation(resume_text):
    prompt = CAREER_PROMPT.format(
        resume=resume_text
    )
    return generate_text(prompt)


def learning_roadmap(resume_text, role):
    prompt = ROADMAP_PROMPT.format(
        resume=resume_text,
        role=role
    )
    return generate_text(prompt)


def recruiter_review(resume_text):
    prompt = RECRUITER_PROMPT.format(
        resume=resume_text
    )
    return generate_text(prompt)


def interview_chat(resume_text, conversation):
    prompt = INTERVIEW_PROMPT.format(
        resume=resume_text,
        conversation=conversation
    )
    return generate_text(prompt)
def analyze_resume(resume_text, company, job_description):
    prompt = UPLOAD_PROMPT.format(
        resume=resume_text,
        company=company,
        job_description=job_description
    )

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    if not response.text:
        raise Exception("Gemini returned an empty response.")

    text = response.text.strip()

    print("\n========== RAW GEMINI RESPONSE ==========")
    print(text)
    print("=========================================\n")

    # Remove markdown code fences
    if text.startswith("```"):
        lines = text.splitlines()

        if lines[0].startswith("```"):
            lines = lines[1:]

        if lines and lines[-1].startswith("```"):
            lines = lines[:-1]

        text = "\n".join(lines).strip()

    try:
        text = text.strip()

        # Remove markdown code fences
        text = re.sub(r"^```json\s*", "", text)
        text = re.sub(r"^```\s*", "", text)
        text = re.sub(r"\s*```$", "", text)

        # Remove trailing commas before ] or }
        text = re.sub(r",(\s*[\]}])", r"\1", text)

        data = json.loads(text)

        print("\n========== PARSED JSON ==========")
        print(data)
        print("=================================\n")

    except json.JSONDecodeError:
        print(text)
        raise Exception("Gemini did not return valid JSON.")

        # Add defaults if Gemini omits career_guidance
    # Add defaults if Gemini omits career_guidance
    if "career_guidance" not in data:
        data["career_guidance"] = {
            "career_goal": "",
            "skills_to_learn": [],
            "recommended_certifications": [],
            "project_suggestions": [],
            "job_search_tips": []
        }

    try:
        validated = ResumeAnalysis(**data)

        print("\n========== VALIDATED DATA ==========")
        print(validated.model_dump())
        print("====================================\n")

        return validated.model_dump()

    except ValidationError as e:

        print("\n========== VALIDATION ERROR ==========")
        print(e)
        print("======================================\n")

        raise Exception(str(e))