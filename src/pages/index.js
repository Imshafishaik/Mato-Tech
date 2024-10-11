import React from 'react'
// import Home from '../components/Home'
import Header from '../components/Header'
import Home from '../components/Home'
import AboutUs from '../components/AboutUs'
import Products from '../components/Products'
import OurClients from '../components/OurClients'
import OurInfrastructure from '../components/OurInfrastructure'
// import Footer from '../components/Footer'
// import Products from '../components/Products'
// import Infrastructure from '../components/Infrastructure'
// import OurClients from '../components/OurClients'
// import OurMachinery from '../components/OurMachinery'
// import ListMachinery from '../components/ListMachinery'
// import Capabilities from '../components/Capabilities'
// import Mission from '../components/Mission'
// import AboutPromoters from '../components/AboutPromoters'
// import Training from '../components/Training'

const MatowinPage = () => {
  return (
    <div>
      <div className='header_home_blk'>
        <Header />
        </div>
        <Home />
        <div className='our_infra'>
          <OurClients />
        </div>
        <AboutUs />
        <Products />
        <OurInfrastructure />
    </div>
  )
}

export default MatowinPage