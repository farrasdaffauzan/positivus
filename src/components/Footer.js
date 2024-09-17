import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Button from "../utilities/Button";

function Footer() {
  return (
    <div className="bg-secondary ">
      <div className="lg:container lg:rounded-t-xl">
        <div className="w-full">
          <div className="flex flex-wrap justify-between w-full text-third items-center py-5">
            <div className="w-full lg:w-1/3">
              <img src="images/LogoWhite.svg" alt="..." className="w-[200px] m-auto lg:m-0 p-4 text-third" />
            </div>

            <div className="w-full lg:w-1/3">
              <ul className="lg:flex lg:justify-center">
                <li className="p-1 lg:p-3">
                  <a href="/">about Us</a>
                </li>
                <li className="p-1 lg:p-3">
                  <a href="/">Services</a>
                </li>
                <li className="p-1 lg:p-3">
                  <a href="/">Use Cases</a>
                </li>
                <li className="p-1 lg:p-3">
                  <a href="/">Pricing</a>
                </li>
              </ul>
            </div>

            <div className="w-full p-3 lg:w-1/3 lg:text-end ">
              <button className="m-1.5 p-1 rounded-full bg-third text-secondary">
                <FaLinkedinIn />
              </button>
              <button className="m-1.5 p-1 rounded-full bg-third text-secondary">
                <FaFacebookF />
              </button>
              <button className="m-1.5 p-1 rounded-full bg-third text-secondary">
                <FaTwitter />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap lg:justify-between">
            <div className="text-third w-full lg:w-1/3 lg:text-left lg:content-center">
              <h1 className="p-1 my-2 bg-primary text-secondary w-[100px] m-auto rounded-xl font-semibold lg:m-0">Contact Us</h1>
              <p className="my-5">Email : farrasdaffauzan@gmail.com</p>
              <p>Address : </p>
              <p>Tangerang, Indonesia</p>
            </div>

            <div className="bg-dark w-full m-5 rounded-xl py-5 lg:w-1/2">
              <form className="lg:flex w-full lg:px-5">
                <input type="name" id="Name" name="Name" className="mx-3 my-2 p-3  border rounded-xl shadow-sm w-4/5 " placeholder="Your Name" required />

                <Button name={"Subscribe To news"} text={"w-4/5 m-auto my-2 bg-primary text-secondary hover:opacity-80"} />
              </form>
            </div>
          </div>

          <hr className="text-third my-6 lg:mb-3" />

          <div className="text-third lg:flex items-center">
            <div className="my-3 lg:mb-5">
              <p>@2024 Positivus All Rights Reserved</p>
              <p>
                by <span className="text-primary font-semibold">Mohammad Farras Daffauzan</span>
              </p>
            </div>

            <p className="pb-6 lg:pb-0 lg:mx-20 underline">Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
