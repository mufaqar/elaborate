import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import img_url from "../public/images/dummy.jpg";

export default function NewsBox({ url, time, title, id }) {
  // console.log("🚀 ~ file: newsBox.js:7 ~ NewsBox ~ key", id)

  // const [paly, setPlay] = useState(0)
  // console.log("🚀 ~ file: newsBox.js:10 ~ NewsBox ~ paly", paly)

  // const handlePlay = () =>{
  //   setPlay(1)
  // }

  return (
    <div className="min-h-full md:border-l cursor-pointer border-black relative ">
      <div className="h-screen overflow-hidden relative w-full group">
        <div class="video-container">
          <iframe
            src={`${url}?controls=1&autoplay=1&mute=1&playsinline=1&loop=1`}
          ></iframe>
        </div>
        <div className="flex px-3 justify-between h-[36px] bg-white absolute transition duration-200 ease-in-out  left-0 right-0 md:-bottom-6 -bottom-10 group-hover:bottom-[6rem]">
          <Link
            href="#"
            className="text-xs leading-[16px] py-2 uppercase text-blue-600 NeueHaasRoman"
          >
            {title}
          </Link>
          <p className="text-xs leading-[16px] border-l border-black/80 px-2 py-2 uppercase text-red-600 NeueHaasRoman">
            {time}
          </p>
        </div>
      </div>
    </div>
  );
}

// <button onClick={handlePlay} className="bg-white p-2 z-40 py-3 rounded-full absolute top-0 right-0 font-bold flex justify-center items-center flex-col">Play</button>
