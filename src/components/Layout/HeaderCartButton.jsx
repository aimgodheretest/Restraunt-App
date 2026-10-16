import CartIcon from "../Cart/CartIcon";
import { useCart } from "../../context/CartContext";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const { totalItems } = useCart();

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
}

export default HeaderCartButton;
