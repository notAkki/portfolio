import React from "react";
import About from "../sub/About";
import Projects from "../sub/Projects";
import Writings from "../sub/Writings";
import Footer from "../sub/Footer";

const Content = () => {
    return (
        <div id="content" className="pt-24 lg:w-1/2 lg:pt-24">
            <section
                id="about"
                className="mb-16 scroll-mt-24 md:mb-24"
                aria-label="About me"
            >
                <About />
            </section>
            <section
                id="projects"
                className="mb-6 scroll-mt-24 md:mb-24"
                aria-label="Selected Projects"
            >
                <Projects />
            </section>
            <section
                id="writing"
                className="mb-16 scroll-mt-24 md:mb-24"
                aria-label="Selected Projects"
            >
                <Writings />
            </section>
            <Footer />
        </div>
    );
};

export default Content;
