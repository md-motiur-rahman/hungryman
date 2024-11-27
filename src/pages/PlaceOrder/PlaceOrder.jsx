import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
function PlaceOrder() {
  const { getTotalCartItem } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Street" />
        <div className="multi-field">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-field">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone No." />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>£{getTotalCartItem()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery fee</p>
              <p>{getTotalCartItem() ? 5 : "-"}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>£{getTotalCartItem() ? getTotalCartItem() + 5 : 0}</b>
            </div>
          </div>
          {getTotalCartItem() ? (
            <button onClick={() => navigate("/order")}>
              Proceed To Payment
            </button>
          ) : (
            <button disabled className="disabled">
              Please Add Food First
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
