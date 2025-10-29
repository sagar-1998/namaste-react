import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const isCartHaveItems = cartItems.length > 0;

  const handleClearCart = () => {
    isCartHaveItems && dispatch(clearCart());
  };
  return (
    <div className="w-6/12 justify-center mx-auto">
      <div className="flex justify-between items-center m-5 p-5 ">
        <h1 className="text-2xl">Cart</h1>
        <button
          onClick={handleClearCart}
          disabled={!isCartHaveItems}
          className="disabled:border-red-200 disabled:text-red-200 cursor-pointer px-2 py-1 w-[max-content] h-[max-content] border-red-400 text-red-400 border-2 rounded-lg"
        >
          Clear Cart
        </button>
      </div>

      {isCartHaveItems && (
        <div className="p-4 rounded-lg bg-gray-100 shadow-sm">
          <ItemList list={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;
