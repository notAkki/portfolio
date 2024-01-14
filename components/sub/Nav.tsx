"use client";
import React, { useEffect, useRef, useState } from "react";
import TestNav from "../main/TestNav";

const navLinks = [
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
                                    <span className="text-xs font-bold uppercase tracking-widest group-hover:text-slate-200">
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
