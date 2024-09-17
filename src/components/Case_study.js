import React from "react";
import Heading from "../utilities/Heading";
import { HiArrowNarrowUp } from "react-icons/hi";

function Case_study() {
  return (
    <div className="my-9">
      <div className="container">
        <div className="w-full">
          <Heading title={"Case Studies"} description={"Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"} style={"w-[190px]"} />

          <div className="scroll-snap-x snap-mandatory overflow-x-auto flex space-x-1 lg:space-x-0 p-4 lg:bg-secondary rounded-3xl">
            <div className="snap-always snap-center flex-shrink-0 bg-secondary text-third p-9 lg:px-6 lg:py-0 lg:my-9 text-left rounded-3xl lg:rounded-none w-[300px] lg:w-1/3 lg:border-r">
              <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
              <div className="flex py-3 items-center text-primary">
                <p>Learn More</p>
                <div className="ml-2">
                  <HiArrowNarrowUp className="rotate-45 w-[30px] h-[30px]" />
                </div>
              </div>
            </div>

            <div className="snap-always snap-center flex-shrink-0 bg-secondary text-third p-9 lg:px-6 lg:py-0 lg:my-9 text-left rounded-3xl lg:rounded-none w-[300px] lg:w-1/3 lg:border-r">
              <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
              <div className="flex py-3 items-center text-primary">
                <p>Learn More</p>
                <div className="ml-2">
                  <HiArrowNarrowUp className="rotate-45 w-[30px] h-[30px]" />
                </div>
              </div>
            </div>

            <div className="snap-always snap-center flex-shrink-0 bg-secondary text-third p-9 lg:px-6 lg:py-0 lg:my-9 text-left rounded-3xl lg:rounded-none w-[300px] lg:w-1/3">
              <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
              <div className="flex py-3 items-center text-primary">
                <p>Learn More</p>
                <div className="ml-2">
                  <HiArrowNarrowUp className="rotate-45 w-[30px] h-[30px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Case_study;
