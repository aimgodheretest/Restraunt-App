import { useRef } from "react";
import { useCart } from "../../../context/CartContext";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm({ meal }) {
  const amountInputRef = useRef();
  const { addItem } = useCart();

  function submitHandler(event) {
    event.preventDefault();

    const amount = Number(amountInputRef.current.value);
    if (!Number.isInteger(amount) || amount < 1 || amount > 5) return;

    addItem({
      id: meal.id,
      name: meal.name,
      price: meal.price,
      amount,
    });
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount-${meal.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
}

export default MealItemForm;
