import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio",
    description: "",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body
                className={`${inter.className} bg-gradient-to-br from-[#030014] from-50% to-[#1a1134] leading-relaxed text-slate-400 antialiased selection:bg-[#7a92f0] selection:text-indigo-950 min-h-screen`}
            >
                {children}
            </body>
        </html>
    );
}
