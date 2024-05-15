import React from 'react';
import { useEffect, useState } from 'react'; //importing library and component
import productData from './data';
import './App.css';

// Defining product component
export default function Product() {
    const [products, setProducts] = useState([]);


//Fetching product data from productData component
useEffect(() => {
    setProducts(productData);
},[]);


    return (
<div>
        <div className='Heading'>
        <h1>Products</h1>
      </div> 
      <div className='product-list'>
     {products.map(product => (
        <div key={product.id} className='product'>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>{product.price}</p>
            <button>
                Add to cart
            </button>
            </div>
     ))}
      </div>

</div>
    );   
}