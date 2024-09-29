import React from "react";
import image1 from "../Images/example-Diagram1.png";
import image2 from "../Images/L-arrowEamples.png";
import image3 from "../Images/example-Diagram2.png";
import image4 from "../Images/example-Diagram3.png";
import image5 from "../Images/r-arrow.png";
import image6 from "../Images/example-Diagram4.png";
import image7 from "../Images/r-arrow2.png";
import image8 from "../Images/Box1.png"
import image9 from "../Images/boxesp2Card.png";

const Example = () => {
  return (
    <div className="Example mt-[8rem]">
      <h1 className="text-green-600 font-bold text-5xl ms-[8rem] mt-2  ">
        Examples
      </h1>
      <div className="bg-green-400 ms-[8rem] w-[60rem] h-1 mt-4 rounded-md"></div>
      <center>
        <h1 className="mt-[3rem] text-[1.40rem] text-green-600 font-MyFont">
          1 Greenhouse = <b className="font-sans">100 NFT → 100 USD</b> Price
        </h1>
      </center>
      <div className="flex flex-row">
        <img src={image1} className="w-[15rem] ms-[8rem] mt-5 h-[11rem]" />
        <img src={image2} className="w-24 h-6 mt-[6rem]" />
        <img src={image3} className="w-[10rem] ms-[1rem] mt-5 h-[10.5rem]" />
        <img src={image2} className="w-24 h-6 mt-[6rem]" />
        <img src={image4} className="w-[20rem] ms-[1rem] mt-5 h-[10rem]" />
      </div>
      <div className="flex justify-center ">
        <img src={image5} className="w-[12rem] h-15  mb-[4rem]" />
        <img src={image6} className="w-[10rem]  mt-14 h-[10rem]" />
        <img src={image7} className="w-[12rem] h-15  mb-[6rem]" />
      </div>
      <div className="Boxes mt-[5rem] flex">
        <div className="box1 bg-gray-200 w-[30rem] h-[22rem] ms-[9rem]">
          <img src={image8} className="w-20 ms-[13rem] pt-5" />
          <center>
            <p className="text-green-500 text-[2.2rem] mt-7 font-MyFont">
              Buy NFT to help
              <br />
              the environment
              <br />
              and get passive
              <br />
              income
            </p>
          </center>
        </div>
        <div className="box2 bg-green-500 w-[30rem] h-[22rem] ">
          <img src={image9} className="w-[6rem] ms-[13rem] pt-5" />
          <center>
            <p className="text-white text-[2.2rem] mt-4 ms-[2rem] font-MyFont">
              Advantage:
              <br />
              Resale the ownership
              <br />
              Borrow
              <br />
              Generate profit
            </p>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Example;
