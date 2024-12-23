"use client";
import React, { useState } from "react";
import { projectsData } from "../../lib/data";
import Image from "next/image";
import { ExternalLinkIcon } from "../../utils/icons";

type ProjectProps = (typeof projectsData)[number];

function ProjectReview({
  title,
  description,
  tags,
  imageUrl,
  link,
  isLink,
  alt,
  achievement,
  hasAchievement,
}: ProjectProps) {
  return (
    <div className="mb-6 sm:mb-8 last:mb-0 sm:h-64">
      <a
        href={link}
        target={isLink ? "_blank" : "_self"}
        rel="noreferrer noopener"
        className="group"
      >
        <div
          className={`h-full rounded-xl relative flex flex-col-reverse sm:flex-row group ${
            isLink ? "" : "cursor-default"
          }`}
        >
          <div className="pt-4 pb-7 px-5 sm:w-[50%] sm:px-0 sm:py-0 sm:my-auto sm:flex sm:flex-col group">
            <div className="flex text-lg text-slate-200 font-semibold group">
              <div className="sm:group-hover:text-[#a3b4f6] transition ease-in-out duration-500">
                {title}
              </div>
              <span>
                <ExternalLinkIcon
                  className={`inline h-5 w-5 ml-2 -mt-1 text-slate-200 sm:group-hover:text-[#a3b4f6] transition ease-in-out duration-500 group-hover:shadow-md group-hover:translate-x-1 group-hover:-translate-y-0.5 ${
                    isLink ? "" : "hidden"
                  }`}
                />
              </span>
            </div>
            <div
              className={
                hasAchievement
                  ? "text-slate-200 text-sm font-bold sm:group-hover:text-[#a3b4f6] transition ease-in-out duration-500"
                  : "hidden"
              }
            >
              {achievement}
            </div>
            <div className="text-sm mt-2 text-slate-400 sm:mr-5">
              {description}
            </div>
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
          <div className="px-10 sm:p-0 sm:w-[calc(50%-8px)] group aspect-[5/3] sm:aspect-[4/3] relative my-auto rounded-lg">
            <Image
              src={imageUrl}
              alt={alt}
              className="object-cover aspect-[4/3] rounded-lg sm:group-hover:scale-105 transition ease-in-out duration-500"
            />
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectReview;
