from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import getSampleStyleSheet
import os

REPORT_FOLDER = "reports"
os.makedirs(REPORT_FOLDER, exist_ok=True)


def generate_report(data, filename):
    path = os.path.join(REPORT_FOLDER, filename)

    doc = SimpleDocTemplate(path)
    styles = getSampleStyleSheet()
    story = []

    story.append(Paragraph("<b>AI Career Copilot Report</b>", styles["Title"]))
    story.append(Paragraph(f"ATS Score: {data['ats_score']}", styles["BodyText"]))
    story.append(Paragraph(f"Summary: {data['resume_summary']}", styles["BodyText"]))

    story.append(Paragraph("<b>Matched Skills</b>", styles["Heading2"]))
    for skill in data["matched_skills"]:
        story.append(Paragraph(f"• {skill}", styles["BodyText"]))

    story.append(Paragraph("<b>Missing Skills</b>", styles["Heading2"]))
    for skill in data["missing_skills"]:
        story.append(Paragraph(f"• {skill}", styles["BodyText"]))

    doc.build(story)

    return path