import React from "react";
import { experienceData } from "../../lib/data";
import ExperiencePreview from "../sub/ExperiencePreview";

const Projects = () => {
    return (
        <div>
            <p className="text-slate-200 font-bold mb-4 ">EXPERIENCE</p>
            <div>
                {experienceData.map((experience) => (
                    <>{<ExperiencePreview {...experience} />}</>
                ))}
            </div>
            <div>
                <a
                    href="/resume.pdf"
                    className="inline-flex items-center font-bold leading-tight text-slate-200 group"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <span className="border-b-2 border-transparent pb-px transition group-hover:border-[#7a92f0]">
                        Click here for resume
                    </span>
                    <span className="ml-2 group-hover:translate-x-2 group-hover:text-[#a3b4f6] ease-in-out duration-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="h-4 w-4"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                            />
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Projects;
