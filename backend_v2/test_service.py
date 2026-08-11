from gemini_service import analyze_resume

resume = """
Python
Flask
React
SQL
Git
"""

company = "Google"

job = """
Looking for Python, Flask, React,
Docker, REST API,
Git,
CI/CD,
SQL
"""

result = analyze_resume(
    resume,
    company,
    job
)

print(result)