import React from 'react'
// import Home from '../components/Home'
import Header from '../components/Header'
import Home from '../components/Home'
import AboutUs from '../components/AboutUs'
import Products from '../components/Products'
import Footer from '../components/Footer'
// import Products from '../components/Products'
// import Infrastructure from '../components/Infrastructure'
// import OurClients from '../components/OurClients'
// import OurMachinery from '../components/OurMachinery'
import ListMachinery from '../components/ListMachinery'
import Capabilities from '../components/Capabilities'
import Mission from '../components/Missions'
import AboutPromoters from '../components/AboutPromoters'
import Training from '../components/Training'

const MatowinPage = () => {
  return (
    <div>
      <div className='header_home_blk'>
        <Header />
        
        </div>
        <Home />
        <AboutUs />
        <Products />
        <ListMachinery />
        <Capabilities />
        <Mission />
        <AboutPromoters />
        <Training />
        <Footer />
    </div>
  )
}

export default MatowinPage