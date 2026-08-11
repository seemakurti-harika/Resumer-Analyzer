function SkillProgress({ title, value }) {

    return (

        <div className="mb-5">

            <div className="flex justify-between mb-2">

                <span>{title}</span>

                <span>{value}%</span>

            </div>

            <div className="h-3 bg-slate-200 rounded-full">

                <div
                    className="h-3 rounded-full bg-blue-600"
                    style={{
                        width: `${value}%`
                    }}
                />

            </div>

        </div>

    );

}

export default SkillProgress;