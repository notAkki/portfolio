import React from "react";
import { PostMetadata } from "../PostMetadata";
import { ExternalLinkIcon } from "../../utils/icons";

const WritingPreview = (props: PostMetadata) => {
  return (
    <div className="mb-0">
      <div className="relative group">
        <a href={`/posts/${props.slug}`} rel="noreferrer noopener">
          <div className="pt-4 pb-7 sm:pr-2 sm:pt-6 flex flex-col h-full">
            <div className="text-xs font-bold">{props.date}</div>
            <div className="flex text-lg text-slate-200 font-semibold group">
              <div className="sm:group-hover:text-[#a3b4f6] transition ease-in-out duration-500 text-pretty">
                {props.title}
                <span>
                  {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="inline h-4 w-4 ml-2 -mt-2 sm:group-hover:text-[#a3b4f6] transition ease-in-out duration-500 group-hover:shadow-md group-hover:translate-x-1 group-hover:-translate-y-0.5"
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
                                    </svg> */}
                  <ExternalLinkIcon className="inline h-5 w-5 ml-2 -mt-1 text-slate-200 sm:group-hover:text-[#a3b4f6] transition ease-in-out duration-500 group-hover:shadow-md group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
            <div className="text-sm mt-2 text-slate-400">{props.subtitle}</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default WritingPreview;
