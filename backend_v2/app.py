import os
import traceback
from uuid import uuid4

from flask import Flask, jsonify, request
from flask_cors import CORS

from gemini_service import (
    analyze_resume,
    improve_resume,
    career_recommendation,
    learning_roadmap,
    recruiter_review,
    interview_chat
)

from utils import extract_text_from_pdf

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER


# ===========================
# Home
# ===========================

@app.route("/")
def home():
    return jsonify({
        "message": "AI Career Copilot Backend Running"
    })


@app.route("/health")
def health():
    return jsonify({
        "status": "healthy"
    })


# ===========================
# Resume Analysis
# ===========================

@app.route("/upload", methods=["POST"])
def upload_resume():

    if "resume" not in request.files:
        return jsonify({
            "error": "Resume file is required."
        }), 400

    resume = request.files["resume"]

    company = request.form.get("company", "")
    job_description = request.form.get("job_description", "")

    filename = f"{uuid4()}_{resume.filename}"
    filepath = os.path.join(app.config["UPLOAD_FOLDER"], filename)

    resume.save(filepath)

    try:
        resume_text = extract_text_from_pdf(filepath)

        analysis = analyze_resume(
            resume_text,
            company,
            job_description
        )

        return jsonify(analysis)

    except Exception as e:

        print("\n========== ERROR ==========")
        traceback.print_exc()
        print("===========================\n")

        return jsonify({
            "success": False,
            "error": str(e)
        }), 500

    finally:

        if os.path.exists(filepath):
            os.remove(filepath)


# ===========================
# Career Recommendation
# ===========================

@app.route("/career_recommendation", methods=["POST"])
def career():

    data = request.get_json()

    resume = data.get("resume", "")

    result = career_recommendation(resume)

    return jsonify({
        "career_advice": result
    })


# ===========================
# Improve Resume
# ===========================

@app.route("/improve_resume", methods=["POST"])
def improve_resume_route():

    data = request.get_json()

    resume = data.get("resume", "")

    if not resume:
        return jsonify({
            "error": "Resume text is required."
        }), 400

    try:

        improved = improve_resume(resume)

        return jsonify({
            "improved_resume": improved
        })

    except Exception as e:

        print("\n========== ERROR ==========")
        traceback.print_exc()
        print("===========================\n")

        return jsonify({
            "error": str(e)
        }), 500


# ===========================
# Learning Roadmap
# ===========================

@app.route("/learning_roadmap", methods=["POST"])
def roadmap():

    data = request.get_json()

    resume = data.get("resume", "")
    role = data.get("role", "")

    if not resume:
        return jsonify({
            "error": "Resume is required."
        }), 400

    result = learning_roadmap(
        resume,
        role
    )

    return jsonify({
        "roadmap": result
    })


# ===========================
# Recruiter Review
# ===========================

@app.route("/recruiter_review", methods=["POST"])
def recruiter():

    data = request.get_json()

    resume = data.get("resume", "")

    result = recruiter_review(resume)

    return jsonify({
        "review": result
    })


# ===========================
# Interview Chat
# ===========================

@app.route("/interview_chat", methods=["POST"])
def interview():

    data = request.get_json()

    resume = data.get("resume", "")
    conversation = data.get("conversation", "")

    result = interview_chat(
        resume,
        conversation
    )

    return jsonify({
        "reply": result
    })


# ===========================
# Run
# ===========================

if __name__ == "__main__":
    app.run(debug=True)