import { useState } from "react";
import "./Cart.css";
function Cart(props) {
  const product = props.product;
  const price = (product.price / 100).toFixed(2);

  const [count, setCount] = useState(0);
  function handleClick(value) {
    value == "-"
      ? count > 0
        ? setCount(count - 1)
        : setCount(count)
      : setCount(count + 1);
  }
  let total = (price * count).toFixed(2);

  return (
    <div className="cart-wrapper">
      <div key={product.id} className="cart-product">
        <img
          src={product.thumbnail}
          alt={product.name}
          width="126"
          height="84"
        />
        <div className="cart-product-details">
          <div className="cart-product-name">
            <p>{product.name}</p>
            <ul className="cart-buttons">
              <li>{count}</li>
              <li>
                <button onClick={() => handleClick("+")}>+</button>
              </li>
              <li>
                <button onClick={() => handleClick("-")}>-</button>
              </li>
            </ul>
          </div>
          <p>${price}</p>
        </div>
        <p>${total}</p>
      </div>
    </div>
  );
}
export default Cart;
