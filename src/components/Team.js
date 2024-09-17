import React from "react";
import Heading from "../utilities/Heading";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "../utilities/Button";

function Team() {
  return (
    <div className="">
      <div className="lg:container">
        <div className="w-full">
          <Heading title={"Team"} description={"Meet the skilled and experienced team behind our successful digital marketing strategies"} />

          <div className="w-full lg:grid lg:grid-cols-3 lg:mt-7 lg:gap-y-4">
            <div className="bg-third mx-10 rounded-xl p-5 shadow-lg shadow-secondary mb-8">
              <div className="flex justify-around items-center p-6">
                <img src="https://via.placeholder.com/150" alt="img" width={"50px"} height={"50px"} className="rounded-full border-2" />
                <div>
                  <h1 className="font-bold">John Smith</h1>
                  <p className="text-sm">CEO and Founder</p>
                </div>
                <button>
                  <FaLinkedinIn className="bg-secondary rounded-full p-2 text-primary w-[30px] h-[30px]" />
                </button>
              </div>

              <hr />

              <div className="p-6 text-justify">
                <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
              </div>
            </div>

            <div className="bg-third mx-10 rounded-xl p-5 shadow-lg shadow-secondary mb-8">
              <div className="flex justify-around items-center p-6">
                <img src="https://via.placeholder.com/150" alt="img" width={"50px"} height={"50px"} className="rounded-full border-2" />
                <div>
                  <h1 className="font-bold">John Smith</h1>
                  <p className="text-sm">CEO and Founder</p>
                </div>
                <button>
                  <FaLinkedinIn className="bg-secondary rounded-full p-2 text-primary w-[30px] h-[30px]" />
                </button>
              </div>

              <hr />

              <div className="p-6 text-justify">
                <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
              </div>
            </div>

            <div className="bg-third mx-10 rounded-xl p-5 shadow-lg shadow-secondary mb-8">
              <div className="flex justify-around items-center p-6">
                <img src="https://via.placeholder.com/150" alt="img" width={"50px"} height={"50px"} className="rounded-full border-2" />
                <div>
                  <h1 className="font-bold">John Smith</h1>
                  <p className="text-sm">CEO and Founder</p>
                </div>
                <button>
                  <FaLinkedinIn className="bg-secondary rounded-full p-2 text-primary w-[30px] h-[30px]" />
                </button>
              </div>

              <hr />

              <div className="p-6 text-justify">
                <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
              </div>
            </div>

            <div className="bg-third mx-10 rounded-xl p-5 shadow-lg shadow-secondary mb-8">
              <div className="flex justify-around items-center p-6">
                <img src="https://via.placeholder.com/150" alt="img" width={"50px"} height={"50px"} className="rounded-full border-2" />
                <div>
                  <h1 className="font-bold">John Smith</h1>
                  <p className="text-sm">CEO and Founder</p>
                </div>
                <button>
                  <FaLinkedinIn className="bg-secondary rounded-full p-2 text-primary w-[30px] h-[30px]" />
                </button>
              </div>

              <hr />

              <div className="p-6 text-justify">
                <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
              </div>
            </div>

            <div className="bg-third mx-10 rounded-xl p-5 shadow-lg shadow-secondary mb-8">
              <div className="flex justify-around items-center p-6">
                <img src="https://via.placeholder.com/150" alt="img" width={"50px"} height={"50px"} className="rounded-full border-2" />
                <div>
                  <h1 className="font-bold">John Smith</h1>
                  <p className="text-sm">CEO and Founder</p>
                </div>
                <button>
                  <FaLinkedinIn className="bg-secondary rounded-full p-2 text-primary w-[30px] h-[30px]" />
                </button>
              </div>

              <hr />

              <div className="p-6 text-justify">
                <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
              </div>
            </div>

            <div className="bg-third mx-10 rounded-xl p-5 shadow-lg shadow-secondary mb-8">
              <div className="flex justify-around items-center p-6">
                <img src="https://via.placeholder.com/150" alt="img" width={"50px"} height={"50px"} className="rounded-full border-2" />
                <div>
                  <h1 className="font-bold">John Smith</h1>
                  <p className="text-sm">CEO and Founder</p>
                </div>
                <button>
                  <FaLinkedinIn className="bg-secondary rounded-full p-2 text-primary w-[30px] h-[30px]" />
                </button>
              </div>

              <hr />

              <div className="p-6 text-justify">
                <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
              </div>
            </div>
          </div>

          <Button name={"See all team"} text={"w-1/2 lg:w-1/5 lg:mr-1 m-auto bg-secondary text-third hover:opacity-80 cursor-pointer my-6"} />
        </div>
      </div>
    </div>
  );
}

export default Team;
