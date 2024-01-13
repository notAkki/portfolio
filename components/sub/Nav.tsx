"use client";
import React, { useEffect, useRef, useState } from "react";
import TestNav from "../main/TestNav";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Writing", href: "#writing" },
];

const Nav = () => {
    const [visibleKey, setVisibleKey] = useState(0);
    const onClick = (item: any, key: any) => {
        setVisibleKey(key);
    };

    return (
        <nav className="nav hidden lg:block">
            <ul className="mt-16 w-max">
                {navLinks.map((item, key) => {
                    return (
                        <li
                            key={`item-${key}`}
                            className={`${
                                key === visibleKey ? " active" : ""
                            } group text-slate-500 py-3`}
                        >
                            <a
                                href={`${item.href}`}
                                onClick={() => onClick(item, key)}
                            >
                                <span
                                    className={`indicator inline-block mr-4 h-px w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 transition-all`}
                                ></span>
                                <span className="text-xs font-bold uppercase tracking-widest group-hover:text-slate-200">
                                    {item.name}
                                </span>
                            </a>
                        </li>
                    );
                })}
                {/* <div className="mover"></div> */}
            </ul>
        </nav>
    );
};

export default Nav;
