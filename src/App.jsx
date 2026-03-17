import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Product from './pages/Product'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './Components/Navbar2'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2 />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />}/>
        {/* //Dynamic ROuting for course,type anything after /courses to find courseDetail page */}
        <Route path="/courses/:courseId" element={<CourseDetail />} />    
        <Route path="/product" element={<Product />} >
          <Route path="/product/men" element={<Men />} />
          <Route path="/product/women" element={<Women />} /></Route>
          {/* <Route path="/product/men" element={<Men />}/>
        <Route path="/product/women" element={<Women />}/> */}

        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App