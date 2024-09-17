import React from "react";
import Heading from "../utilities/Heading";
import Button from "../utilities/Button";

function Contact() {
  return (
    <div className="mt-10">
      <div className="container">
        <div className="w-full">
          <Heading title={"Contact"} description={"Connect with Us: Let's Discuss Your Digital Marketing Needs"} />

          <div className="bg-third rounded-xl my-8 ">
            <div className="relative w-full">
              <div className="w-full py-4 px-2 lg:w-3/5">
                <form>
                  <div className="flex justify-center lg:justify-start w-full items-center space-x-9 p-4">
                    <label className="inline-flex items-center">
                      <input type="radio" name="sayhi" value="sayhi" className="text-primary focus:ring-primary w-[20px] h-[20px]" />
                      <span className="ml-2 ">Say Hi</span>
                    </label>

                    <label className="inline-flex items-center">
                      <input type="radio" name="quote" value="quote" className="text-primary focus:ring-primary w-[20px] h-[20px]" />
                      <span className="ml-2 ">Get a Quote</span>
                    </label>
                  </div>

                  <div className="text-left flex flex-col">
                    <label className="m-3 font-semibold">Name</label>
                    <input type="name" id="Name" name="Name" className="mx-3 p-3  border rounded-xl shadow-sm " placeholder="Your Name" required />
                  </div>

                  <div className="text-left flex flex-col">
                    <label className="m-3 font-semibold">Email</label>
                    <input type="email" id="email" name="email" className="mx-3 p-3  border rounded-xl shadow-sm " placeholder="Your Email" required />
                  </div>

                  <div className="text-left flex flex-col">
                    <label className="m-3 font-semibold">Message</label>
                    <textarea type="text" id="message" name="message" className="mx-3 p-3  border rounded-xl shadow-sm " placeholder="Your Message" rows="5" required />
                  </div>

                  <Button name={"Send Message"} text={"m-7 bg-secondary text-third hover:opacity-80 cursor-pointer"} />
                </form>
              </div>

              <div className="w-1/2 hidden lg:block absolute top-0 -right-14">
                <img src="/images/Contact.svg" alt="..." className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
