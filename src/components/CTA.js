import React from "react";
import Button from "../utilities/Button";

function CTA() {
  return (
    <div className="">
      <div className="container lg:px-20">
        <div className="w-full">
          <div className="bg-third rounded-2xl m-2 shadow-sm ">
            <div className="flex flex-wrap justify-around">
              <div className="w-full px-10 py-8 text-start lg:w-1/2 content-center">
                <h1 className="text-xl lg:text-2xl pr-3 font-semibold">Let's make things Happend</h1>
                <p className="my-5 lg:text-lg">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>

                <Button name={"Get your free porposal"} text={"w-full text-center bg-secondary text-third hover:opacity-70"} />
              </div>
              <div className="hidden lg:block">
                <img src="/images/CTA/CTA.svg" alt="CTA" className="w-[400px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
