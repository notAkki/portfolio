import jarvis from "../public/jarvis.png";
import shopping from "../public/shopping.png";
import click from "../public/click.png";
import basic from "../public/basic.png";
import spots from "../public/spots.png";
import colors from "../public/colors.png";

import watstreet from "../public/watstreet.png";
import brewbites from "../public/brewbites.png";

export const experienceData = [
    {
        position: "Lead Frontend Developer",
        company: "Wat Street",
        date: "Feb. 2024 - Present",
        description:
            "Managed team of developers designing and developing the club site and an algorithmic trading backtesting platform with real time stock and crypto data.",
        tags: ["Next.js", "Typescript", "Tailwind", "Polygon API"],
        link: "https://watstreet.netlify.app/",
        imageUrl: watstreet,
        alt: "Wat Street Logo",
    },
    {
        position: "Operations Technology Specialist",
        company: "Brew Bites",
        date: "May. 2024 - Present",
        description:
            "Designed a website optimizing SEO, developed a digital menu system, led networking, and created graphic designs, driving revenue growth and enhancing brand identity.",
        tags: ["Next.js", "Business"],
        link: "https://brewbites.food/",
        imageUrl: brewbites,
        alt: "Brew Bites Logo",
    },
] as const;

export const projectsData = [
    {
        title: "Spots",
        description:
            "A 3D classroom availability map to help students find study spots on campus.",
        tags: ["Next.js", "Flask", "Python", "Mapbox"],
        imageUrl: spots,
        link: "https://spots.aksharbarot.com/",
        isLink: true,
        alt: "Spots Project Image",
        achievement: "10000+ users in 5 days",
        hasAchievement: true,
    },
    {
        title: "Jarvis",
        description:
            "An interactive 3D hologram environment with object manipulation, voice commands, & gesture recognition.",
        tags: ["Next.js", "Python", "Flask", "Three.js", "OpenCV", "Mediapipe"],
        imageUrl: jarvis,
        link: "https://github.com/ishaan1013/jarvis",
        isLink: true,
        alt: "Jarvis Project Image",
        achievement: "Featured on OpenCV Live",
        hasAchievement: true,
    },
    {
        title: "Colors",
        description:
            "A tool allowing easy conversion of color formats for Tailwind.",
        tags: ["Next.js", "Tailwind", "shadcn"],
        imageUrl: colors,
        link: "https://colors.aksharbarot.com/",
        isLink: true,
        alt: "Colors Project Image",
        achievement: "",
        hasAchievement: false,
    },
    {
        title: "BASIC Web",
        description:
            "A BASIC variant and compiler for frontend web development built during UofT Hacks 2024.",
        tags: ["TypeScript", "BASIC", "HTML/CSS"],
        imageUrl: basic,
        link: "https://devpost.com/software/basic-web",
        isLink: true,
        alt: "BASICWeb Project Image",
        achievement: "UofT Hacks 2024 Winner",
        hasAchievement: true,
    },
    {
        title: "Shopping List App",
        description:
            "Cross-platform listing application deployed as a Progressive Web App (PWA).",
        tags: ["Javascript", "Firebase", "HTML/CSS"],
        imageUrl: shopping,
        link: "#0",
        isLink: false,
        alt: "Shopping List Project Image",
        achievement: "",
        hasAchievement: false,
    },
    {
        title: "Click Clack",
        description:
            "A simple, distraction-free, minimal CPS test with customizable testing options.",
        tags: ["Javascript", "HTML/CSS"],
        imageUrl: click,
        link: "https://notakki.github.io/ClickClack/",
        isLink: true,
        alt: "Click Clack Project Image",
        achievement: "",
        hasAchievement: false,
    },
] as const;
