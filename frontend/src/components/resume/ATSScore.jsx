function ATSScore({ score }) {

    return (

        <div className="ats-card">

            <h2>ATS Score</h2>

            <div className="ats-number">

                {score}%

            </div>

            <div className="ats-progress">

                <div
                    className="ats-fill"
                    style={{
                        width: `${score}%`
                    }}
                ></div>

            </div>

        </div>

    );

}

export default ATSScore;