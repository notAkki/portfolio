import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../../components/getPostMetadata";

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

const page = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <div className="max-w-3xl mx-auto pt-12 lg:pt-24 px-6 text-slate-200 lg:pb-20">
            <div className="relative">
                <div className="absolute -left-24">
                    <a href="/#writing" className="hidden lg:block fixed group">
                        <div className="ml-2 group-hover:-translate-x-2 ease-in-out duration-200 group">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="h-6 w-6"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                                />
                            </svg>
                        </div>
                        <p className="opacity-0 group-hover:opacity-100 group-hover:block text-[12px] text-slate-200 group duration-200">
                            Go back
                        </p>
                    </a>
                </div>
                <div>
                    <h1 className="text-4xl tracking-tight font-bold">
                        {post.data.title}
                    </h1>
                    <p className="font-light font-xs text-slate-400">
                        {post.data.date}
                    </p>
                    <p className="mt-2">{post.data.subtitle}</p>
                </div>
            </div>
            <article className="prose prose-invert tracking-wide">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
};

export default page;
