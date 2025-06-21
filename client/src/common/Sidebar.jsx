import { FaTimes } from "react-icons/fa";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
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
            <h1 className="text-3xl p-4">Your Cart</h1>
          </div>

          <div className="text-center uppercase font-semibold">
            <p>your cart has no product</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
