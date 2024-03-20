import React from 'react';
import Posts, {postsType} from "@/components/Posts";
import getPosts from "@/helpers/getPosts";
import {InferGetStaticPropsType, GetStaticProps} from "next";
import fetchPosts from "@/helpers/fetchPosts";
const PostsContainer = async () => {
    const postsInit = await fetchPosts()
    return (
        <Posts postsInit={postsInit}/>
    );
};
export default PostsContainer;