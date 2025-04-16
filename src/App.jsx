import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Posts from './routes/posts'
import WhoWeAre from './routes/WhoWeAre'
import Homepage from './routes/Homepage'
import Navbar from './components/navbar'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/posts" Component={Posts} />
        <Route path="/chi-siamo" Component={WhoWeAre} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
