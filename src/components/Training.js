import React from 'react';
import training from "../assets/images/training.jpeg";

const Training = () => {
  return (
    <div className='mato_mission1'>
        <h1>Our Training</h1>
        <div className='mission_content_wrapper'>
        <div className='mission_content_train'>
            <div className='mission_content1'>
                <h2>Deliver High-Quality Work:</h2>
                <p>Commit to providing work
                with the best quality,
                precision, and cost-
                effectiveness to build long-
                term client relationships.</p>
            </div>
            <div className='mission_divider_train'></div>
            <div className='mission_content1'>
                <h2>Adapt to Market Demands:</h2>
                <img src={training} />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Training;
