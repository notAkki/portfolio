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
        <div className="max-w-3xl mx-auto pt-12 lg:pt-24 px-6 text-slate-200">
            <div className="-mb-6">
                <h1 className="text-4xl tracking-tight font-bold">
                    {post.data.title}
                </h1>
                <p className="font-medium font-xs">{post.data.date}</p>
                <p className="font-medium mt-2">{post.data.subtitle}</p>
            </div>
            <article className="prose prose-invert">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
};

export default page;
