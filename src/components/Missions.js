import React from 'react';
import "../assets/css/Mission.css";

const Mission = () => {
  return (
    <div className='mato_mission'>
        <h1>Our Mission & Values</h1>
        <div className='mission_content_wrapper'>
        <div className='mission_content'>
            <div className='mission_content1'>
                <h2>Deliver High-Quality Work:</h2>
                <p>Commit to providing work
                with the best quality,
                precision, and cost-
                effectiveness to build long-
                term client relationships.</p>
            </div>
            <div className='mission_divider'></div>
            <div className='mission_content1'>
                <h2>Adapt to Market Demands:</h2>
                <p>Continuously develop new
                skill sets and upgrade
                equipment and
                infrastructure to meet the
                latest market demands
                and customer
                requirements.</p>
            </div>
            <div className='mission_divider'></div>
            <div className='mission_content1'>
                <h2>Create Mutual Success:</h2>
                <p>Foster a win-win situation
                by aligning our growth with
                the success of our clients.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Mission
