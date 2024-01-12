import React from "react";
import getPostMetadata from "../getPostMetadata";
import PostPreview from "./PostPreview";

const Writings = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));
    return (
        <div>
            <p className="text-slate-200 text-s font-bold mb-4 ">WRITING</p>
            <div>{postPreviews}</div>
        </div>
    );
};

export default Writings;
