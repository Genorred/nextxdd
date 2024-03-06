import React from 'react';
import Link from "next/link";
const getPosts = async(): Promise<any[]> => {
    const response  = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            next: {
                revalidate: 60
            }
        })
    if(!response.ok)
        throw new Error('Unable to fetch posts')
    return response.json()
}
const Page = async () => {
    const posts = await getPosts()
    if(!posts){
        return <div>dsad</div>
    }
    return (
        <ul>
            {posts.map(post=>(
                <li key={post.id}><Link href={`kira/${post.id}`}>{post.title}</Link></li>)
            )}
        </ul>
    );
};

export default Page;