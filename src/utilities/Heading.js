import React from "react";

function Heading({ title, description, style, styleTitle }) {
  return (
    <div className="">
      <div className="w-full flex flex-wrap content-center">
        <div className={`w-full lg:w-[230px] text-2xl lg:text-3xl font-semibold content-center ${styleTitle}`}>
          <div className={`w-[150px] p-2 m-auto bg-primary rounded-xl ${style}`}>
            <h1 className="">{title}</h1>
          </div>
        </div>

        <div className="w-full lg:w-1/2 py-7 lg:pr-8 lg:text-left lg:text-lg">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Heading;
