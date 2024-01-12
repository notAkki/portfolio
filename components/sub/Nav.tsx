"use client";
import React, { MutableRefObject } from "react";
import { useState } from "react";
import { useEffect } from "react";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Writing", href: "#writing" },
];

const Nav = () => {
    return (
        <nav className="nav hidden lg:block">
            <ul className="mt-16 w-max">
                {navLinks.map((link) => {
                    return (
                        <li key={link.name}>
                            <a
                                className="group nav-item flex items-center py-3"
                                href={link.href}
                                key={link.name}
                            >
                                <span
                                    className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
                                ></span>
                                <span
                                    className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200`}
                                >
                                    {link.name}
                                </span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Nav;
