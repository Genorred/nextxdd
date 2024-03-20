import {create} from "zustand";
import getPosts from "@/helpers/getPosts";
interface usePostsType {
    posts: any[]
    sortValue: string
    setSortValue: (value: string) => void
    fetchPosts: (title?: string)=>void
}
export const usePosts = create<usePostsType>((set)=>({
    posts: [],
    sortValue: '',
    setSortValue: (sortValue: string)=>set({sortValue}),
    fetchPosts: async (title)=> {
        const posts = await getPosts(title)
        console.log(posts, 'pl')
        set({posts})
    }
}))