// importo gli elementi per le rotte
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// importo le pagine
import Posts from './pages/posts'
import WhoWeAre from './pages/WhoWeAre'
import Homepage from './pages/Homepage'
import NoPage from './pages/NoPage'

// importo Layout
import DefaultLayout from './layouts/DefaultLayout'

import SinglePost from './pages/SinglePost'

function App() {

  // da qui in poi è ciò che visualizzo in pagina
  return (
    <BrowserRouter>
      <Routes>

        {/* applico le rotte delle varie pagine ad un default */}
        <Route path="/" element={<DefaultLayout />}>

          {/* homepage */}
          <Route index element={<Homepage />} />

          {/* posts. */}
          <Route path="posts" element={<Posts />} />

          {/* posts con rotta dinamica*/}
          <Route path="posts/:id" element={<SinglePost />} />

          {/* chi siamo */}
          <Route path="chi-siamo" element={<WhoWeAre />} />

        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
