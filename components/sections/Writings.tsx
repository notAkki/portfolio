import React from "react";
import getPostMetadata from "../getPostMetadata";
import PostPreview from "../sub/PostPreview";

const Writings = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));
    return (
        <div>
            <div className="text-slate-200 text-s font-bold mb-4 ">WRITING</div>
            <div>{postPreviews}</div>
        </div>
    );
};

export default Writings;
