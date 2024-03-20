
const getPosts = async(value?: string): Promise<any[]> => {
    const response  = await fetch(
        `https://jsonplaceholder.typicode.com/posts${value? `?q=${value}`: ''}`,
        {
            next: {
                revalidate: 60
            }
        })
    if(!response.ok)
        throw new Error('Unable to fetch posts')
    const posts = await response.json()
    return posts
}
export default getPosts