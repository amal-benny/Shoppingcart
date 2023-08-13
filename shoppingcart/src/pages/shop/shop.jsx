import React from 'react';
import { PRODUCTS } from "../../products";
import { Product } from './product';
import "./shop.css"

export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>CLAWTHINGS</h1>
            <p>Choose your design for your dress</p>
        </div>
        <div className="products">
            {PRODUCTS.map((product) =>
                <Product data={product} />
            )}
        </div>
    </div>
  )
};


