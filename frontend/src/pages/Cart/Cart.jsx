import React, { useContext } from 'react';
import "./Cart.css";
import { StoreContext } from '../../Context/StoreContext';

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  
  // Define a fixed delivery fee of 80 Taka
  const deliveryFee = 80;

  // Calculate the subtotal by summing up the price * quantity for each item in the cart
  const subtotal = food_list.reduce((acc, item) => {
    if (cartItems[item._id] > 0) {
      acc += item.price * cartItems[item._id];
    }
    return acc;
  }, 0);

  // Calculate the total. If the subtotal is 0, total will also be 0. Otherwise, add delivery fee to the subtotal.
  const total = subtotal === 0 ? 0 : subtotal + deliveryFee;

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>৳{item.price}</p> {/* Taka icon added */}
                  <p>{cartItems[item._id]}</p>
                  <p>৳{item.price * cartItems[item._id]}</p> {/* Taka icon added for total */}
                  <p className='cross' onClick={() => removeFromCart(item._id)}>x</p> {/* Cross for removal */}
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>৳{subtotal}</p> {/* Display subtotal with Taka sign */}
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>৳{subtotal === 0 ? 0 : deliveryFee}</p> {/* Show delivery fee as 0 if subtotal is 0 */}
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>৳{total}</b> {/* Display total (0 if subtotal is 0, otherwise subtotal + delivery fee) */}
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocod">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocod-input">
              <input type="text" placeholder='Promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
