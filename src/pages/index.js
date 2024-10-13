import React from 'react'
// import Home from '../components/Home'
import Header from '../components/Header'
import Home from '../components/Home'
import AboutUs from '../components/AboutUs'
import Products from '../components/Products'
import OurClients from '../components/OurClients'
import OurInfrastructure from '../components/OurInfrastructure'
// import Footer from '../components/Footer'
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
import WhatsappButton from '../components/WhatsappButton'
import WorkingEnvironment from '../components/OurMachinery'
import ProductsData from '../components/ProductsData'
import Certificate from '../components/Certificate'

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
        <ProductsData />
        <OurInfrastructure />
        <ListMachinery />
        <WorkingEnvironment />
        <Capabilities />
        <Mission />
        <AboutPromoters />
        <Certificate />
        <Training />
        <Footer />
        <WhatsappButton />
    </div>
  )
}

export default MatowinPage