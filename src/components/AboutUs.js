import React from 'react';
import "../assets/css/aboutus.css";
import profilePdf from "../assets/images/matowin-final2.pdf"


const AboutUs = () => {
  return (
    <div className='about_us_blk'>
      <div className='about_us_heading'>
        <h1>About Us</h1>
      </div>
      <p>Matowin Techniques, established in February 2016 in Shimoga, Karnataka, benefits from its location in a hub of foundries, allowing us to efficiently handle projects from casting to finishing.

        As a customer centric manufacturing unit, we offer precision manufacturing, new product development, and cost-effective 
        casting solutions. Our team of experts has a strong background in manufacturing, R&D, and extensive knowledge of 
        auto-components, as well as the service and maintenance of conventional and CNC machines.</p>
        <div className='view_company_profile'>
        <a href={profilePdf} target='_blank'>View Our Company Profile</a>
        </div>
    </div>
  )
}

export default AboutUs
