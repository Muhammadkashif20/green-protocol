import React from "react";
import image1 from "../Images/PD1.png";
import image2 from "../Images/PD2.png";
import image3 from "../Images/PD3.png";
const ProfitDistribution = () => {
  return (
    <div className="ProfitDistribution mt-[8rem]">
      <h1 className="text-green-600 font-bold text-5xl ms-[8rem] mt-2  ">
        Profit Distribution
      </h1>
      <div className="bg-green-400 ms-[8rem] w-[60rem] h-1 mt-4 rounded-md"></div>
      <div className="Cards flex justify-center mt-14 mr-12">
        <div className="card bg-green-600 w-[19rem] h-[19rem] flex align-middle justify-center pt-2 flex-col">
          <img src={image1} className="h-[10rem] w-[10rem] ms-[4.5rem] my-3 " />
          <center>
            <h1 className="text-center text-white text-2xl ">Owner</h1>
            <h2 className="text-white font-bold text-3xl">70%</h2>
          </center>
        </div>
        <div className="card bg-green-500 w-[19rem] h-[19rem] flex align-middle justify-center pt-2 flex-col">
          <img src={image2} className="h-[10rem] w-[10rem] ms-[4.5rem] my-3 " />
          <center>
            <h1 className="text-center text-white text-2xl ">Company</h1>
            <h2 className="text-white font-bold text-3xl">25%</h2>
          </center>
        </div>
        <div className="card bg-green-600 w-[19rem] h-[19rem] flex align-middle justify-center pt-2 flex-col">
          <img src={image3} className="h-[10rem] w-[10rem] ms-[4.5rem]" />
          <center>
            '<h1 className="text-center text-white text-2xl">Charity</h1>
            <h2 className="text-white font-bold text-3xl">5%</h2>
          </center>
        </div>
      </div>
    </div>
  );
};

export default ProfitDistribution;
