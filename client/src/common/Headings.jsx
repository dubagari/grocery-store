import React from "react";

const Headings = ({ title }) => {
  return (
    <div>
      <div>
        <div className=" my-10 text-center  text-3xl font-semibold capitalize text-slate-700">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Headings;
