function SkillCard({ title, skills, type }) {
    return (
        <div className="skill-card">

            <div className="skill-card-header">
                <h3>{title}</h3>

                <span className="skill-count">
                    {skills.length}
                </span>
            </div>

            <div className="skill-list">

                {skills.length > 0 ? (
                    skills.map((skill, index) => (
                        <span
                            key={index}
                            className={`skill-chip ${
                                type === "matched"
                                    ? "matched-skill"
                                    : "missing-skill"
                            }`}
                        >
                            {type === "matched" ? "✓" : "✕"} {skill}
                        </span>
                    ))
                ) : (
                    <div className="empty-state">
                        No Skills Found
                    </div>
                )}

            </div>

        </div>
    );
}

export default SkillCard;