import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import BlogForm from './components/BlogForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/bform" element={<BlogForm/>}/>

       </Routes>
    </>
  )
}
export default App
