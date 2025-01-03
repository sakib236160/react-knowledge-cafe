import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks,setBookmarks] = useState([]);
  const [redingTime,SetRedingTime] = useState(0);

  const handleAddBookmark = blog => {
    const newBookmarks =[...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = time =>{
   SetRedingTime(redingTime + time);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddBookmark={handleAddBookmark}></Blogs>
        <Bookmarks redingTime={redingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
