// importo gli elementi per le rotte
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// importo le pagine
import Posts from './pages/posts'
import WhoWeAre from './pages/WhoWeAre'
import Homepage from './pages/Homepage'

// importo Layout
import DefaultLayout from './layouts/DefaultLayout'

function App() {

  // da qui in poi è ciò che visualizzo in pagina
  return (
    <BrowserRouter>
      <Routes>

        {/* applico le rotte delle varie pagine ad un default */}
        <Route path="/" element={<DefaultLayout />}>

          {/* homepage */}
          <Route index element={<Homepage />} />

          {/* posts. passo come props l array risposta della chiamata axios*/}
          <Route path="posts" element={<Posts />} />

          {/* chi siamo */}
          <Route path="chi-siamo" element={<WhoWeAre />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
