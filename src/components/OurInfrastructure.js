import React, { useEffect, useRef, useState } from 'react'
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
    const [readMore, setReadMore] = useState({});

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
      id: 1,
      name: 'VERTICAL MACHINING CENTER',
      description: '<b>Precision Milling:</b><br> VMC machine designed to handle parts with a working range of 850 mm in X, 550 mm in Y, and 450 mm in Z axis.<br><br><b>High Accuracy:</b><br> Provides tight tolerances for machining truck components like engine blocks, brackets, and housings.<br><br><b>Use Case:</b><br> Ideal for producing complex truck spare parts requiring precise contours and finishes, critical in heavy-duty automotive and transportation industries.',
      image: Infra1,
    },
    {
      id: 2,
      name: '4 AXIS MACHINING',
      description: '<b>Advanced 4-Axis Machining:</b><br> This 4-axis CNC milling machine allows for complex machining operations, enabling simultaneous movement along four different axes for intricate designs and shapes.<br><br><b>High Precision:</b><br> Achieves tight tolerances and high-quality finishes, ideal for producing complex truck components such as engine parts, brackets, and custom fittings.<br><br><b>Use Case:</b><br> Perfect for manufacturing advanced truck spare parts that require multi-dimensional cutting and detailed features, ensuring precision and reliability in heavy-duty applications.',
      image: Infra2,
    },
    {
      id: 3,
      name: 'CNC TURNING MACHINE',
      description: '<b>Precision Machining:</b><br> CNC turning machine handles truck spare parts with dimensions up to 250 mm in diameter and 400 mm in length.<br><br><b>High Accuracy:</b><br> Delivers tight tolerances for critical truck components such as axles, bushings, and flanges.<br><br><b>Use Case:</b><br> Ideal for manufacturing high-performance, durable truck spare parts that ensure reliability in heavy-duty vehicles and transportation systems.',
      image: Infra3,
    },
    {
      id: 4,
      name: 'VERTICAL MACHINING CENTER',
      description: '<b>Precision Milling:</b><br> VMC machine designed to handle parts with a working range of 850 mm in X, 550 mm in Y, and 450 mm in Z axis.<br><br><b>High Accuracy:</b><br> Provides tight tolerances for machining truck components like engine blocks, brackets, and housings.<br><br><b>Use Case:</b><br> Ideal for producing complex truck spare parts requiring precise contours and finishes, critical in heavy-duty automotive and transportation industries.',
      image: Infra4,
    },
    {
      id: 5,
      name: 'GRINDING MACHINE',
      description: '<b>Precision Grinding:</b><br> High-performance grinding machine designed for achieving smooth finishes and precise dimensions on a variety of metal and non-metal components.<br><br><b>Versatile Applications:</b><br> Ideal for producing high-tolerance parts such as crankshafts, camshafts, and valve seats that require superior surface quality and accuracy.<br><br><b>Use Case:</b><br> Perfect for remanufacturing and refurbishing truck spare parts, ensuring optimal performance and extending the lifespan of critical components in heavy-duty vehicles.',
      image: Infra5,
    },
    {
      id: 6,
      name: '5 AXIS VCM',
      description: '<b>Advanced 5-Axis Machining:</b><br> The UNI5X VMC offers unparalleled flexibility, allowing for simultaneous cutting on five axes for intricate and complex geometries.<br><br><b>Exceptional Precision:</b><br> Designed for tight tolerances, this machine excels in producing high-quality truck components such as complex engine parts, transmission housings, and custom brackets.<br><br><b>Use Case:</b><br> Ideal for manufacturers seeking to streamline production processes, the UNI5X enhances efficiency in creating detailed truck spare parts, reducing setup times and improving overall productivity.',
      image: Infra6,
    },
    {
      id: 7,
      name: 'CNC MILLING SERVICE',
      description: '<b>Precision Engineering:</b><br> Our CNC milling service utilizes advanced machinery to produce high-tolerance components with intricate designs, ensuring exact specifications for industries such as automotive and aerospace.<br><br><b>Versatile Capabilities:</b><br> Capable of machining a wide range of materials, our service specializes in manufacturing complex parts like brackets, housings, and custom fittings, tailored to meet the unique demands of truck spare parts and other applications.<br><br><b>Use Case:</b><br> Ideal for producing critical truck components such as axle mounts, engine blocks, and custom brackets, our service ensures optimal performance and reliability in heavy-duty vehicles, enhancing the longevity and efficiency of your fleet.',
      image: Infra7,
    },
    {
      id: 8,
      name: 'COMPRESSOR',
      description: '<b>Reliable Performance:</b><br> Our air compressor provides consistent air pressure with a robust motor and high-capacity tank, ensuring efficient operation for various tasks.<br><br><b>Versatile Applications:</b><br> Perfect for powering pneumatic tools, inflating tires, and spray painting, making it suitable for both industrial and automotive use.<br><br><b>Use Case:</b><br> Ideal for workshops and garages, it enhances productivity by efficiently powering tools like nail guns and impact wrenches for automotive and maintenance tasks.',
      image: Infra8,
    },
    {
      id: 9,
      name: 'HEAT TREATING',
      description: '<b>Precision Heat Treating:</b><br> Our heat treating service enhances material properties through controlled heating and cooling processes, improving hardness, strength, and durability.<br><br><b>Versatile Applications:</b><br> Suitable for a variety of materials, including steel, aluminum, and titanium, our heat treating is ideal for components in automotive, aerospace, and manufacturing industries.<br><br><b>Use Case:</b><br> Perfect for preparing truck spare parts such as gears, axles, and shafts, ensuring optimal performance and longevity in heavy-duty applications.',
      image: Infra9,
    },
    {
      id: 10,
      name: 'LATHE',
      description: '<b>Precision Machining:</b><br> Our lathe provides high-accuracy machining for various components, allowing for the precise shaping and finishing of materials.<br><br><b>Diverse Capabilities:</b><br> Capable of performing various operations such as turning, facing, drilling, and threading, our lathe accommodates a wide range of materials, including metals, plastics, and composites.<br><br><b>Use Case:</b><br> Ideal for producing truck spare parts like steering columns, crankshafts, and custom fittings, ensuring enhanced performance and durability in heavy-duty vehicles.',
      image: Infra10,
    },
    {
      id: 11,
      name: 'DRILLING MACHINE',
      description: '<b>High-Precision Drilling:</b><br> Our drilling machine is designed for accuracy, providing consistent hole sizes and depths to meet the highest quality standards.<br><br><b>Versatile Functionality:</b><br> Capable of drilling through a variety of materials, including metals, plastics, and composites, making it an essential tool for multiple industries.<br><br><b>Use Case:</b><br> Ideal for manufacturing truck spare parts such as axle holes, mounting points, and frame components, ensuring strength and reliability in demanding applications.',
      image: Infra11,
    },
    {
      id: 12,
      name: 'CNC LATHE MACHINE',
      description: '<b>Automated Precision Machining:</b><br> Our CNC lathe machine efficiently transforms raw materials into precision components, executing detailed turning and threading operations with unparalleled accuracy.<br><br><b>High-Speed Performance:</b><br> Engineered for rapid production, it significantly reduces cycle times while maintaining exceptional surface finishes and tight tolerances across various materials.<br><br><b>Use Case:</b><br> Perfect for manufacturing vital truck spare parts, including drive shafts, pulleys, and custom fittings, ensuring optimal functionality and reliability for heavy-duty applications.',
      image: Infra12,
    }
  ];
  


  const handleReadMore = (id) => {
    setReadMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className='infrastructure_list' ref={infrastructureRef}>
      
      <h1>Our Infrastructure</h1>
      <div className='infrastructure_lists'>
      {infrastructures?.map((item, i) => {
        const isReadMore = readMore[item.id];
        const descriptionToShow = isReadMore ? item.description : item.description.slice(0, 100) + "...";
        
        return (
          <div key={i} className='infrastructures infrastructure_ani'>
            <div className='infrastructure'>
              <img src={item.image} alt={item.name} />
              <div className='story-overlay'></div>
              <div className='infrastructure_details'>
                <h4>{item.name}</h4>
                <p dangerouslySetInnerHTML={{ __html: descriptionToShow }} />
                <button onClick={() => handleReadMore(item.id)}>
                  {isReadMore ? 'Read Less' : 'Read More'}
                </button>
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
