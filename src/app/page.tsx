import React, { useEffect, useRef } from "react";
import Right from "../../components/main/Right";
import Left from "../../components/main/Left";

export default function Home() {
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:gap-4 z-0">
                <Left />
                <Right />
            </div>
        </div>
    );
}
