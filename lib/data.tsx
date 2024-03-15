import jarvis from "../public/jarvis.png";
import shopping from "../public/shopping.png";
import click from "../public/click.png";
import basic from "../public/basic.png";

import watstreet from "../public/watstreet.png";

export const experienceData = [
    {
        position: "UI/UX Frontend Developer",
        company: "Wat Street",
        date: "2024 - Present",
        description:
            "Designed and developed web apps and a testing platform for the University of Waterloo's quantitative finance design team.",
        tags: ["Figma", "React", "shadcn"],
        link: "https://watstreet.netlify.app/",
        imageUrl: watstreet,
    },
] as const;

export const projectsData = [
    {
        title: "Jarvis",
        description:
            "An interactive, 3D hologram environment complete with voice commands, gesture recognition, and object manipulation.",
        tags: ["Next.js", "Python", "Flask", "Three.js", "OpenCV", "Mediapipe"],
        imageUrl: jarvis,
        link: "https://github.com/ishaan1013/jarvis",
        isLink: true,
    },
    {
        title: "BASIC Web",
        description:
            "A BASIC variant and compiler for frontend web development built during UofT Hacks 2024.",
        tags: ["TypeScript", "BASIC", "HTML/CSS"],
        imageUrl: basic,
        link: "https://devpost.com/software/basic-web",
        isLink: true,
    },
    {
        title: "Shopping List App",
        description:
            "Cross-platform listing application deployed as a Progressive Web App (PWA).",
        tags: ["Javascript", "Firebase", "HTML/CSS"],
        imageUrl: shopping,
        link: "#0",
        isLink: false,
    },
    {
        title: "Click Clack",
        description:
            "A simple, distraction-free, minimal CPS test with customizable testing options.",
        tags: ["Javascript", "HTML/CSS"],
        imageUrl: click,
        link: "https://notakki.github.io/ClickClack/",
        isLink: true,
    },
] as const;
