"use client";
import React, { useState } from "react";
import { projectsData } from "../../lib/data";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

function Project({
    title,
    description,
    tags,
    imageUrl,
    link,
    isLink,
}: ProjectProps) {
    return (
        <div className="mb-3 sm:mb-8 last:mb-0">
            <a
                href={link}
                target={isLink ? "_blank" : "_self"}
                rel="noreferrer noopener"
            >
                <section className="rounded-xl overflow-hidden relative transition ease-in-out bg-black/0 hover:bg-[#7a92f006] hover:shadow-lg hover:shadow-indigo-950/20 duration-300 grid sm:grid-cols-2 group">
                    <div className="pt-4 pb-7 px-5 sm:pl-5 sm:pr-2 sm:pt-10 flex flex-col h-full">
                        <div className="flex text-lg text-slate-200 font-semibold group">
                            <h3 className="group-hover:text-[#a3b4f6] transition ease-in-out duration-500 group-hover:shadow-lg">
                                {title}
                            </h3>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className={
                                    isLink
                                        ? "inline h-4 w-4 ml-2 mt-1 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition group-hover:text-[#a3b4f6]"
                                        : "hidden"
                                }
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
                        </div>
                        <p className="text-sm mt-2 text-slate-400">
                            {description}
                        </p>
                        <ul className="flex flex-wrap mt-4 gap-2">
                            {tags.map((tag, index) => (
                                <li
                                    className="bg-[#7a92f0]/15 px-3 py-1 text-[0.65rem] font-medium tracking-wider text-[#a3b4f6] rounded-md"
                                    key={index}
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <Image
                            src={imageUrl}
                            alt="Project I worked on"
                            quality={95}
                            priority
                            className="hidden sm:block absolute rounded-lg top-[5%] right-[5%] w-[45%] h-[90%] border-2 border-[#7a92f0]/15 object-cover group-hover:border-[#7a92f0]/50 group-hover:shadow-md group-hover:shadow-indigo-950/20 transition ease-in-out duration-500"
                        />
                    </div>
                </section>
            </a>
        </div>
    );
}

export default Project;
