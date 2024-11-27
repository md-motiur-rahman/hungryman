import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
function Cart() {
  const { cartItem, food_list, addToCart, removeFromCart, getTotalCartItem } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Add/Remove</p>
        </div>
        <br />
        <hr className="cart-hr" />
        {food_list.map((food, index) => {
          if (cartItem[food._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-item-title cart-item-item">
                  <img src={food.image} alt="" />
                  <p>{food.name}</p>
                  <p>£{food.price} each</p>
                  <p>{cartItem[food._id]}</p>
                  <p>£{food.price * cartItem[food._id]}</p>
                  <p className="add-remove">
                    <img
                      src={assets.add_icon_green}
                      onClick={() => addToCart(food._id)}
                    />
                    <img
                      src={assets.remove_icon_red}
                      onClick={() => removeFromCart(food._id)}
                    />
                  </p>
                </div>
                <hr className="cart-hr" />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
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
              Proceed To Checkout
            </button>
          ) : (
            <button disabled className="disabled">
              Add Food To Checkout
            </button>
          )}
        </div>
        <div className="cart-promocode">
          <div>
            <p>Please insert the promo code if you have any</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo Code" />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
