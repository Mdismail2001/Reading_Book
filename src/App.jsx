import { useState } from 'react'
import './App.css'
import Navbar from './components/Nave_bar/Navbar'
import Blogs from './components/Blogs/Blogs'

function App() {
const [ bookmark, setBookmark] = useState([]);
const [readTime, setReadTime ] = useState(0);

// function for bookmark button
const btnHandle =(blog)=>{
// console.log(blog)
   setBookmark([...bookmark, blog]);
}
// console.log(bookmark)

// function for reading time

const readBtn =(time,id)=>{
  // console.log(time, id)
  setReadTime(readTime + time);
  // call remove function and pass the 
  handleRemove(id)
}
// console.log(readTime)


// function for remove book form bookmark
const handleRemove =(id)=>{
  console.log(id)
  const remainingBookMark = bookmark.filter(newBook => newBook.id !== id)
  setBookmark(remainingBookMark)

}



  return (
    <>
{/* header  */}
    <Navbar></Navbar>
{/* Blogs section */}
    <div className="blogs_container flex mt-5 gap-5">
      <div className='w-[70%] '>
        <Blogs btnHandle={btnHandle} readBtn={readBtn} ></Blogs>
      </div>
{/* counter section */}
      <div className='w-[30%] text-center mt-2 text-2xl font-bold'>
        <h1>Reading Time: {readTime}</h1>
        <h1 className='border-gray-950 gap-5'>Book Marked Count:{bookmark.length}</h1>
         {
          bookmark.map(book => <p>Book Name: {book.books[0].title} </p> )
          }
      </div>
    </div>
    </>
  )
}

export default App
