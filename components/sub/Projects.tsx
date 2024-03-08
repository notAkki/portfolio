import React from "react";
import { projectsData } from "../../lib/data";
import Project from "./Project";

const Projects = () => {
    return (
        <div>
            <p className="text-slate-200 text-s font-bold mb-4 ">PROJECTS</p>
            <div>
                {projectsData.map((project) => (
                    <>{<Project {...project} />}</>
                ))}
            </div>
        </div>
    );
};

export default Projects;
