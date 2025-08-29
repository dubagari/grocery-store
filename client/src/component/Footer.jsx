import React from "react";
import { footer } from "../data/Data";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex  justify-between gap-8 py-10">
            {footer.map((val, key) => (
              <div key={key} className="w-2/6 text-gray-600">
                <h1 className="mb-3 text-white">{val.header}</h1>
                <p>{val.content1}</p>
                <p>{val.content2}</p>
                <p>{val.content3}</p>
                <p>{val.content4}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
