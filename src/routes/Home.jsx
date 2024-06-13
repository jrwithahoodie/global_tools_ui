import React from 'react'

import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import Welcome from '../components/Welcome/Welcome'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <Welcome/>
        <Footer/>
    </div>
  )
}

export default Home