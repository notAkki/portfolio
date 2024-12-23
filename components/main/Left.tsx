import React from "react";
import Nav from "../sub/Nav";
import Links from "../sub/Links";

import { ExternalLinkIcon } from "../../utils/icons";

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
            <span className="">
              <ExternalLinkIcon className="inline h-5 w-5 ml-2 -mt-1.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-500 ease-in-out text-slate-200" />
            </span>
          </div>
        </a>

        <div className="mt-2 leading-normal whitespace-pre">
          Incoming @ Shopify | Seeking Fall 2025 Internships
        </div>
        <div className="lg:mr-[70px] mt-4 md:mt-8 leading-relaxed">
          <div className="mb-4">
            I'm an aspiring software developer with keen interest in crafting
            UI/UX and exploring technology and design.
          </div>
          <div className="mb-4">
            I'm working on expanding my horizons by learning about machine
            learning and cloud development.
          </div>
          <div>
            I like playing Minecraft with friends and speed typing. I also enjoy
            basketball, ultimate frisbee, and Rubik's cube solving.
          </div>
        </div>
        <Nav />
      </div>
      <Links />
    </div>
  );
};

export default Left;
