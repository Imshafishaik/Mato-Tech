import React from 'react'
import certificate from "../assets/images/matocerti.png";
import newcerti from "../assets/images/newcerti.jpg";

const Certificate = () => {
  return (
    <div className='certificate'>
        <h1>Certificate : MSME</h1>
        <div className='certificate_img'>
            <img src={certificate} />
            <img src={newcerti} />
        </div>
    </div>
  )
}

export default Certificate
