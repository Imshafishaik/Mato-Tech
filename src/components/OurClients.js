import React, { useEffect, useState } from 'react';
import client1 from "../assets/images/client1.jpeg";
import client2 from "../assets/images/client2.jpeg";
import client3 from "../assets/images/client3.jpeg";
import client4 from "../assets/images/client4.jpeg";
import "../assets/css/OurClients.css";

const OurClients = () => {

  let clients = [
    {
        name: 'KEMS',
        image: client1
    },
    {
        name: 'VMC Milling',
        image: client2
    }
  ]

  return (
    <div className='matowin_infra'>
        <h1>Our Clients</h1>
          <marquee>
            <div className='client_list'>
             <div className='client_img'>
                <img src={client1} />
                <p>{"KEMS"}</p>  
            </div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <div className='client_img'>
                <img src={client2} />
                <p>{"Propel Engineering"}</p>  
            </div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <div className='client_img'>
                <img src={client3} />
                <p>{"Sharda Industries"}</p>  
            </div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <div className='client_img'>
                <img src={client4} />
                <p>{"Bhumika Castings"}</p>  
            </div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

            <div className='client_img'>
                <img src={client1} />
                <p>{"KEMS"}</p>  
            </div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <div className='client_img'>
                <img src={client2} />
                <p>{"Propel Engineering"}</p>  
            </div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <div className='client_img'>
                <img src={client3} />
                <p>{"Sharda Industries"}</p>  
            </div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <div className='client_img'>
                <img src={client4} />
                <p>{"Bhumika Castings"}</p>  
            </div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <div className='client_img'>
                <img src={client1} />
                <p>{"KEMS"}</p>  
            </div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <div className='client_img'>
                <img src={client2} />
                <p>{"Propel Engineering"}</p>  
            </div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <div className='client_img'>
                <img src={client3} />
                <p>{"Sharda Industries"}</p>  
            </div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <div className='client_img'>
                <img src={client4} />
                <p>{"Bhumika Castings"}</p>  
            </div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </div>
            </marquee>
    </div>
  )
}

export default OurClients
