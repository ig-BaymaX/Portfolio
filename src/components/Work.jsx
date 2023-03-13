import React from "react";

const Work = () => {
  return (
    <div name="work" className="w-full md:screen text-[#8892b0] bg-[#0a185f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="animate-pulse text-4xl font-bold inline border-b-4 text-[#8892b0] border-orange-600">
            Work
          </p>
          <p className="py-6">Check out some of my works.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center item-center mx-auto content-div">
            {/* Hover */}
            <div>
              <span></span>
              <div>
                <a href="/">
                  <button></button>
                </a>
                <a href="/">
                  <button></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
