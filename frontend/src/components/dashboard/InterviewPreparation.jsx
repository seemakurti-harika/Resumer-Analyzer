import React from "react";
import {
    FaLaptopCode,
    FaUserTie,
    FaCode,
    FaBookOpen,
} from "react-icons/fa";

const SectionCard = ({ title, icon, items }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 mb-4">
            <span className="text-blue-600 text-xl">{icon}</span>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {title}
            </h3>
        </div>

        {items && items.length > 0 ? (
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                    >
                        <span className="text-green-500 font-bold mt-1">✔</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        ) : (
            <p className="text-gray-500 dark:text-gray-400">
                No recommendations available.
            </p>
        )}
    </div>
);

const InterviewPreparation = ({ data }) => {
    if (!data) return null;

    return (
        <div className="mt-8">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl p-5 shadow-lg mb-6">
                <h2 className="text-2xl font-bold">
                    🎯 Personalized Interview Preparation
                </h2>
                <p className="mt-2 text-sm opacity-90">
                    These recommendations are generated based on your resume,
                    job description, and identified skill gaps.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <SectionCard
                    title="Technical Questions"
                    icon={<FaLaptopCode />}
                    items={data.technical_questions}
                />

                <SectionCard
                    title="HR Questions"
                    icon={<FaUserTie />}
                    items={data.hr_questions}
                />

                <SectionCard
                    title="Coding Topics to Revise"
                    icon={<FaCode />}
                    items={data.coding_topics}
                />

                <SectionCard
                    title="Concepts to Study"
                    icon={<FaBookOpen />}
                    items={data.concepts_to_study}
                />
            </div>
        </div>
    );
};

export default InterviewPreparation;