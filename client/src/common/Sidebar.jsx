import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, removeItems } from "../redux/CreateSlice";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [sticky, setSticky] = useState(false);
  const cartItems = useSelector((state) => state.cart.data);
  const { totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Sticky header on scroll inside sidebar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sidebar when scrolling page
  useEffect(() => {
    const closeOnScroll = () => {
      if (sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("scroll", closeOnScroll);
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, [sidebarOpen, setSidebarOpen]);

  const removeFromCart = (itemId) => {
    dispatch(removeItems({ id: itemId }));
    dispatch(getCartTotal());
  };

  return (
    <div
      style={{ transform: `translateX(${sidebarOpen ? "0" : "100%"})` }}
      className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transition-transform duration-300 overflow-y-auto"
    >
      {/* Header (sticky inside sidebar) */}
      <div
        className={`border-b shadow-lg bg-white ${
          sticky ? "sticky top-0 z-50 shadow-xl" : ""
        }`}
      >
        <div
          onClick={() => setSidebarOpen(false)}
          className="m-5 bg-red-500 text-white rounded w-5 h-5 flex justify-center items-center cursor-pointer"
        >
          <FaTimes />
        </div>
        <h1 className="text-3xl p-4 font-bold mb-6">Your Cart</h1>
      </div>

      {/* Cart items */}
      <div className="p-6">
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="border px-2 py-4 rounded shadow">
                <div className=" flex gap-4">
                  <div
                    className="border flex justify-center items-center h-5 w-5 hover:bg-red-400 text-red-600 hover:text-white cursor-pointer"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaTimes />
                  </div>
                  <p className="text-xl font-semibold">{item.title}</p>
                </div>
                <div className="flex justify-between gap-3 items-center">
                  <img src={item.img} alt={item.title} height={84} width={84} />
                  <div>
                    <p>Quantity: {item.quantity}</p>
                    <p>Unit Price: ${item.price}</p>
                    <p>Total Price: ${item.totalPrice}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-between p-4 bg-black text-white">
              <h2>sub total: ${totalAmount}</h2>
              <Link to="/cart" onClick={() => setSidebarOpen(false)}>
                view cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
