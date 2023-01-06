import Image from "next/image";
import Link from "next/link";
import React from "react";
import img_url from "../public/images/dummy.jpg";

export default function NewsBox() {
  return (
    <div className="min-h-full md:border-l cursor-pointer border-black relative ">
      <div className="h-screen overflow-hidden relative w-full group">
        <div class="video-container">
          <iframe src="https://www.youtube.com/embed/Yj2iELI6OeI?controls=0&autoplay=1&mute=1&playsinline=1&loop=1&playlist=Yj2iELI6OeI"></iframe>
        </div>
        <div className="flex px-3 justify-between h-[36px] bg-white absolute transition duration-200 ease-in-out  left-0 right-0 md:-bottom-6 -bottom-10 group-hover:bottom-[6rem]">
          <Link
            href="/news"
            className="text-xs leading-[16px] py-2 uppercase text-blue-600 NeueHaasRoman"
          >
            Victoria, Australia
          </Link>
          <p className="text-xs leading-[16px] border-l border-black/80 px-2 py-2 uppercase text-red-600 NeueHaasRoman">
            12:31 PM
          </p>
        </div>
      </div>
    </div>
  );
}

