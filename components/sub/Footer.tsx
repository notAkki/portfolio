import React from "react";

const Footer = () => {
    return (
        <div className="max-w-md text-sm text-slate-500 lg:pb-20">
            <p>Akshar Barot</p>
            <p className="mt-1">
                Built with{" "}
                <a
                    className="font-medium text-slate-300"
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Next.js{" "}
                </a>
                and{" "}
                <a
                    className="font-medium text-slate-300"
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Tailwind
                </a>{" "}
                <span className="mx-1 font-bold text-md">·</span> Deployed with{" "}
                <a
                    href="https://vercel.com/"
                    className="font-medium text-slate-300"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Vercel
                </a>
            </p>
            <p className="mt-1">
                Inspired by{" "}
                <a
                    className="font-medium text-slate-300"
                    href="https://brittanychiang.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Brittany Chiang
                </a>
            </p>
        </div>
    );
};

export default Footer;
