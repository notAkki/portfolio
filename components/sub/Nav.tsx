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
            <div className="relative">
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
                                        className={`indicator inline-block h-px w-0 transition-all duration-500 ease-in-out`}
                                    ></span>
                                    <span className="ml-3 text-xs font-bold uppercase tracking-widest group-hover:text-slate-200">
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
