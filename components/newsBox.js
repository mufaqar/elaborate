import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function StreamingBox({ url, title, title2 }) {
  const ltime = new Date().toLocaleTimeString();
  const router = useRouter();
  var link = router.query['streaming'];

  return (
    <div className="md:border-l cursor-pointer border-black/60 relative [&:nth-child(4)>div>div]:bottom-[25px]">
      <div className="overflow-hidden relative w-full group">
        <Link
          href={`/streaming?streaming=${url}&title=${title}&title2=${title2}`}
        >
          <div className="video-container">
            <iframe
              src={`https://www.youtube.com/embed/${url}?controls=1&autoplay=1&mute=1&playsinline=1&loop=1`}
            ></iframe>
          </div>
        </Link>
        <div
          className={`border-t-[13px] border-[#EBFD00] absolute bottom-[26px] left-0 right-0 ${link == url ? '' : 'lg:hidden'}`}
        >
            <div className="bg-[#F2F2F2] border-t border-[#707070]">
              <div
                className={`flex h-full justify-between ${link == url && 'bg-[#414141]'
                  }`}
              >
                <Link
                  href={`/streaming?streaming=${url}&title=${title}&title2=${title2}`}
                  className={`text-xs leading-4 px-2 pt-[6px] pb-[6px] uppercase ${link == url && 'text-[#F2F2F2]'}`}
                >
                  <span className="HelveticaNowText_Bold"> {title}</span> -{' '}
                  <span className="HelveticaNowText_Regular italic"> {title2}</span>
                </Link>
                <p
                  className={`text-xs leading-4 px-2 pt-[6px] pb-[6px] uppercase NeueHaasRoman ${link == url && 'text-[#EBFF00]'
                    }`}
                >
                  {ltime}
                </p>
              </div>
            </div>
        </div>
        {/* <div className="flex px-3 justify-between bg-[#F2F2F2] absolute transition duration-200 ease-in-out  left-0 right-0 md:-bottom- 24 bottom-24 md:group-hover:bottom-24 ">
          <Link
            href={`/streaming?streaming=${url}&title=${title}`}
            className="text-xs leading-[16px] py-2 uppercase text-blue-600 NeueHaasRoman"
          >
            {title}
          </Link>
          <p className="text-xs leading-[16px] border-l border-[#707070] px-2 py-2 uppercase text-red-600 NeueHaasRoman">
            {ltime}
          </p>
        </div> */}
      </div>
    </div>
  );
}

// <button onClick={handlePlay} className="bg-white p-2 z-40 py-3 rounded-full absolute top-0 right-0 font-bold flex justify-center items-center flex-col">Play</button>
