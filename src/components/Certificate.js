import React from 'react'
import certificate from "../assets/images/matocerti.png";

const Certificate = () => {
  return (
    <div className='certificate'>
        <h1>Certificate : MSME</h1>
        <div className='certificate_img'>
            <img src={certificate} />
        </div>
    </div>
  )
}

export default Certificate
