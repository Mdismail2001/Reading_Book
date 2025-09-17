import { useState } from 'react'
import './App.css'
import Navbar from './components/Nave_bar/Navbar'
import Blogs from './components/Blogs/Blogs'

function App() {
const [ bookmark, setBookmark] = useState([]);

// function for bookmark button
const btnHandle =(blog)=>{
// console.log(blog)
   setBookmark([...bookmark, blog]);
}
// console.log(bookmark)

  return (
    <>
{/* header  */}
    <Navbar></Navbar>
{/* Blogs section */}
    <div className="blogs_container flex mt-5 gap-5">
      <div className='w-[70%] '>
        <Blogs btnHandle={btnHandle} ></Blogs>
      </div>
{/* counter section */}
      <div className='w-[30%] text-center mt-2 text-2xl font-bold'>
        <h1>Reading Time: {0}</h1>
        <h1>Book Marked Count:{bookmark.length}</h1>
         {
          bookmark.map(book => <p>Book Name: {book.books[0].title}</p> )
          }
      </div>
    </div>
    </>
  )
}

export default App
