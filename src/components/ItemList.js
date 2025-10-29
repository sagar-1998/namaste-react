import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ list }) => {
  const imagePlaceholder = "https://placehold.co/150x125";
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const checkIfItemAlreadyExists = (item) => {
    return cartItems.includes(item);
  };

  const handleAddClick = (item) => {
    if (checkIfItemAlreadyExists(item)) return;
    else dispatch(addItem(item));
  };

  return (
    <div>
      {list?.map((item) => {
        const sortedItem = item?.card?.info;
        return (
          <div
            key={sortedItem?.id}
            className="flex justify-between items-center border-b-2 border-gray-200 my-6"
          >
            <div className="w-9/12 ">
              <span>{sortedItem?.name}</span>
              <span>
                {" - ₹ "}
                {sortedItem?.price / 100 || sortedData?.defaultPrice / 100}
              </span>
              <p className="text-gray-400 text-sm">{sortedItem?.description}</p>
            </div>
            <div className=" w-3/12 flex justify-end mb-5">
              <button
                onClick={() => handleAddClick(item)}
                className="absolute bg-white border-[1px] border-green-600 shadow-xs px-5 py-1 mt-24 mr-8 rounded-lg text-green-600   "
              >
                ADD +
              </button>
              <img src={imagePlaceholder} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
