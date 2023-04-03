import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import App from '../../App'

function Layout() {
  return (
    <div className='font-serif'>
    <Header></Header>
    <App></App>
    <Footer></Footer>
    </div>
  )
}

export default Layout