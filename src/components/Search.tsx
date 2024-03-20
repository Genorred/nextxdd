"use client"
import React, {useEffect, useState} from 'react';
import useInput from "@/helpers/useInput";
import useDebounce from "@/helpers/useDebounce";
import useSWR, {useSWRConfig} from "swr";
import getPosts from "@/helpers/getPosts";
import {usePosts} from "@/app/kira/usePosts";

const Search = () => {
    const setSortValue = usePosts(st=>st.setSortValue)
    // useEffect(() => {
    //     fetchPosts()
    // }, []);
    // const fetchPosts = usePosts(st=>st.fetchPosts)
    const fetchPosts = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value, 'set')
        setSortValue(e.target.value)
    }
    const fetchDebounced = useDebounce(fetchPosts)
    return (
        <input type='search' onChange={fetchDebounced}/>
    );
};

export default Search;