import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import MouseFollow from "../../components/main/MouseFollow";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Akshar Barot",
    description: "Full-stack developer bridging tech and design @ UWaterloo",
    keywords: [
        "akshar barot",
        "akshar",
        "barot",
        "software developer",
        "student",
        "university of waterloo",
        "uwaterloo",
        "waterloo",
        "toronto",
        "st. louis",
        "summer 2024",
        "web developer",
        "full stack",
        "frontend",
        "ui",
        "ux",
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body
                className={`${rubik.className} bg-[#030014] bg-gradient-to-br from-[#030014] from-50% to-[#1a1134] leading-relaxed text-slate-400 antialiased selection:bg-[#7a92f0] selection:text-indigo-950 min-h-screen overscroll-none`}
            >
                <div>
                    {children}
                    <div className="mousefollowmobile md:hidden absolute bottom-0 -right-16"></div>
                    <MouseFollow />
                </div>
            </body>
        </html>
    );
}
