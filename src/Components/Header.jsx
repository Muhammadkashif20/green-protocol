import React from "react";
import Image1 from "../Images/image.png";
import Image2 from "../Images/---.png";
import Image3 from "../Images/nft.png";
import Image4 from "../Images/leaf.png";
const Header = () => {
  return (
    <div className="Header w-full h-[30rem] bg-green-600 pt-20">
      <center>
        <h1 className="text-5xl text-white font-bold pt-12">Green Protocol</h1>
      </center>
      <div className="Images flex flex-row">
        <img src={Image1} className="w-[11rem] mt-[4rem] ms-[14rem]" />
        <img src={Image2} className="h-2 mt-[9rem] ms-[1rem]" />
        <img src={Image3} className="w-[11rem] mt-[4rem] ms-[1rem]" />
        <img src={Image2} className="h-2 mt-[9rem] ms-[1rem]" />
        <img src={Image4} className="w-[11rem] mt-[4rem] ms-[1rem]" />
      </div>
    </div>
  );
};

export default Header;
