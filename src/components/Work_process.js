import React, { useState } from "react";
import Heading from "../utilities/Heading";
import { CiCirclePlus } from "react-icons/ci";

function Work_process() {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(index === active ? null : index);
  };

  return (
    <div className="m-16">
      <div className="lg:container">
        <div className="w-full">
          <Heading title={"Our Working Process"} description={"Step-by-Step Guide to Achieving Your Business Goals"} style={"w-[250px] lg:w-[320px]"} styleTitle={"lg:w-[350px] "} />

          <div className="bg-third rounded-3xl shadow-lg shadow-secondary w-full mb-7 lg:mt-9">
            <div className="flex flex-wrap justify-between p-3 ">
              <div className="flex justify-around lg:justify-start w-2/3 lg:m-6 items-center">
                <h1 className="text-2xl font-bold lg:text-4xl">01</h1>
                <h1 className="lg:px-4 text-xl font-semibold lg:text-2xl"> Consultation</h1>
              </div>
              <button className="items-center" onClick={() => toggle(0)}>
                {active === 0 ? <CiCirclePlus className="w-[30px] h-[30px] rotate-45" /> : <CiCirclePlus className="w-[30px] h-[30px]" />}
              </button>
            </div>

            <div className={`px-10 text-justify ${active === 0 ? "block" : "hidden "}`}>
              <hr />
              <p className="py-2 lg:py-8 lg:pr-10 lg:text-lg">
                During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your
                requirements.
              </p>
            </div>
          </div>

          <div className="bg-third rounded-3xl shadow-lg shadow-secondary w-full mb-7">
            <div className="flex flex-wrap justify-between p-3 ">
              <div className="flex justify-between w-4/5 ml-3 items-center lg:justify-start lg:m-6">
                <h1 className="text-2xl font-bold lg:text-4xl">02</h1>
                <h1 className="text-xl font-semibold text-left lg:text-2xl lg:ml-5 ml-7"> Research and Strategy Development</h1>
              </div>
              <button className="items-center" onClick={() => toggle(1)}>
                {active === 1 ? <CiCirclePlus className="w-[30px] h-[30px] rotate-45" /> : <CiCirclePlus className="w-[30px] h-[30px]" />}
              </button>
            </div>

            <div className={`px-10 text-justify ${active === 1 ? "block" : "hidden "}`}>
              <hr />
              <p className="py-2 lg:py-8 lg:pr-8">
                During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your
                requirements.
              </p>
            </div>
          </div>

          <div className="bg-third rounded-3xl shadow-lg shadow-secondary w-full mb-7">
            <div className="flex flex-wrap justify-between p-3 ">
              <div className="flex justify-around lg:justify-start lg:m-6 w-4/5 items-center ">
                <h1 className="text-2xl lg:text-4xl font-bold">03</h1>
                <h1 className="text-xl lg:text-2xl font-semibold text-center lg:px-5"> Implementation</h1>
              </div>
              <button className="items-center" onClick={() => toggle(2)}>
                {active === 2 ? <CiCirclePlus className="w-[30px] h-[30px] rotate-45" /> : <CiCirclePlus className="w-[30px] h-[30px]" />}
              </button>
            </div>

            <div className={`px-10 text-justify ${active === 2 ? "block" : "hidden "}`}>
              <hr />
              <p className="py-2 lg:py-8 lg:pr-8">
                During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your
                requirements.
              </p>
            </div>
          </div>

          <div className="bg-third rounded-3xl shadow-lg shadow-secondary w-full mb-7">
            <div className="flex flex-wrap justify-between p-3 ">
              <div className="flex justify-between lg:justify-start w-4/5 ml-3 lg:m-6 items-center">
                <h1 className="text-2xl lg:text-4xl font-bold">04</h1>
                <h1 className="text-xl lg:text-2xl font-semibold ml-6 text-left"> Monitoring and Optimization</h1>
              </div>
              <button className="items-center" onClick={() => toggle(3)}>
                {active === 3 ? <CiCirclePlus className="w-[30px] h-[30px] rotate-45" /> : <CiCirclePlus className="w-[30px] h-[30px]" />}
              </button>
            </div>

            <div className={`px-10 text-justify ${active === 3 ? "block" : "hidden "}`}>
              <hr />
              <p className="py-2 lg:py-8 lg:pr-8">
                During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your
                requirements.
              </p>
            </div>
          </div>

          <div className="bg-third rounded-3xl shadow-lg shadow-secondary w-full mb-7">
            <div className="flex flex-wrap justify-between p-3 ">
              <div className="flex justify-around lg:justify-start lg:m-6 w-4/5 ml-4 items-center">
                <h1 className="text-2xl font-bold lg:text-4xl">05</h1>
                <h1 className="text-xl font-semibold text-left lg:text-2xl ml-6"> Reporting and Comunication</h1>
              </div>
              <button className="items-center" onClick={() => toggle(4)}>
                {active === 4 ? <CiCirclePlus className="w-[30px] h-[30px] rotate-45" /> : <CiCirclePlus className="w-[30px] h-[30px]" />}
              </button>
            </div>

            <div className={`px-10 text-justify ${active === 4 ? "block" : "hidden "}`}>
              <hr />
              <p className="py-2 lg:py-8 lg:pr-8">
                During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your
                requirements.
              </p>
            </div>
          </div>

          <div className="bg-third rounded-3xl shadow-lg shadow-secondary w-full mb-7">
            <div className="flex flex-wrap justify-between p-3 ">
              <div className="flex justify-around lg:justify-start lg:m-6 w-3/4 ml-5 items-center">
                <h1 className="text-2xl lg:text-4xl font-bold">06</h1>
                <h1 className="text-xl lg:text-2xl font-semibold text-left ml-6"> Continual Improvement</h1>
              </div>
              <button className="items-center" onClick={() => toggle(5)}>
                {active === 5 ? <CiCirclePlus className="w-[30px] h-[30px] rotate-45" /> : <CiCirclePlus className="w-[30px] h-[30px]" />}
              </button>
            </div>

            <div className={`px-10 text-justify ${active === 5 ? "block" : "hidden "}`}>
              <hr />
              <p className="py-2 lg:py-8 lg:pr-8">
                During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work_process;
