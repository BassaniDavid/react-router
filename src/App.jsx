import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Posts from './routes/posts'
import WhoWeAre from './routes/WhoWeAre'
import Homepage from './routes/Homepage'
import DefaultLayout from './layouts/DefaultLayout'
import axios from 'axios'
import { useEffect, useState } from 'react'


function App() {
  const [posts, setPosts] = useState([])

  function fetchPosts() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setPosts(res.data))
  }

  useEffect(fetchPosts, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route path="posts" element={<Posts posts={posts} />} />
          <Route path="chi-siamo" element={<WhoWeAre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
