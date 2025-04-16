import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Posts from './routes/posts'
import WhoWeAre from './routes/WhoWeAre'
import Homepage from './routes/Homepage'
import DefaultLayout from './layouts/DefaultLayout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route path="posts" element={<Posts />} />
          <Route path="chi-siamo" element={<WhoWeAre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
