import React from 'react'

export const Product = (props) => {
  const {id, productName, price, productImage} = props.data;
  return (
    <div className='product'>
      <img src= {productImage} alt='Error' />
      <div className="description">
        <p>
          <b><h2>{productName}</h2></b>
        </p>
        <p> ${price}</p>
      </div>
      <button className='addToCartBttn'>Add To Cart</button>
    </div>
  )
}

