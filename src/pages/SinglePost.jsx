import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"

// importo axios
import axios from 'axios'

export default function SinglePost() {

    const navigate = useNavigate()
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
        <div className="singlepost">
            <p>numero post: {id}</p>
            <h4>dettagli:</h4>
            <p>{postDetails.title}</p>
            <button onClick={() => navigate(-1)}>torna alla pagina preceedente</button>
        </div>
    )
}