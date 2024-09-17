import Button from "../utilities/Button";

const Hero = () => {
  return (
    <div className="lg:min-h-screen w-full mt-24 lg:mt-3 content-center -z-40">
      <div className="container lg:pt-14">
        <div className="grid lg:grid-rows-3 lg:grid-flow-col w-full items-center text-left content-center lg:pt-7">
          <div className="lg:w-4/5 lg:ml-16">
            <h1 className="text-5xl lg:text-6xl font-semibold">Navigating the digital landscape for success</h1>
          </div>

          <div className="order-3 lg:w-2/3 lg:text-xl lg:ml-16">
            <p className="mt-5 lg:mt-16">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
          </div>

          <div className="order-4 lg:ml-16">
            <Button name={"Book a Consultations"} text={"bg-secondary text-third w-[200px] mt-5 lg:text-xl lg:w-[250px] text-center"} />
          </div>

          <div className="order-2 lg:col-span-2 row-span-3 lg:order-4">
            <img src="/images/illustration.svg" alt="illustration" className="p-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
