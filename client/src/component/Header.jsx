import { useEffect, useState } from "react";
import { navbar } from "../data/Data";
import { Link } from "react-router-dom";

import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import Sidebar from "../common/Sidebar";

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
  return (
    <div>
      <div className={`${sticky ? "sticky top-0 z-50 shadow-xl" : ""}`}>
        <div className="max-w-6xl mx-auto  py-4 flex justify-between items-center">
          <div>
            <div className="text-2xl text-red-600 ">
              <h1>
                DE<span className="text-blue-950">Grocery</span>
              </h1>
            </div>
          </div>
          <div className="flex gap-4">
            {navbar.map((val, key) => (
              <div
                key={key}
                className="active hover:text-red-500 normal-case transition-all"
              >
                <Link to={val.path}>{val.nav}</Link>
              </div>
            ))}
          </div>
          <div className="flex gap-2 font-semibold">
            <Link className="text-2xl">
              <CiHeart />
            </Link>
            <Link className="text-2xl">
              <CiUser />
            </Link>
            <Link className="text-2xl relative " onClick={sidebarhandle}>
              <span className="absolute -top-2 -right-2 text-sm bg-red-500 rounded-full w-5 h-5 flex justify-center items-center text-white">
                1
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
