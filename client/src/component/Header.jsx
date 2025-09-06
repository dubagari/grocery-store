import { useEffect, useState } from "react";
import { navbar } from "../data/Data";
import { Link, NavLink } from "react-router-dom";

import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import Sidebar from "../common/Sidebar";
import { useSelector } from "react-redux";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarhandle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { totalItems } = useSelector((state) => state.cart);
  const { totalLikes } = useSelector((state) => state.cart.totalLikes);
  return (
    <div>
      <div
        className={`${
          sticky
            ? "fixed right-0 left-0 top-0 z-50 bg-white z-55 shadow-xl"
            : ""
        }`}
      >
        <div className="w-10/12 mx-auto  py-5 flex justify-between items-center">
          <div>
            <Link to={"/"}>
              <div className="text-2xl text-red-600 focus:outline-none">
                <h1 className="font-bold">
                  DE<span className="text-blue-950">Grocery</span>
                </h1>
              </div>
            </Link>
          </div>
          <div className="flex gap-4 ">
            {navbar.map((val, key) => (
              <div
                key={key}
                className="active hover:text-red-500 hidden lg:inline-block normal-case transition-all"
              >
                <NavLink to={val.path}>{val.nav}</NavLink>
              </div>
            ))}
          </div>
          <div className="flex gap-2 font-semibold">
            {/* <Link className="text-2xl relative">
              <span className="absolute -top-2 -right-2 text-sm bg-red-500 rounded-full w-5 h-5 flex justify-center items-center text-white">
                {totalLikes}
              </span>
              <CiHeart />
            </Link> */}
            <Link to={"/login"} className="text-2xl">
              <CiUser />
            </Link>
            <Link className="text-2xl relative " onClick={sidebarhandle}>
              <span className="absolute -top-2 -right-2 text-sm bg-red-500 rounded-full w-5 h-5 flex justify-center items-center text-white">
                {totalItems}
              </span>
              <CiShoppingCart />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
      </div>
    </div>
  );
};

export default Header;
