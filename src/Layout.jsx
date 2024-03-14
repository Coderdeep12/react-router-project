import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'


// outlet lidhu means aapde header and footer ma nesting kari sakiye and aapde main file ma nesting kari pan che main path ma aa j file aapi che aetle j nesting thayi che 
export default function () {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}
