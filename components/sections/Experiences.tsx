import React from "react";
import { experienceData } from "../../lib/data";
import ExperiencePreview from "../sub/ExperiencePreview";

import { ArrowRightIcon } from "../../utils/icons";

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
          <span className="border-b-2 border-transparent pb-px transition group-hover:border-[#7a92f0] ease-in-out duration-200">
            Click here for resume
          </span>
          <span>
            <ArrowRightIcon className="h-5 w-5 ml-2 -mt-0.5 text-slate-200 group-hover:text-[#a3b4f6] group-hover:translate-x-2 ease-in-out duration-200" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Projects;
