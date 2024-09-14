import React from "react";
import { projectsData } from "../../lib/data";
import ProjectPreview from "../sub/ProjectPreview";

const Projects = () => {
    return (
        <div>
            <p className="text-slate-200 text-s font-bold mb-4 ">PROJECTS</p>
            <div>
                {projectsData.map((project) => (
                    <>{<ProjectPreview {...project} />}</>
                ))}
            </div>
        </div>
    );
};

export default Projects;
