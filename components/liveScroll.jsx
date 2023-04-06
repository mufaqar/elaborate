import React from 'react';

export default function LiveScroll({ Custom_bg, Text_color }) {
  return (
    <div>
      <div
        className={`overflow-x-hidden flex justify-center item-center gap-10 w-screen border-y border-[#707070] ${Custom_bg}`}
      >
        {LiveNews.map((item, i) => (
          <div className="animate-marquee whitespace-nowrap " key={i}>
            <span
              className={`text-xs leading-[16px] -mt-[2px] font-normal mx-4 uppercase NeueHaasRoman ${Text_color}`}
            >
              {item.News}
            </span>
            <span className="text-xs -mt-[2px] leading-[16px] font-normal text-red-600 mx-4 uppercase NeueHaasMedium circle">
              LIVE
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
export const LiveNews = [
  {
    News: "WATCH AND LISTEN AS THE GREATEST GAME EVER PLAYED HAPPENS IN REAL TIME."
  },
  {
    News: "CONNECTING THE WORLD WIDE COMMUNITY OF GOLF ENTHUSIASTS THROUGH INTERACTIVE LIVE INTERNET EXPERIENCES. "
  },
];