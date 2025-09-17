import { useState } from 'react'
import './App.css'
import Navbar from './components/Nave_bar/Navbar'
import Blogs from './components/Blogs/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>

    <div className="blogs_container flex mt-5 gap-5">
      <div className='w-[70%] '>
        <Blogs></Blogs>
      </div>
      <div className='w-[30%] text-center mt-2 text-2xl font-bold'>
        <h1>Reading Time: {0}</h1>
        <h1>Book Marked Count: {0}</h1>
      </div>
    </div>
    </>
  )
}

export default App
