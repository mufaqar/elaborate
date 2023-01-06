import React from "react";

export default function LiveScroll() {
  return (
    <div>
      <div
      
        className="overflow-x-hidden flex justify-center item-center gap-10 w-screen border-y border-black bg-white"
      >

        {[1, 2, 3, 4].map((item, i) => (
          <div className="whitespace-nowrap " key={i}>
            <span className="text-xs leading-[16px] -mt-[2px] font-normal text-black mx-4 uppercase NeueHaasRoman">
              Connecting the world wide community of golf enthusiast through
              interactive live internet experiences
            </span>
            <span className="text-xs -mt-[2px] leading-[16px] font-normal text-red-600 mx-4 uppercase NeueHaasMedium">
              LIVE
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
