import { useState } from 'react'
import './App.css'
import Navbar from './components/Nave_bar/Navbar'
import Blogs from './components/Blogs/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Blogs></Blogs>
    </>
  )
}

export default App
