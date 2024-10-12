import React from 'react'
import Machinery from "../assets/images/listofmachinery.png";
import "../assets/css/listofmachinery.css";
import mname1 from "../assets/images/mname1.jpg"
import mname2 from "../assets/images/mname2.png"
import mname3 from "../assets/images/mname3.png"
import mname4 from "../assets/images/mname4.png"
import mname5 from "../assets/images/mname5.png"
import mname6 from "../assets/images/mname6.jpg"
import mname7 from "../assets/images/mname7.jpg"
import mname8 from "../assets/images/mname8.png"
import mname9 from "../assets/images/mname9.jpg"

const ListMachinery = () => {
  
  return (
    <div className='list_machinery'>
      {/* <img src={Machinery} /> */}
      <h1>List of Machinery</h1>
      <div className='list_machinerys'>
        <div className='list_names'>
          <div className='mimage'>
            <img src={mname1} alt='mname1' />
            <p>CNC TURNING</p>
            <div className='minnerimage'>
              <img src={mname1} alt='mname1' />
            </div>
          </div>

          <div className='mimage'>
            <img src={mname2} alt='mname1' />
            <p>VMC MILLING 3 AXIS</p>
          <div className='minnerimage'>
              <img src={mname2} alt='mname1' />
            </div>
            </div>
          <div className='mimage'>
            <img src={mname3} alt='mname1' />
            <p>VMC MILLING 4 AXIS</p>
            <div className='minnerimage'>
              <img src={mname3} alt='mname1' />
            </div>
            </div>
          <div className='mimage'>
            <img src={mname4} alt='mname1' />
            <p>VMC MILLING 5 AXIS</p>
            <div className='minnerimage'>
              <img src={mname4} alt='mname1' />
            </div>
            </div>
        </div>

        <div className='list_names'>
          <div className='mimage'>
            <img src={mname5} alt='mname1' />
            <p>WEIR CUT EDM</p>
            <div className='minnerimage'>
              <img src={mname5} alt='mname1' />
            </div>
            </div>
          <div className='mimage'>
            <img src={mname6} alt='mname1' />
            <p>CENTRAL LESS GRINDING</p>
            <div className='minnerimage'>
              <img src={mname6} alt='mname1' />
            </div>
            </div>
          <div className='mimage'>
            <img src={mname7} alt='mname1' />
            <p>CYLINDRICAL GRINDING</p>
            <div className='minnerimage'>
              <img src={mname7} alt='mname1' />
            </div>
            </div>
          <div className='mimage'>
            <img src={mname8} alt='mname1' />
            <p>INDUCTION HARDENING</p>
            <div className='minnerimage'>
              <img src={mname8} alt='mname1' />
            </div>
            </div>
        </div>

        <div className='list_names'>
          <div className='mimage'><img src={mname2} alt='mname1' /><p>TAPPING MACHINES</p>
          <div className='minnerimage'>
              <img src={mname2} alt='mname1' />
            </div></div>
          <div className='mimage'><img src={mname1} alt='mname1' /><p>MANUAL DRILLING MACHINES</p><div className='minnerimage'>
              <img src={mname1} alt='mname1' />
            </div></div>
          <div className='mimage'><img src={mname3} alt='mname1' /><p>LATE MACHINE</p><div className='minnerimage'>
              <img src={mname3} alt='mname1' />
            </div></div>
          <div className='mimage'><img src={mname9} alt='mname1' /><p>CUT-OFF MACHINE</p><div className='minnerimage'>
              <img src={mname9} alt='mname1' />
            </div></div>
        </div>

        <div className='list_names'>
          <div className='mimage'><img src={mname5} alt='mname1' /><p>COMPRESSOR</p><div className='minnerimage'>
              <img src={mname5} alt='mname1' />
            </div></div>
          <div className='mimage'><img src={mname6} alt='mname1' /><p>NUMBER PUNCHING MACHINES</p><div className='minnerimage'>
              <img src={mname6} alt='mname1' />
            </div></div>
          <div className='mimage'><img src={mname3} alt='mname1' /><p>DRO MILLING</p><div className='minnerimage'>
              <img src={mname3} alt='mname1' />
            </div></div>
          <div className='mimage'><img src={mname9} alt='mname1' /><p>BANDS ARE CUTTING MACHINES</p><div className='minnerimage'>
              <img src={mname9} alt='mname1' />
            </div></div>
        </div>
      </div>
    </div>
  )
}

export default ListMachinery
