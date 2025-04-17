import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// importo axios
import axios from 'axios'

export default function SinglePost() {
    const { id } = useParams()

    const [postDetails, setPostsDetails] = useState({})

    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

            // salvo la risposta in postDetails
            .then(res => setPostsDetails(res.data))

            // in caso di errore
            .catch(err => console.log(err))


    }, [])

    return (
        <div>
            <p>numero post: {id}</p>
            <h3>dettagli</h3>
            <p>{postDetails.title}</p>
        </div>
    )
}