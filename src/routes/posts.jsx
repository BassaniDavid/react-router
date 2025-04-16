export default function Posts({ posts }) {
    return (
        <>
            <h1>Posts:</h1>

            {/* lista con i post ricevuti da app.jsx */}
            <ul className="container-posts">
                {/* funzione per trasformare l array in componenti HTMl */}
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