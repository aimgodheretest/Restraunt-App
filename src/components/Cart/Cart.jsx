import { useCart } from "../../context/CartContext";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

function Cart(props) {
  const { items, totalAmount, removeItem, addItem } = useCart();

  const cartItems = items.map((item) => (
    <li key={item.id} className={classes["cart-item"]}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${item.price.toFixed(2)}</span>
          <span className={classes.amount}>x {item.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={() => removeItem(item.id)}>
          −
        </button>
        <button type="button" onClick={() => addItem({ ...item, amount: 1 })}>
          +
        </button>
      </div>
    </li>
  ));

  return (
    <Modal onClose={props.onClose}>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className={classes["cart-items"]}>{cartItems}</ul>
      )}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {items.length > 0 && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
