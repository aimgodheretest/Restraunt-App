import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [open, setOpen] = useState(false);

  const openCartHandler = () => {
    setOpen(true);
  };
  const closeCartHandler = () => {
    setOpen(false);
  };
  return (
    <>
      {open && <Cart onClose={closeCartHandler} />}
      <Header onOpenCart={openCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
