"use client";
import React, { useEffect, useRef, useState } from "react";

const items = [
    {
        text: "about",
    },
    {
        text: "projects",
    },
    {
        text: "writing",
    },
];

const TestNav = (observerRefs) => {
    const [visibleKey, setVisibleKey] = useState(0);
    // const observers = useRef([]);

    const onClick = (item, key) => {
        setVisibleKey(key);
    };

    // const observerCallback = async (e, key) => {
    //     if (e.length && e[0].isIntersecting) {
    //         setVisibleKey(key);
    //     }
    // };

    // useEffect(() => {
    //     if (observerRefs.current?.length && observers.current) {
    //         Array.from(Array(10).keys()).forEach((_u, key) => {
    //             observers.current[key] = new IntersectionObserver((e) =>
    //                 observerCallback(e, key)
    //             );
    //             if (observerRefs.current[key]) {
    //                 observers.current[key].observe(observerRefs.current[key]);
    //             }
    //         });
    //     }
    //     return () =>
    //         observers.current?.forEach((observer) =>
    //             observer?.current?.disconnect()
    //         );
    // }, [observerRefs, observers]);

    return (
        <>
            <div className="navigation">
                <ul>
                    {items.map((item, key) => {
                        return (
                            <li
                                key={`item-${key}`}
                                className={`list${
                                    key === visibleKey ? " active" : ""
                                }`}
                                onClick={() => onClick(item, key)}
                            >
                                <a href={`#${item.text.toLowerCase()}`}>
                                    <span className="text">{item.text}</span>
                                </a>
                            </li>
                        );
                    })}
                    <div className="indicator"></div>
                </ul>
            </div>
        </>
    );
};

export default TestNav;
