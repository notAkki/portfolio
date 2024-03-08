"use client";
import React, { useState } from "react";
import { experienceData } from "../../lib/data";
import Image from "next/image";

type ProjectProps = (typeof experienceData)[number];

function Project({
    position,
    company,
    date,
    description,
    tags,
    link,
    imageUrl,
}: ProjectProps) {
    return (
        <div className="mb-6 sm:mb-8">
            <a href={link} target={"_blank"} rel="noreferrer noopener">
                <div
                    className="rounded-xl transition ease-in-out bg-black/0 hover:bg-[#7a92f006] hover:shadow-lg hover:shadow-indigo-950/20 duration-300 
                flex flex-row group pt-4"
                >
                    {/* <div className="pl-4 group w-[80px]"> */}
                    <Image
                        src={imageUrl}
                        alt="Project I worked on"
                        quality={100}
                        priority
                        className="pl-4 h-16 w-16 sm:h-20 sm:w-20 object-scale-down group"
                    />
                    {/* </div> */}
                    <div className="pb-4 ml-4 pr-2 pt-2 flex flex-col group">
                        <p className="text-xs font-bold">{date}</p>
                        <div className="text-lg text-slate-200 font-semibold group">
                            <h3 className="group-hover:text-[#a3b4f6] transition ease-in-out duration-500 group-hover:shadow-lg">
                                {position}
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="inline h-4 w-4 ml-2 -mt-2 group-hover:text-[#a3b4f6] transition ease-in-out duration-500 group-hover:shadow-md group-hover:translate-x-1 group-hover:-translate-y-0.5"
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
                            </h3>
                            <h4 className="-mt-1.5 font-normal text-base group-hover:text-[#a3b4f6] transition ease-in-out duration-500 group-hover:shadow-lg">
                                @ {company}
                            </h4>
                        </div>
                        <p className="text-sm mt-2 text-slate-400 mr-5">
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
                </div>
            </a>
        </div>
    );
}

export default Project;
