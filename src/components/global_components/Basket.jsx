import React from 'react';

function Basket ({ cartItems }) {
    
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item.item_id} className="cart-item">
          <img src={item.img_url} alt={item.item_name} className="cart-item-img"/>
          <div className="cart-item-details">
            <h3>{item.item_name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


export default Basket;
