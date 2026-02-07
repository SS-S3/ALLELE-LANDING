import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Page/Home.jsx'
import Platform from './Page/Platform.jsx'
import Resources from './Page/Resources.jsx'
import Contact from './Page/Contact.jsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/platform" element={<Platform/>} />
      <Route path="/resources" element={<Resources/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  )
}

export default App
