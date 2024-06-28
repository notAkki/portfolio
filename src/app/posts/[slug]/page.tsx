import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../../components/getPostMetadata";
import { Metadata } from "next";

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const dynamicParams = false;

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
        <>
            {/* <Head>
                <title>{post.data.title}</title>
                <meta name="description" content={post.data.subtitle} />
                <meta name="keywords" content={post.data.keywords.join(",")} />
            </Head> */}
            <div className="max-w-3xl mx-auto pt-12 lg:pt-24 px-6 text-slate-200 lg:pb-20">
                <div className="relative">
                    <div className="absolute -left-24">
                        <a
                            href="/#writing"
                            className="hidden lg:block fixed group"
                        >
                            <div className="ml-2 group-hover:-translate-x-2 ease-in-out duration-200 group">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="h-6 w-6"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
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
        </>
    );
};

export async function generateMetadata({
    params,
}: {
    params: any;
}): Promise<Metadata> {
    const slug = params.slug;
    const post = getPostContent(slug);
    return {
        title: `${post.data.title} | Akshar Barot`,
        description: post.data.subtitle,
        keywords: post.data.keywords,
    };
}

export default page;
