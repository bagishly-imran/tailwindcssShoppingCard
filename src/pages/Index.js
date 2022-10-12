import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../layouts/footer/Footer'
import Navbar from '../layouts/navbar/Navbar'


const index = () => {
  return (
    <div className = ''>
        {/* Header */}
        <Navbar/>

        {/* Content */}
        <Outlet/>
        
        {/* Footer */}
        <Footer/>
    </div>

  )
}

export default index