import { FaTimes } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  getCartTotal,
  updateQuantity,
} from "../redux/CreateSlice";

const Model = ({ isModelOpen, handleClose, data }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const [ItemToCart, setItemToCart] = useState(false);

  const handleAddItemToCart = (product) => {
    const totalPrice = qty * product.price;

    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };
    dispatch(addItemToCart(tempProduct));
    dispatch(getCartTotal());
    setItemToCart(true);
  };

  useEffect(() => {
    if (isModelOpen) {
    } else {
      setQty(1);
      setItemToCart(false);
    }
  }, [isModelOpen]);

  const increaseItem = (itemId, currentQty) => {
    const newQty = currentQty + 1;
    setQty(newQty);
    dispatch(updateQuantity({ id: itemId, quantity: newQty }));
  };
  const decreaseItem = (itemId, currentQty) => {
    const newQty = Math.max(currentQty - 1, 1);
    setQty(newQty);
    dispatch(updateQuantity({ id: itemId, quantity: newQty }));
  };
  return (
    <div>
      <div>
        <div>
          {isModelOpen && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-1">
              <div className="shadow-lg bg-white overflow-hidden p-5 relative w-2/3">
                <span
                  className="absolute cursor-pointer top-0 right-0 p-4"
                  onClick={() => handleClose()}
                >
                  <FaTimes />
                </span>
                <div>
                  <div className="flex">
                    <div>
                      <img
                        src={data.img}
                        alt=""
                        className="h-[255px] flex justify-center items-center"
                      />
                    </div>
                    <div className="ml-6">
                      <p className="text-2xl mb-2">{data.short_description}</p>
                      <p className="text-red-600  mb-2text-lg">${data.price}</p>
                      <p className="text-slate-600 mb-2">{data.description}</p>
                      <div className="flex gap-3 text2xl font-semibold capitalize">
                        <p>shades:</p>
                        <select
                          name="shades"
                          id="shades"
                          className="focus:outline-none px-3 py-1 rounded-md border border-gray-300"
                        >
                          <option value="option">value </option>
                          <option value="option">value 2</option>
                          <option value="option">value 3</option>
                          <option value="option">value 4</option>
                          <option value="option">value 5</option>
                        </select>
                      </div>
                      <p className="text-lg text-green-600">in storck 400 </p>
                      <div className=" flex items-center gap-3">
                        <button
                          className="border mt-3 px-5 py-3 hover:bg-red-400 text-red-600 hover:text-white"
                          onClick={() => decreaseItem(data.id, qty)}
                        >
                          <FiMinus />
                        </button>
                        <span className="border gap-3 mt-3 px-5 py-2">
                          {qty}
                        </span>
                        <button
                          className="border gap-3 mt-3 px-5 py-3 hover:bg-red-400 text-red-600 hover:text-white"
                          onClick={() => increaseItem(data.id, qty)}
                        >
                          <FaPlus />
                        </button>
                        {ItemToCart ? (
                          <button className="border gap-3 mt-3 px-5 py-2 text-md font-semibold uppercase text-white bg-red-600 hover:bg-red-400">
                            <Link to={"/cart"}>view cart</Link>
                          </button>
                        ) : (
                          <button
                            onClick={() => handleAddItemToCart(data)}
                            className="border gap-3 mt-3 px-5 py-2 text-md font-semibold uppercase text-white bg-red-600 hover:bg-red-400"
                          >
                            add to cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Model;
