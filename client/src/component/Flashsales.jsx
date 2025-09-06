import React, { useState } from "react";
import { products } from "../data/Data";
import Headings from "../common/Headings";
import { FaRegHeart } from "react-icons/fa6";
import { FaSearchengin } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Model from "../common/Model";
import { useDispatch } from "react-redux";
import { addLike, removeLike } from "../redux/CreateSlice";

const Flashsales = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const handleOpen = (productId) => {
    setIsModelOpen(productId);
  };
  const handleClose = () => {
    setIsModelOpen(null);
  };

  const dispatch = useDispatch();
  return (
    <div>
      <div className="w-10/12 m-auto">
        <div>
          <Headings title={"hello"} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  mb-20  ">
            {products.map((item, index) => (
              <div key={index}>
                <div className="relative group ml-4 shadow-lg ">
                  <div>
                    <div>
                      <img src={item.img} alt="" className="rounded-xl" />
                    </div>
                  </div>
                  <div className=" absolute top-0 right-0 m-3 flex flex-col gap-3">
                    <div className="  p-4  bg-white rounded-full hover:bg-gray-300  opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
                      <FaRegHeart
                        onClick={() => dispatch(addLike())}
                        className="text-lg"
                      />
                    </div>
                    <div className="  p-4 bg-white rounded-full hover:bg-gray-300   opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
                      <FaSearchengin className="text-lg" />
                    </div>
                  </div>
                  <div className=" absolute bottom-0 right-0 m-3 flex flex-col gap-3">
                    <div>
                      <button
                        className="  p-4 bg-black rounded-full   opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer"
                        onClick={() => handleOpen(item.id)}
                      >
                        <MdOutlineShoppingCart className="text-white" />
                      </button>
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="mb-1">{item.title}</p>
                    <p>${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Model
        isModelOpen={isModelOpen}
        handleClose={handleClose}
        data={products.find((item) => item.id === isModelOpen)}
      />
    </div>
  );
};

export default Flashsales;
