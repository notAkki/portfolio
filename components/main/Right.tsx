import React from "react";
import Projects from "../sections/Projects";
import Writings from "../sections/Writings";
import Footer from "../sections/Footer";
import Experiences from "../sections/Experiences";

const Right = () => {
    return (
        <div id="right" className="pt-24 lg:w-1/2">
            <section
                id="experience"
                className="section mb-6 scroll-mt-24 md:mb-24"
            >
                <Experiences />
            </section>
            <section
                id="projects"
                className="section mb-6 scroll-mt-24 md:mb-24"
            >
                <Projects />
            </section>
            <section
                id="writing"
                className="section mb-16 scroll-mt-24 md:mb-24"
            >
                <Writings />
            </section>
            <Footer />
        </div>
    );
};

export default Right;
