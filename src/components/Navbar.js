import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Button from "../utilities/Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="fixed w-full top-0 z-50 bg-third">
      <div className="container p-4 ">
        <div className="flex flex-wrap justify-between">
          <div className="content-center">
            <img src="/images/Logo.svg" alt="Logo" width={"150px"} />
          </div>

          <div className="relative lg:hidden">
            <button
              onClick={() => {
                setToggle(toggle ? false : true);
              }}
            >
              {toggle === true ? <IoIosMenu className="w-[30px] h-[30px]" /> : <IoCloseOutline className="w-[30px] h-[30px]" />}
            </button>
          </div>

          <div className={`${toggle ? "hidden lg:flex lg:shadow-none lg:bg-none" : `absolute bg-third`} top-12 right-7 shadow-xl   p-2`}>
            <div className="px-10 py-2">
              <ul className="lg:flex ">
                <li className="m-2 lg:px-3">
                  <Link to="/" className="hover:underline hover:decoration-primary hover:opacity-70 py-2">
                    About Us
                  </Link>
                </li>
                <li className="m-2 lg:px-3">
                  <Link to="/" className="hover:underline hover:decoration-primary hover:opacity-70 py-2">
                    Service
                  </Link>
                </li>
                <li className="m-2 lg:px-3">
                  <Link to="/" className="hover:underline hover:decoration-primary hover:opacity-70 py-2">
                    Use Cases
                  </Link>
                </li>
                <li className="m-2 lg:px-3">
                  <Link to="/" className="hover:underline hover:decoration-primary hover:opacity-70 py-2">
                    Pricing
                  </Link>
                </li>
                <li className="m-2 lg:px-3">
                  <Link to="/" className="hover:underline hover:decoration-primary hover:opacity-70 py-2">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <Button name={"Request a quote"} text={"hover:bg-secondary hover:text-third"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
