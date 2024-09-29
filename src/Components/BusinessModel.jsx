import React from "react";
import image1 from "../Images/businessModel1.png";
import image2 from "../Images/businessModel2.png";
import image3 from "../Images/businessModel3.png";
import image4 from "../Images/businessModel4.png";
import image5 from "../Images/businessModel5.png";
import sec2image1 from "../Images/businessModel(2)1.png";
import sec2image2 from "../Images/businessModel(2)2.png";
import sec2image3 from "../Images/businessModel(2)3.png";
import sec2image4 from "../Images/businessModel(2)4.png";
import sec2image5 from "../Images/businessModel(2)5.png";
import sec2image6 from "../Images/businessModel(2)6.png";
const BusinessModel = () => {
  return (
    <div className="businessModel  mt-[8rem]">
      <h1 className="text-green-600 font-bold text-5xl ms-[8rem] mt-2  ">
        BusinessModel
      </h1>
      <div className="bg-green-400 ms-[8rem] w-[60rem] h-1 mt-4 rounded-md"></div>
      <center>
        <h1 className="mt-8 text-[1.40rem] text-green-600 font-MyFont">
          Crowd-funding ownership of
        </h1>
      </center>
      <div className="imgSecR1 flex flex-row justify-center space-x-24 mt-[1.5rem]">
        <div className="flex flex-col ">
          <img src={image1} className="w-[12.5rem]" />
          <p className="text-center text-green-600 text-[1.30rem] font-MyFont mt-4">
            Fruits and Vegetable <br />
            Sale Out
          </p>
        </div>
        <div className="flex flex-col ">
          <img src={image2} className="w-[12.5rem]" />
          <p className="text-center text-green-600 text-[1.30rem] font-MyFont mt-4">
            Electrical Distribution
            <br /> Profit
          </p>
        </div>
        <div className="flex flex-col ">
          <img src={image3} className="w-[12.5rem]" />
          <p className="text-center text-green-600 text-[1.30rem] font-MyFont mt-4">
            Plastic Recycling
          </p>
        </div>
      </div>
      <div className="imgSecR2 flex flex-row justify-center space-x-24  mt-[4.5rem] ">
        <div className="flex flex-col ">
          <img src={image4} className="w-[12.5rem]" />
          <p className="text-center text-green-600 text-[1.30rem] font-MyFont mt-4">
            Electrical Mobility
            <br />
            Rental
          </p>
        </div>
        <div className="flex flex-col ">
          <img src={image5} className="w-[12.5rem]" />
          <p className="text-center text-green-600 text-[1.30rem] font-MyFont mt-4">
            Mosquito System
          </p>
        </div>
      </div>
      {/* 2nd-Section */}
      <div className="2nd-Section-BM">
        <center>
          <h1 className="mt-[6rem] text-[1.40rem] text-green-600 font-MyFont">
            Buy (as NFT) and get the profit
          </h1>
        </center>
        <div className="imgSec2R1 flex flex-row justify-center space-x-24 mt-[1.5rem]">
          <div className="flex flex-col ">
            <p className="text-center text-green-600 text-[1.30rem] font-MyFont mt-4 font-medium mb-4">
              Trash
            </p>
            <img src={sec2image1} className="w-[12.5rem]" />
            <p className="text-center text-green-600 text-[1.30rem] font-MyFont mt-4">
              when recycled
            </p>
          </div>
          <div className="flex flex-col ">
            <p className="text-center text-green-600 text-[1.30rem] font-MyFont mt-4 font-medium mb-4">
              GreenHouse
            </p>
            <img src={sec2image2} className="w-[12.5rem]" />
            <p className="text-center text-green-600 text-[1.30rem] font-MyFont mt-4">
              Fruits, vegetable and
              <br />
              energy sale
            </p>
          </div>
          <div className="flex flex-col ">
            <p className="text-center text-green-600 text-[1.30rem] font-MyFont mt-4 font-medium mb-4">
              Solar Station
            </p>
            <img src={sec2image3} className="w-[12.5rem]" />
            <p className="text-center text-green-600 text-[1.30rem] font-MyFont mt-4">
              When used for
              <br /> charging
            </p>
          </div>
        </div>
        <div className="imgSec2R2 flex flex-row justify-center space-x-24 mt-[3rem]">
          <div className="flex flex-col ">
            <p className="text-center text-green-600 text-[1.30rem] font-MyFont mt-4 font-medium mb-4">
              Electrical Mobility{" "}
            </p>
            <img src={sec2image4} className="w-[12.5rem]" />
            <p className="text-center text-green-600 text-[1.30rem] font-MyFont mt-4">
              on the rental
            </p>
          </div>
          <div className="flex flex-col ">
            <p className="text-center text-green-600 text-[1.30rem] font-MyFont mt-4 font-medium mb-4">
              Green Energy
            </p>
            <img src={sec2image5} className="w-[12.5rem]" />
            <p className="text-center text-green-600 text-[1.30rem] font-MyFont mt-4">
              energy sale
            </p>
          </div>
          <div className="flex flex-col ">
            <p className="text-center text-green-600 text-[1.30rem] font-MyFont mt-4 font-medium mb-4">
              Mosquito System
            </p>
            <img src={sec2image6} className="w-[12.5rem]" />
            <p className="text-center text-green-600 text-[1.30rem] font-MyFont mt-4">
              Refill products sale
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModel;
