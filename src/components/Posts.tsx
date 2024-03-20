'use client'
import React, {useCallback, useEffect, useState} from 'react';
import Link from "next/link";
import useSWR from "swr";
import getPosts from "@/helpers/getPosts";
import {usePosts} from "@/app/kira/usePosts";
export type postsType = { id: number, title: string }[]
const Posts = ({postsInit}: {postsInit: postsType}) => {
    const sortValue = usePosts(st=>st.sortValue)
    const fetchPosts = useCallback(async ()=>{
        if(sortValue){
            console.log(postsInit)
            const posts = await getPosts(sortValue)
            console.log('huhijok')
            return posts
        }
    }, [sortValue])
    const {data: posts, isLoading, error} = useSWR(`posts'${sortValue}`, fetchPosts)
    return (<>
            {
                !sortValue 
                    ? <ul>
                        {postsInit.map(post => (
                            <li key={post.id}><Link href={`kira/${post.id}`}>{post.title}</Link></li>)
                        )}
                    </ul>
                    :<>
                        {!isLoading
                            ? <>
                                {posts
                                    ? <ul>
                                        {posts.map(post => (
                                            <li key={post.id}><Link href={`kira/${post.id}`}>{post.title}</Link></li>)
                                        )}
                                    </ul>
                                    : <div></div>
                                }
                            </>
                            : <div>lllllllllllllllllllllllllllllllll</div>
                        }
                    </>
            }
            </>
    );
};
export default Posts;