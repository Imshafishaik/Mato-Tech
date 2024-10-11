import React from 'react';
import Capability from "../assets/images/capabilities.png"
import '../assets/css/Capability.css';

const Capabilities = () => {
  return (
    <div className='capability'>
      <div className='capability_left_blk'>
        <div className='capability_heading'>
            <h1>Our Expertise & 
            Capabilities</h1>
        </div>
      </div>
      <div className='capability_right_blk'>
        <div className='capability_body'>
            <div className='capability_body_text1'>
              <div className='capability_number'>
                <div className='capability_number_wrapper' >
                <p>
                01
                </p>
                </div>
              </div>
              <div className='capability_body_inner_text1'>
                <div>
                <h2>CNC:</h2>
                <p>Highly skilled & trained operators handling the various CNC
                machinery under the guidelines of CNC expert supervisors
                to serve & to fulfill our client's requirements 24X7 Our Brand:
                Shackle pins, Bushes, Cotter pins, Sleeves, Washers</p>
                </div>
                </div>
            </div>
            <div className='capability_body_text2'>
            <div className='capability_number'>
            <div className='capability_number_wrapper' >
                <p>
                02
                </p>
                </div>
              </div>
              <div className='capability_body_inner_text1'>
              <div>
                <h2>CASTING:</h2>
                <p>We have associated with various foundries like SG Iron,
                Cast Iron, Alloy Steels, Investment Castings, and
                Aluminum Castings. converting CAD model to actual
                product:latest industrial requirements</p>
                </div>
                </div>
            </div>
            <div className='capability_body_text3'>
              <div className='capability_number'>
              <div className='capability_number_wrapper' >
                <p>
                03
                </p>
                </div>
              </div>
              <div className='capability_body_inner_text1'>
              <div>
                <h2>CAD/CAM:</h2>
                <p>Converting CAD model to actual product latest
                industrial requirements</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Capabilities
