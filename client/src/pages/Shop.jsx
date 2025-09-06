import { useState } from "react";

import { products } from "../data/Data";
import Headings from "../common/Headings";
import { FaRegHeart } from "react-icons/fa6";
import { FaSearchengin } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Model from "../common/Model";
import PageHeading from "../common/PageHeading";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Shop = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const handleOpen = (productId) => {
    setIsModelOpen(productId);
  };
  const handleClose = () => {
    setIsModelOpen(null);
  };

  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    priceRange: [0, 1500],
  });

  const categoryList = Array.from(
    new Set(products.map((product) => product.category))
  );

  const brandList = Array.from(
    new Set(products.map((product) => product.brand))
  );

  const filteredProducts = products.filter((product) => {
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(product.category)
    )
      return false;
    if (filters.brands.length > 0 && !filters.brands.includes(product.brand))
      return false;

    const price = parseFloat(product.price);

    if (price < filters.priceRange[0] || price > filters.priceRange[1])
      return false;

    return true;
  });

  const handlePriceChange = (value) => {
    setFilters({ ...filters, priceRange: value });
  };

  const handleCheckboxChange = (filterType, value) => {
    const updatedFilters = [...filters[filterType]];
    const index = updatedFilters.indexOf(value);
    if (index === -1) {
      updatedFilters.push(value);
    } else {
      updatedFilters.splice(index, 1);
    }
    setFilters({ ...filters, [filterType]: updatedFilters });
  };
  return (
    <div>
      <PageHeading pagename={"shop"} home={"home"} />

      {/* <div className=" flex w-10/12 mt-5 m-auto">
        <div className="w-1/4">
          <div className="shadow-xl p-4">filter</div>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  mb-20 ">
          {products.map((item, index) => (
            <div key={index}>
              <div className="relative group">
                <div>
                  <div>
                    <img src={item.img} alt="" className="rounded-xl" />
                  </div>
                </div>
                <div className=" absolute top-0 right-0 m-3 flex flex-col gap-3">
                  <div className="  p-4  bg-white rounded-full hover:bg-gray-300  opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
                    <FaRegHeart className="text-lg" />
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
              </div>
              <div className="">
                <p className="mb-1">{item.title}</p>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Model
        isModelOpen={isModelOpen}
        handleClose={handleClose}
        data={products.find((item) => item.id === isModelOpen)}
      /> */}

      <div>
        <div className="w-10/12 m-auto flex gap-3 items-start mt-8 ">
          <div className=" w-1/4 bg-white shadow-lg p-4">
            <div>
              <div className="my-4">
                <h1 className="text-4xl font-semibold">Filter</h1>
              </div>

              <div className="my-4">
                <h1 className="mb-3 text-3xl font-semibold">By Price</h1>
                <div>
                  <Slider
                    min={0}
                    max={1500}
                    range
                    defaultValue={filters.priceRange}
                    onChange={handlePriceChange}
                  />

                  <div className="flex justify-between">
                    <span>Min Price:${filters.priceRange[0]}</span>
                    <span>Max Price:${filters.priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <div className="my-4">
                <h1 className="mb-3 text-3xl font-semibold">By Category</h1>

                <div>
                  {categoryList.map((category, key) => (
                    <div className="flex items-center" key={key}>
                      <input
                        type="checkbox"
                        checked={filters.categories.includes(category)}
                        onChange={() =>
                          handleCheckboxChange("categories", category)
                        }
                      />
                      <div>{category}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="my-4">
                <h1 className="mb-3 text-3xl font-semibold">By Brand</h1>
                <div>
                  {brandList.map((brand, key) => (
                    <div className="flex items-center" key={key}>
                      <input
                        type="checkbox"
                        checked={filters.brands.includes(brand)}
                        onChange={() => handleCheckboxChange("brands", brand)}
                      />
                      <div>{brand}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-8/12">
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4  mb-20 ">
              {filteredProducts.map((item, index) => (
                <div key={index}>
                  <div className="relative group ml-4 shadow-lg">
                    <div>
                      <div>
                        <img src={item.img} alt="" className="rounded-xl" />
                      </div>
                    </div>
                    <div className=" absolute top-0 right-0 m-3 flex flex-col gap-3">
                      <div className="  p-4  bg-white rounded-full hover:bg-gray-300  opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
                        <FaRegHeart className="text-lg" />
                      </div>
                      <div className="  p-4 bg-white rounded-full hover:bg-gray-300   opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
                        <FaSearchengin className="text-lg" />
                      </div>
                    </div>
                    <div className=" absolute bottom-0 right-0 m-3">
                      <button
                        className="  p-4 bg-black rounded-full  opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer"
                        onClick={() => handleOpen(item.id)}
                      >
                        <MdOutlineShoppingCart className="text-white " />
                      </button>
                    </div>
                    <div className="p-3">
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
    </div>
  );
};

export default Shop;
