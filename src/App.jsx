// importo gli elementi per le rotte
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// importo le pagine
import Posts from './routes/posts'
import WhoWeAre from './routes/WhoWeAre'
import Homepage from './routes/Homepage'

// importo Layout
import DefaultLayout from './layouts/DefaultLayout'

// importo axios
import axios from 'axios'

// importo useState e useEffect per la chiamata axios
import { useEffect, useState } from 'react'


function App() {

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

  // da qui in poi è ciò che visualizzo in pagina
  return (
    <BrowserRouter>
      <Routes>

        {/* applico le rotte delle varie pagine ad un default */}
        <Route path="/" element={<DefaultLayout />}>

          {/* homepage */}
          <Route index element={<Homepage />} />

          {/* posts. passo come props l array risposta della chiamata axios*/}
          <Route path="posts" element={<Posts posts={posts} />} />

          {/* chi siamo */}
          <Route path="chi-siamo" element={<WhoWeAre />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
