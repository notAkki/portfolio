import React from "react";
import About from "../sub/About";
import Projects from "../sub/Projects";
import Writings from "../sub/Writings";
import Footer from "../sub/Footer";
import Experiences from "../sub/Experiences";

const Content = () => {
    return (
        <div id="content" className="pt-24 lg:w-1/2">
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

export default Content;
