"use client";
import React, { useEffect, useRef, useState } from "react";

const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Writing", href: "#writing" },
];

const Nav = () => {
    const [visibleKey, setVisibleKey] = useState(0);
    const [clicked, setClicked] = useState(false);
    const onClick = (item: any, key: any) => {
        setVisibleKey(key);
        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, 1000);
    };

    useEffect(() => {
        const handleScroll = () => {
            let scrollPosition = window.scrollY;
            const sections = document.querySelectorAll("section");

            if (sections) {
                if (
                    sections[0].offsetTop <= scrollPosition + 100 &&
                    sections[0].offsetTop + sections[0].offsetHeight >
                        scrollPosition + 100
                ) {
                    setVisibleKey(0);
                } else if (
                    sections[1].offsetTop <= scrollPosition + 100 &&
                    sections[1].offsetTop + sections[1].offsetHeight >
                        scrollPosition - 100
                ) {
                    setVisibleKey(1);
                }
                if (
                    sections[2].offsetTop <= scrollPosition + 500 &&
                    sections[2].offsetTop + sections[2].offsetHeight >
                        scrollPosition + 100
                ) {
                    setVisibleKey(2);
                }
            }
        };

        if (!clicked) {
            window.addEventListener("scroll", handleScroll);
        }
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <nav className="nav hidden lg:block">
            <div className="relative mt-10">
                <ul className="w-max flex">
                    {navLinks.map((item, key) => {
                        return (
                            <li
                                key={`item-${key}`}
                                className={`${
                                    key === visibleKey ? " active" : ""
                                } group text-slate-500 pr-10`}
                            >
                                <a
                                    href={`${item.href}`}
                                    onClick={() => onClick(item, key)}
                                >
                                    <span className="text-xs font-bold uppercase tracking-widest hover:text-slate-200 transition ease-in-out duration-200">
                                        {item.name}
                                    </span>
                                </a>
                            </li>
                        );
                    })}
                    <div className="mover"></div>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
