import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const cartItems = useSelector((state) => state.cart.data);
  return (
    <div>
      <div>
        <div
          style={{ transform: `translateX(${sidebarOpen ? "0" : "100%"})` }}
          className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transition-transform duration-300"
        >
          <div className="border-b mb-4 shadow-lg">
            <div
              onClick={() => setSidebarOpen(false)}
              className="m-5 bg-red-500 text-white rounded w-5 h-5 flex justify-center items-center cursor-pointer"
            >
              <FaTimes />
            </div>
            <h1 className="text-3xl  p-4 font-bold mb-6">Your Cart</h1>
          </div>

          <div className="p-6">
            {cartItems.length === 0 ? (
              <p className="text-gray-600">Cart is empty.</p>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border p-4 rounded shadow"
                  >
                    <div>
                      <h2 className="text-xl font-semibold">{item.title}</h2>
                      <p>Quantity: {item.quantity}</p>
                      <p>Unit Price: ${item.price}</p>
                      <p>Total Price: ${item.totalPrice}</p>
                    </div>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-20 h-20 object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
