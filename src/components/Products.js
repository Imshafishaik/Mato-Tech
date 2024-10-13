import React, { useEffect, useRef } from 'react';
import Product1 from "../assets/images/product1.png"
import Product2 from "../assets/images/product8.png"
import Product3 from "../assets/images/product3.png"
import Product4 from "../assets/images/product4.png"
import Product5 from "../assets/images/product5.png"
import Product6 from "../assets/images/product6.png"
import "../assets/css/products.css";

const Products = () => {

  const productsRef = useRef(null);

  useEffect(() => {
    const products = productsRef.current.querySelectorAll('.products');

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

  let products = [
    {
      id:1,
      // name: 'Product 1',
      // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: Product1,
    },
    {
      id:2,
      // name: 'Product 2',
      // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: Product2,
    },
    {
      id:3,
      // name: 'Product 3',
      // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: Product3,
    },
    {
      id:4,
      // name: 'Product 4',
      // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: Product4,
    },
    {
      id:5,
      // name: 'Product 5',
      // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: Product5,
    },
    {
      id:6,
      // name: 'Product 6',
      // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: Product6,
    }
  ]

  return (
    <div className='products_list' id='products' ref={productsRef}>
      
      <h1>Our Products</h1>
      <div className='products_lists'>
      {products?.map((item,i)=>{
        return (
          <div key={i} className='products products_ani'>
            <div className='product'>
            <img src={item.image} alt={item.name} />
            {/* <div className='products_details'>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            </div> */}
            </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Products
