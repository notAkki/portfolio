import React from "react";
import Nav from "../sub/Nav";
import Links from "../sub/Links";

const Left = () => {
    return (
        <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <div className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-200">
                    Akshar Barot
                </div>
                <a
                    className="flex text-slate-200 group"
                    href="https://se-webring.xyz/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <div className="font-medium tracking-tight text-slate-200 sm:text-xl text-nowrap mt-4">
                        Software Engineer @ University of Waterloo
                        <span className="inline-flex">
                            <svg
                                className="h-4 w-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition duration-500 ease-in-out"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                                />
                            </svg>
                        </span>
                    </div>
                </a>

                <div className="mt-4 max-w-xs leading-normal">
                    Seeking winter 2025 internships
                </div>
                <div className="lg:mr-[70px] mt-4 md:mt-8 leading-relaxed">
                    <div className="mb-4">
                        I'm an aspiring software developer with keen interest in
                        crafting UI/UX and exploring technology and design.
                    </div>
                    <div className="mb-4">
                        I'm working on expanding my horizons by learning about
                        machine learning and cloud development.
                    </div>
                    <div>
                        I like playing Minecraft with friends and speed typing.
                        I also enjoy basketball, ultimate frisbee, and Rubik's
                        cube solving.
                    </div>
                </div>
                <Nav />
            </div>
            <Links />
        </div>
    );
};

export default Left;
