import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";

const PlaceOrder = () => {
  const{getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title"> Delivery information</p>
        <div className="multi-fields">
          <input type="text" placeholder="first name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="street" />
        <div className="multi-fields">
          <input type="text" placeholder="city" />
          <input type="text" placeholder="state" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="zipcode" />
          <input type="text" placeholder="country" />
        </div>
        <input type="text" placeholder="phone"/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>sub Total</p>
                <p>{getTotalCartAmount()}</p>
              </div>
              <div className="cart-total-details">
                <p>Delivery fee</p>
                <p>{2}</p>
              </div>
              <div className="cart-total-details">
                <p>Total</p>
                <p>{getTotalCartAmount()+2}</p>
              </div>
            </div> 
            <button >PROCEED TO PAYMENT</button>
      </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
