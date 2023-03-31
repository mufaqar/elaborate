import Link from 'next/link';
import React, { useState } from 'react';

export default function StreamingBox({ url, title }) {
  const ltime = new Date().toLocaleTimeString();

  return (
    <div className="md:border-l cursor-pointer border-black relative ">
      <div className="overflow-hidden relative w-full group">
        <Link href={`/streaming?streaming=${url}&title=${title}`}>
          <div className="video-container">
            <iframe
              src={`https://www.youtube.com/embed/${url}?controls=1&autoplay=1&mute=1&playsinline=1&loop=1`}
            ></iframe>
          </div>
        </Link>
        <div className="flex px-3 justify-between  bg-[#F2F2F2] absolute transition duration-200 ease-in-out  left-0 right-0 md:-bottom-6 bottom-0 md:group-hover:bottom-6">
          <Link
            href="/streaming"
            className="text-xs leading-[16px] py-2 uppercase text-blue-600 NeueHaasRoman"
          >
            {title}
          </Link>
          <p className="text-xs leading-[16px] border-l border-[#707070] px-2 py-2 uppercase text-red-600 NeueHaasRoman">
            {ltime}
          </p>
        </div>
      </div>
    </div>
  );
}

// <button onClick={handlePlay} className="bg-white p-2 z-40 py-3 rounded-full absolute top-0 right-0 font-bold flex justify-center items-center flex-col">Play</button>
