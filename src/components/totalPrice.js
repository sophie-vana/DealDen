import React from "react";
import '../App.css';

function TotalPrice({ cartItems }) {
  // Function to calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cartContain">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-primary">Your cart</span>
        <span className="badge bg-primary rounded-pill">{cartItems.length}</span>
      </h4>
      <ul className="list-group mb-3">
        {/* Check that number of cart items is greater than 0 */}
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">{item.title}</h6>
                <small className="text-body-secondary">{item.description}</small>
              </div>
              <span className="text-body-secondary">R{item.price}</span>
            </li>
          ))
        ) : (
          // If cart is empty, display a message
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Your cart is empty</h6>
            </div>
          </li>
        )}
        
        {/* Display Total */}
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (ZAR)</span>
          <strong>R{calculateTotal()}</strong>
        </li>
      </ul>

      <form className="card p-2">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Promo code"/>
          <button type="submit" className="btn btn-secondary">Redeem</button>
        </div>
      </form>
    </div>
  );
}

export default TotalPrice;
