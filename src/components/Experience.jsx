import React from "react";

const Experience = () => {
    const experiences = [
        {
            role: "Software Developer Intern",
            company: "NeraSoft Technologies, Noida",
            duration: "November 2024 - Present",
            description:
                "During my internship, I developed and deployed web applications using React.js and Node.js, resulting in a 15% improvement in performance metrics. I collaborated with cross-functional teams to implement responsive designs and optimize user experience.",
        },
        {
            role: "Java Developer Training Program ",
            company: "QSpiders, Noida",
            duration: "July 2024 - November 2024",
            description:
                " Successfully completed a comprehensive training program in Web Technologies and Java Development, designed to build expertise in full-stack application development. The training encompassed a wide range of topics, including: CoreJava, Web Technologies, Database Management and Frameworks and Tools.",
        },
    ];

    return (
        <div className="bg-primary py-20 px-6" id="experience">
            <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl text-white font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Experience
          </h2>
                <div className="space-y-10 text-white">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="border-l-2 border-blue-500 pl-6 relative"
                        >
                            {/* Timeline point */}
                            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 top-0"></div>

                            {/* Experience Details */}
                            <h3 className="text-xl font-semibold">
                                {exp.role}
                            </h3>
                            <span className="block text-sm mb-1">
                                {exp.duration}
                            </span>
                            <span className="block font-medium">
                                {exp.company}
                            </span>
                            <p className="mt-4">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
