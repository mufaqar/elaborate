import React from "react";

export default function LiveScroll({Custom_bg, Text_color}) {
  return (
    <div>
      <div
      
        className={`overflow-x-hidden flex justify-center item-center gap-10 w-screen border-y border-[#707070] ${Custom_bg}`}
      >

        {[1, 2, 3, 4].map((item, i) => (
          <div className="animate-marquee whitespace-nowrap " key={i}>
            <span className={`text-xs leading-[16px] -mt-[2px] font-normal mx-4 uppercase NeueHaasRoman ${Text_color}`}>
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
