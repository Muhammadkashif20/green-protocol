import React from "react";
import image1 from "../Images/Solution1.png";
import images2 from "../Images/Solution2.png";
import images3 from "../Images/Solution3.png";
import images4 from "../Images/Solution4.png";
import images5 from "../Images/Solution5.png";
import images6 from "../Images/Solution6.png";
import images7 from "../Images/Solution7.png";
import images8 from "../Images/Solution8.png";
import images9 from "../Images/sol1.png";
import images10 from "../Images/sol2.png";
import images11 from "../Images/sol3.png";
import images12 from "../Images/sol4.png";
import images13 from "../Images/sol5.png";
import images14 from "../Images/sol6.png";
import images15 from "../Images/sol7.png";
import images16 from "../Images/sol8.png";
import images17 from "../Images/sol9.png";
import images18 from "../Images/sol10.png";

const Solution = () => {
  return (
    <div className="Solution">
      <h1 className="text-green-600 font-bold text-5xl ms-[8rem] mt-2 ">
        Solution
      </h1>
      <div className="bg-green-400 ms-[8rem] w-[60rem] h-1 mt-4 rounded-md"></div>
      {/* Cards Working */}
      <div className="flex flex-row ms-[9rem] gap-0 mt-12">
        <div className="card bg-green-600 w-[14.5rem] h-[19rem] flex align-middle justify-center pt-2 flex-col">
          <img src={image1} className="h-[10rem] w-[10rem] ms-[2.2rem] my-3" />
          <h1 className="text-center text-white text-2xl font-bold">
            Green <br />
            Energy
          </h1>
        </div>
        <div className="card bg-green-500 w-[14.5rem] h-[19rem] flex align-middle justify-center pt-2 flex-col">
          <img src={images2} className="h-[10rem] w-[10rem] ms-[2.2rem] my-3" />
          <h1 className="text-center text-white text-2xl font-bold">
            Automated <br />
            agricolture
          </h1>
        </div>
        <div className="card bg-green-600 w-[14.5rem] h-[19rem] flex align-middle justify-center pt-2 flex-col">
          <img src={images3} className="h-[10rem] w-[10rem] ms-[2.2rem] my-3" />
          <h1 className="text-center text-white text-2xl font-bold">
            Depuration <br />
            rain water
          </h1>
        </div>
        <div className="card bg-green-500 w-[14.5rem] h-[19rem] flex align-middle justify-center pt-2 flex-col">
          <img src={images4} className="h-[10rem] w-[10rem] ms-[2.2rem] my-3" />
          <h1 className="text-center text-white text-2xl font-bold">
            Mosquito <br />
            Prevention
          </h1>
        </div>
        {/* Cards Row 2 */}
      </div>
      {/* Discovery's Images */}
      <div className="flex flex-row ms-[9rem] gap-0">
        <div className="card bg-green-500 w-[14.5rem] h-[19rem] flex align-middle justify-center pt-2 flex-col">
          <img src={images5} className="h-[10rem] w-[10rem] ms-[2.2rem] my-3" />
          <h1 className="text-center text-white text-2xl font-bold">
            Electrical <br />
            mobility
          </h1>
        </div>
        <div className="card bg-green-600 w-[14.5rem] h-[19rem] flex align-middle justify-center pt-2 flex-col">
          <img src={images6} className="h-[10rem] w-[10rem] ms-[2.2rem] my-3" />
          <h1 className="text-center text-white text-2xl font-bold">
            Solar charging <br />
            station
          </h1>
        </div>
        <div className="card bg-green-500 w-[14.5rem] h-[19rem] flex align-middle justify-center pt-2 flex-col">
          <img src={images7} className="h-[10rem] w-[10rem] ms-[2.2rem] my-3" />
          <h1 className="text-center text-white text-2xl font-bold">
            Recycling
            <br />
            Plastic
          </h1>
        </div>
        <div className="card bg-green-600 w-[14.5rem] h-[19rem] flex align-middle justify-center pt-2 flex-col">
          <img src={images8} className="h-[10rem] w-[10rem] ms-[2.2rem] my-3" />
          <h1 className="text-center text-white text-2xl font-bold">
            Cleaning
            <br />
            Ocean
          </h1>
        </div>
      </div>
      <div className="discoveryofgreenProto mt-[5rem] ms-[9rem]">
        <div className="2imgPair flex flex-row border-4 border-green-600 w-[57.5rem]">
          <img src={images9} className="w-[28rem]  m-1" />
          <img src={images10} className="w-[28rem]  m-1" />
        </div>
        <div className="2imgPair flex flex-row border-4 border-green-600 w-[57.5rem] mt-5">
          <img src={images11} className="w-[28rem]  m-1" />
          <img src={images12} className="w-[28rem]  m-1" />
        </div>
        <div className="2imgPair flex flex-row border-4 border-green-600 w-[57.5rem] mt-5">
          <img src={images13} className="w-[28rem]  m-1" />
          <img src={images14} className="w-[28rem]  m-1" />
        </div>
        <div className="2imgPair flex flex-row border-4 border-green-600 w-[57.5rem] mt-5">
          <img src={images15} className="w-[28rem]  m-1" />
          <img src={images16} className="w-[28rem]  m-1" />
        </div>
        <div className="2imgPair flex flex-row border-4 border-green-600 w-[57.5rem] mt-5">
          <img src={images17} className="w-[28rem]  m-1" />
          <img src={images18} className="w-[28rem]  m-1" />
        </div>
      </div>
    </div>
  );
};
export default Solution;
