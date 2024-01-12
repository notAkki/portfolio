import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            typography: {
                DEFAULT: {
                    css: {
                        color: "#94a3b8",
                        h2: {
                            color: "#f1f5f9",
                        },
                        h3: {
                            color: "#f1f5f9",
                        },
                        h4: {
                            color: "#f1f5f9",
                        },
                        a: {
                            color: "#3182ce",
                            "&:hover": {
                                color: "#2c5282",
                            },
                        },
                    },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
export default config;
