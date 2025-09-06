import React from "react";
import { category } from "../data/Data";

const Category = () => {
  return (
    <>
      <div className="w-10/12 mx-auto  ">
        <div>
          <div className=" mb-3 lg:flex">
            {category.map((cat, index) => (
              <div key={index} className="m-2 ">
                {cat.img && (
                  <div className="relative w-full h-full object-cover overflow-hidden rounded-3xl ">
                    <img
                      className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all ease-in-out duration-200"
                      src={cat.img}
                      alt={cat.name}
                    />
                    <p className="absolute bottom-0 left-0 p-3 capitalize border-white rounded-full rounded-s-none bg-white overflow-hidden">
                      {cat.name}
                    </p>
                  </div>
                )}
                {cat.imgs && cat.imgs.length > 0 && (
                  <div className=" flex flex-col gap-4">
                    {cat.imgs.map((cat, index) => (
                      <div
                        key={index}
                        className="relative w-full h-full object-cover overflow-hidden rounded-3xl "
                      >
                        <img
                          className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all ease-in-out duration-200"
                          src={cat.img}
                          alt={cat.name}
                        />
                        <p className="absolute bottom-0 left-0 p-3 capitalize border-white rounded-full rounded-s-none  bg-white overflow-hidden">
                          {cat.name}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
