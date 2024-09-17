import React from "react";
import Marquee from "react-fast-marquee";

function Platform() {
  return (
    <div className="my-8 lg:my-12">
      <div className="container w-full">
        <Marquee>
          <img className="p-2 lg:px-9" src="/images/company/Amazon.svg" alt="Amazon" />

          <img className="p-2 lg:px-9" src="/images/company/Dribble.svg" alt="Dribble" />

          <img className="p-2 lg:px-9" src="/images/company/Hubspot.svg" alt="Hubspot" />

          <img className="p-2 lg:px-9" src="/images/company/Netflix.svg" alt="Netflix" />

          <img className="p-2 lg:px-9" src="/images/company/Notion.svg" alt="Notion" />

          <img className="p-2 lg:px-9" src="/images/company/Zoom.svg" alt="Zoom" />
        </Marquee>
      </div>
    </div>
  );
}

export default Platform;
