export default function Posts({ posts }) {
    return (
        <>
            <h1>Posts:</h1>
            <ul className="container-posts">
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>post numero {post.id}</h3>
                        <h3 className="title">titolo: {post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}