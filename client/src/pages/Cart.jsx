import { useDispatch, useSelector } from "react-redux";
import PageHeading from "../common/PageHeading";
import {
  getCartTotal,
  removeItems,
  updateQuantity,
} from "../redux/CreateSlice";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Cart = () => {
  const { data: cartItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (itemId) => {
    dispatch(removeItems({ id: itemId }));
    dispatch(getCartTotal());
  };

  const increaseItem = (itemId, currentQty) => {
    dispatch(updateQuantity({ id: itemId, quantity: currentQty + 1 }));
    dispatch(getCartTotal());
  };
  const decreaseItem = (itemId, currentQty) => {
    if (currentQty > 1) {
      dispatch(updateQuantity({ id: itemId, quantity: currentQty - 1 }));
      dispatch(getCartTotal());
    }
  };
  return (
    <div>
      <PageHeading pagename={"cart"} home={"home"} />
      <div className="mt-5">
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Cart is empty.</p>
        ) : (
          <div>
            <div>
              <table className="w-10/12 shadow-2xl rounded-2xl m-auto">
                <thead className="bg-blue-950 text-white font-semibold capitalize">
                  <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>sub total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, key) => (
                    <tr key={key}>
                      <td className="text-center  py-2">
                        <div className="flex items-center justify-center">
                          <img
                            src={item.img}
                            alt="img"
                            className="h-40 w-40 object-contain mr-2"
                          />
                          <p className="font-semibold">{item.title}</p>
                        </div>
                      </td>
                      <td className="text-center px-4 py-2">${item.price}</td>
                      <td className="text-center px-4 py-2">
                        <div>
                          <button
                            className="border  px-4 py-2 hover:bg-red-400 text-red-600 hover:text-white"
                            onClick={() => decreaseItem(item.id, item.quantity)}
                          >
                            <FaMinus />
                          </button>
                          <span className="px-4 ">{item.quantity || 1}</span>
                          <button
                            className="border  px-4 py-2 hover:bg-red-400 text-red-600 hover:text-white outline-none"
                            onClick={() => increaseItem(item.id, item.quantity)}
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </td>
                      <td className="text-center px-4 py-2">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="text-center px-4 py-2">
                        <button
                          className="border uppercase  px-4 py-2 hover:bg-red-400 text-red-600 hover:text-white outline-none"
                          onClick={() => removeFromCart(item.id)}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="w-10/12 my-4 m-auto">
                <div className="w-2/5 p-6 shadow-2xl bg-white rounded-md">
                  <h1 className="text-center uppercase font-semibold">
                    cart total
                  </h1>
                  <h2 className="flex justify-between mt-2 capitalize">
                    sub total:{" "}
                    <span className="font-semibold">
                      ${totalAmount.toFixed(2)}
                    </span>
                  </h2>

                  <h2 className="flex justify-between mt-2 capitalize">
                    shipping amount:
                    <span className="font-semibold"> ${(10).toFixed(2)}</span>
                  </h2>
                  <h2 className="flex justify-between mt-2 capitalize">
                    grand total:
                    <span className="font-semibold">
                      {" "}
                      ${(totalAmount + 10).toFixed(2)}
                    </span>
                  </h2>
                  <div className="flex justify-between mt-4">
                    <div className="py-2 px-4 bg-red-600 hover:bg-slate-600 hover:text-white rounded-lg">
                      proceed to checkout
                    </div>

                    <Link
                      className="py-2 px-4 bg-red-600 hover:bg-slate-600 hover:text-white rounded-lg"
                      to={"/shop"}
                    >
                      {" "}
                      continue shoping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

// <div className="space-y-6">
//   {cartItems.map((item) => (
//     <div
//       key={item.id}
//       className="flex justify-between items-center border p-4 rounded shadow"
//     >
//       <div>
//         <h2 className="text-xl font-semibold">{item.title}</h2>
//         <p>Quantity: {item.quantity}</p>
//         <p>Unit Price: ${item.price}</p>
//         <p>Total Price: ${item.totalPrice}</p>
//       </div>
//       <img
//         src={item.img}
//         alt={item.title}
//         className="w-20 h-20 object-cover"
//       />
//     </div>
//   ))}
// </div>
