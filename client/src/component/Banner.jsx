import React from "react";
import { banners } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineChair } from "react-icons/md";
import { Link } from "react-router-dom";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="w-10/12 mx-auto px-4 py-6">
        <div className="">
          <div>
            <div className="text-4xl font-semibold">
              <div className="flex items-center gap-3 py-2">
                <Link>
                  <MdOutlineChair className="text-4xl rounded-full w-20 h-12 hover:bg-blue-950  text-white bg-red-600" />
                </Link>
                Lorem, ipsum dolor.
              </div>
              <div className="mb-4 text-2xl flex  items-center gap-3">
                Lorem ipsum dolor sit amet consectetur
                <Link>
                  <p className="   text-white hover:bg-blue-950 py-1 px-3 rounded-xl bg-red-600">
                    shop now
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          {banners.map((val, i) => (
            <div key={i}>
              <img
                src={val.banner}
                alt={`Banner ${i + 1}`}
                className="w-full h-[400px] object-cover rounded-xl shadow-md"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Banner;
