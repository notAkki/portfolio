import React from "react";
import { experienceData } from "../../lib/data";
import ExperiencePreview from "../sub/ExperiencePreview";

const Projects = () => {
    const ArrowRight02Icon = (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#000000"}
            fill={"none"}
            {...props}
        >
            <path
                d="M20.0001 11.9998L4.00012 11.9998"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

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
                    <span className="border-b-2 border-transparent pb-px transition group-hover:border-[#7a92f0] ease-in-out duration-200">
                        Click here for resume
                    </span>
                    <span>
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="h-4 w-4"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                            />
                        </svg> */}
                        <ArrowRight02Icon className="h-5 w-5 ml-2 -mt-0.5 text-slate-200 group-hover:text-[#a3b4f6] group-hover:translate-x-2 ease-in-out duration-200" />
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Projects;
