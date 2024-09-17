import React from "react";
import Heading from "../utilities/Heading";
import { HiOutlineArrowUpCircle } from "react-icons/hi2";

function Services() {
  return (
    <div className="">
      <div className="container">
        <Heading title={"Services"} description={"At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"} />

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-2 lg:px-14">
          <div className="bg-third p-3 mb-7 rounded-3xl border w-5/4 lg:w-full m-auto h-[250px] shadow-lg shadow-secondary relative -z-50">
            <div className="flex flex-wrap h-full p-2">
              <div className="ml-2">
                <h1 className="bg-primary my-1 px-1 rounded-md font-semibold lg:text-2xl text-lg text-left">Search Engine</h1>
                <p className="bg-primary w-[115px] lg:w-[150px] rounded-md font-semibold lg:text-2xl text-lg text-left">Optimization</p>
              </div>

              <div className="w-full content-end relative">
                <HiOutlineArrowUpCircle className="w-[40px] h-[40px] rotate-45" />
                <p className="hidden lg:block absolute top-[55px] w-[100px] left-8 ">Learn More</p>
              </div>

              <div className="absolute top-20 lg:top-10 right-6">
                <img src="/images/services/Services.svg" alt=" ilustrasi 1" className="w-[200px] lg:w-[250px]" />
              </div>
            </div>
          </div>

          <div className="bg-primary p-3 mb-7 rounded-3xl border w-5/4 lg:w-full m-auto h-[250px] shadow-lg shadow-secondary relative -z-50">
            <div className="flex flex-wrap h-full p-2">
              <div className=" ml-2">
                <h1 className="bg-third font-semibold lg:text-2xl my-1 px-1 rounded-lg text-lg text-left">Pay-Per-Click </h1>
                <h1 className="bg-third font-semibold lg:text-2xl text-lg text-left w-[100px] lg:w-[130px] rounded-lg"> Advertising </h1>
              </div>

              <div className="w-full content-end relative">
                <HiOutlineArrowUpCircle className="w-[40px] h-[40px] rotate-45 bg-secondary rounded-full text-third" />
                <p className="hidden lg:block absolute top-[56px] w-[100px] left-8 ">Learn More</p>
              </div>

              <div className="absolute top-24 lg:top-12 right-6">
                <img src="/images/services/Services3.svg" alt=" ilustrasi 1" className="w-[200px] lg:w-[250px]" />
              </div>
            </div>
          </div>

          <div className="bg-secondary p-3 mb-7 rounded-3xl border w-5/4 lg:w-full m-auto h-[250px] shadow-lg shadow-secondary relative -z-50">
            <div className="flex flex-wrap h-full p-2">
              <div className=" ml-2">
                <h1 className="bg-third font-semibold lg:text-2xl my-1 p-1 rounded-lg text-lg text-left">Social Media </h1>
                <h1 className="bg-third font-semibold lg:text-2xl  text-lg text-left rounded-lg w-[95px] lg:w-[120px] p-1">Marketing</h1>
              </div>

              <div className="w-full content-end relative">
                <HiOutlineArrowUpCircle className="w-[40px] h-[40px] rotate-45 bg-third rounded-full" />
                <p className="hidden lg:block absolute top-[60px] w-[100px] left-10 text-third ">Learn More</p>
              </div>

              <div className="absolute top-10 lg:top-2 right-8">
                <img src="/images/services/Services1.svg" alt=" ilustrasi 1" className="w-[200px] lg:w-[230px]" />
              </div>
            </div>
          </div>

          <div className="bg-third p-3 mb-7 rounded-3xl border w-5/4 lg:w-full m-auto h-[250px] shadow-lg shadow-secondary relative -z-50">
            <div className="flex flex-wrap h-full p-2">
              <div className=" ml-2">
                <h1 className="bg-primary font-semibold lg:text-2xl my-1 p-1 rounded-lg text-lg text-left w-[55px] lg:w-[75px]">Email</h1>
                <h1 className="bg-primary font-semibold lg:text-2xl text-lg text-left rounded-lg p-1">Marketing</h1>
              </div>

              <div className="w-full content-end relative">
                <HiOutlineArrowUpCircle className="w-[40px] h-[40px] rotate-45 bg-third rounded-full" />
                <p className="hidden lg:block absolute top-[60px] w-[100px] left-8 ">Learn More</p>
              </div>

              <div className="absolute top-10 lg:top-5 right-9">
                <img src="/images/services/tokyo-sending-messages-from-one-place-to-another 1.svg" alt=" ilustrasi 1" className="w-[200px] lg:w-[230px]" />
              </div>
            </div>
          </div>

          <div className="bg-primary p-3 mb-7 rounded-3xl border w-5/4 lg:w-full m-auto h-[250px] shadow-lg shadow-secondary relative -z-50">
            <div className="flex flex-wrap h-full p-2">
              <div className=" ml-2">
                <h1 className="bg-third font-semibold lg:text-2xl my-1 p-1 text-lg text-left rounded-lg w-[75px] lg:w-[95px] ">Content</h1>
                <h1 className="bg-third font-semibold lg:text-2xl  text-lg text-left p-1 rounded-lg">Creation</h1>
              </div>

              <div className="w-full content-end relative">
                <HiOutlineArrowUpCircle className="w-[40px] h-[40px] rotate-45 bg-secondary text-third rounded-full" />
                <p className="hidden lg:block absolute top-[60px] w-[100px] left-8 ">Learn More</p>
              </div>

              <div className="absolute top-16 lg:top-10 right-8 lg:right-12">
                <img src="/images/services/Services2.svg" alt=" ilustrasi 1" className="w-[180px] lg:w-[210px]" />
              </div>
            </div>
          </div>

          <div className="bg-secondary p-3 mb-7 rounded-3xl border w-5/4 lg:w-full m-auto h-[250px] shadow-lg shadow-secondary relative -z-50">
            <div className="flex flex-wrap h-full p-2">
              <div className=" ml-2">
                <h1 className="bg-third font-semibold lg:text-2xl my-1 p-1 rounded-lg text-lg text-left">Analytics and</h1>
                <h1 className="bg-third font-semibold lg:text-2xl  text-lg text-left rounded-lg p-1 w-[80px] lg:w-[100px]">Tracking</h1>
              </div>

              <div className="w-full content-end relative">
                <HiOutlineArrowUpCircle className="w-[40px] h-[40px] rotate-45 bg-third rounded-full" />
                <p className="hidden lg:block absolute top-[60px] w-[100px] left-10 text-third ">Learn More</p>
              </div>

              <div className="absolute top-20 lg:top-12 right-6 lg:right-10">
                <img src="/images/services/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.svg" alt=" ilustrasi 1" className="w-[190px] lg:w-[220px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
