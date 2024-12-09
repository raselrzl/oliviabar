import React from "react";
import RightArrow from "./RightArrow";

const DownloadPDF = () => {
  return (
    <div className="">
      <div className="relative flex items-center justify-center h-[25vh] min-h-[25vh] bg-[url('/olivia/d1.jpg')] bg-cover bg-center bg-no-repeat mx-auto my-6 max-w-screen-lg bg-[#f8d8c9] mt-6 lg:mt-16">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
          <a
            href="/olivia/Drinkmeny.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg text-black font-bold px-4 py-2 uppercase bg-white"
          >
            Drinkmeny <RightArrow />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadPDF;
