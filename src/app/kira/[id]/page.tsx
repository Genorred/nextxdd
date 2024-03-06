import React from 'react';
interface Props {
    params: {
        id: string
    }
    children: React.ReactNode
}
const getPost = async(id: string): Promise<any> => {
    const response  = await fetch('https://jsonplaceholder.typicode.com/posts/'+id,
        {
            next: {
                revalidate: 60
            }
        })
    return response.json()
}
const Page = async({params}: any) => {
    const post: any = await getPost(params.id)
    return (
        <div className='flex flex-col items-center'>
            <div className='items-start'>
                <h1 className='text-4xl'>
                    {post.title}
                </h1>
                <p>
                    {post.body}
                </p>
            </div>
        </div>
    );
};

export default Page;