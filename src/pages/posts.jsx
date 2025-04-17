// importo axios
import axios from 'axios'

// importo useState e useEffect per la chiamata axios
import { useEffect, useState } from 'react'


export default function Posts() {

    // creo variabile dinamica per i post 
    const [posts, setPosts] = useState([])

    // effettuo la chiamata axios
    function fetchPosts() {
        axios.get("https://jsonplaceholder.typicode.com/posts")

            // salvo la risposta in posts
            .then(res => setPosts(res.data))

    }

    // attivo useEffect in modo che qunado si carichi la pagina, invii la chiamata
    useEffect(fetchPosts, [])

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