import React, { useEffect, useRef } from 'react'
import Room1 from "../assets/images/room1.jpeg"
import Room2 from "../assets/images/room2.jpeg"
import Room3 from "../assets/images/room3.jpeg"
import "../assets/css/machinery.css"

const WorkingEnvironment = () => {

    const environmentRef = useRef(null);

  useEffect(() => {
    const products = environmentRef.current.querySelectorAll('.environments');

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

    let rooms = [
        {
          id:1,
          name: 'Environment 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: Room1,
        },
        {
          id:2,
          name: 'Environment 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: Room2,
        },
        {
          id:3,
          name: 'Environment 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: Room3,
        }
      ]

  return (
    <div className='environment_list' ref={environmentRef}>
      
      <h1>Our Working Environment</h1>
      <div className='environment_lists'>
      {rooms?.map((item,i)=>{
        return (
          <div key={i} className='environments'>
            <div className='envi_parent'>
              <div className='envi_child'>
            <div className='environment'>
            <img src={item.image} alt={item.name} />
                <div className='environment_details'>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            </div>
            </div>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default WorkingEnvironment
