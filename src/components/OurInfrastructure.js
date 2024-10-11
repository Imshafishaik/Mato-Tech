import React, { useEffect, useRef } from 'react'
import Infra1 from "../assets/images/infra1.jpeg";
import Infra2 from "../assets/images/infra2.jpeg";
import Infra3 from "../assets/images/infra3.jpeg";
import Infra4 from "../assets/images/infra4.jpeg";
import Infra5 from "../assets/images/infra5.jpeg";
import Infra6 from "../assets/images/infra6.jpeg";
import Infra7 from "../assets/images/infra7.jpeg";
import Infra8 from "../assets/images/infra8.jpg";
import Infra9 from "../assets/images/infra9.jpg";
import Infra10 from "../assets/images/infra10.jpeg";
import Infra11 from "../assets/images/infra11.jpg";
import Infra12 from "../assets/images/infra12.jpg";
import "../assets/css/infrastructure.css"

const OurInfrastructure = () => {

    const infrastructureRef = useRef(null);

  useEffect(() => {
    const products = infrastructureRef.current.querySelectorAll('.infrastructures');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    products.forEach((image) => observer.observe(image));

    return () => {
      products.forEach((image) => observer.unobserve(image));
    };
  }, []);

  let infrastructures = [
    {
      id:1,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: Infra1,
    },
    {
      id:2,
      name: 'Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: Infra2,
    },
    {
      id:3,
      name: 'Product 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: Infra3,
    },
    {
      id:4,
      name: 'Product 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: Infra4,
    },
    {
      id:5,
      name: 'Product 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: Infra5,
    },
    {
      id:6,
      name: 'Product 6',    
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: Infra6,
    }
  ]

  return (
    <div className='infrastructure_list' ref={infrastructureRef}>
      
      <h1>Our Infrastructure</h1>
      <div className='infrastructure_lists'>
      {infrastructures?.map((item,i)=>{
        return (
          <div key={i} className='infrastructures infrastructure_ani'>
            <div className='infrastructure'>
            <img src={item.image} alt={item.name} />
            <div className='story-overlay'></div>
                <div className='infrastructure_details'>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default OurInfrastructure
