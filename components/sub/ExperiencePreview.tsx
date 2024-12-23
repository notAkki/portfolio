"use client";
import React, { useState } from "react";
import { experienceData } from "../../lib/data";
import Image from "next/image";

import { ExternalLinkIcon } from "../../utils/icons";

type ExpProps = (typeof experienceData)[number];

function ExperiencePreview({
  position,
  company,
  date,
  description,
  tags,
  link,
  imageUrl,
  alt,
}: ExpProps) {
  return (
    <div className="mb-6 sm:mb-8">
      <a href={link} target={"_blank"} rel="noreferrer noopener">
        <div className="rounded-xl transition ease-in-out flex flex-row group pt-4">
          <Image
            src={imageUrl}
            alt={alt}
            quality={100}
            priority
            className="ml-0 h-16 w-16 sm:h-[70px] sm:w-[70px] object-scale-down group"
          />
          <div className="pb-4 ml-4 pr-2 pt-2 flex flex-col group">
            <div className="text-xs font-bold">{date}</div>
            <div className="text-lg text-slate-200 font-semibold group">
              <div className="sm:group-hover:text-[#a3b4f6] transition ease-in-out duration-500 text-balance">
                {position}
                <span>
                  <ExternalLinkIcon className="inline h-5 w-5 ml-2 -mt-1 text-slate-200 sm:group-hover:text-[#a3b4f6] transition ease-in-out duration-500 group-hover:shadow-md group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </span>
              </div>
              <div className="font-normal text-base sm:group-hover:text-[#a3b4f6] transition ease-in-out duration-500">
                @ {company}
              </div>
            </div>
            <div className="text-sm mt-2 text-slate-400 mr-5">
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
        </div>
      </a>
    </div>
  );
}

export default ExperiencePreview;
