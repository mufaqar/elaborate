import React, { useState } from 'react';
import Link from 'next/link';
import LiveScroll from './liveScroll';
import { videoData } from '../public/videos.data';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Cam from '../public/images/cam.svg';
import Play from '../public/images/play.png';
import Stop from '../public/images/stop.png';

export default function Footer({ url }) {
  const router = useRouter();
  var link = router.query['streaming'];
  var title = router.query['title'];
  let s = new Date().toLocaleTimeString();
  const [audio, setAudio] = useState(false);
  return (
      <footer className="fixed left-0 right-0 bottom-0 border-t-[13px] border-[#EBFD00]">
        <div className="absolute md:bottom-24 bottom-20 left-4 md:right-auto right-4 max-w-[345px] mx-auto">
          <div className={`${link == url ? 'hidden' : 'block'} mx-auto`}>
            <Image src={Cam} alt="" className='mx-auto'/>
            <div className="flex items-center my-3 justify-between">
              <div className="flex border border-white mx-auto">
                <p className=" text-xs leading-4 px-[6px] pr-[16px] NeueHaasRoman bg-[#F2F2F2] text-black min-w-[212px]  ">
                  {title}
                </p>
                <p className=" text-xs leading-4 uppercase text-right px-[2px] NeueHaasRoman bg-[#484647] text-white min-w-[90px]   ">
                  {s}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center border border-black/50">
            <div className='bg-[#EBFD00] md:p-3 md:h-9 md:w-9 h-7 w-7 p-2 cursor-pointer'
              onClick={() => {
                setAudio(!audio);
              }}
            >
              {audio ? (
                <Image
                  src={Stop}
                  alt=""
                  className="object-contain"
                />) :
                (
                  <Image
                    src={Play}
                    alt=""
                    className="object-contain"
                  />
                )}
            </div>
            <p className="text-xs leading-5 pt-2 pb-2 md:px-[10px] pl-[6px] pr-0 NeueHaasRoman bg-[#F2F2F2] md:h-9 h-7 w-full">
              Field Recordings from Augusta National Golf Club
            </p>
          </div>
        </div>
        <div
          className={`hidden md:grid md:grid-cols-4 grid-cols-1  border-t border-[#707070]`}
        >
          {videoData.map((item, i) => (
            <div key={i} className="bg-[#F2F2F2]">
              <div
                className={`flex h-full justify-between ${link == item.url && 'bg-[#414141]'
                  }`}
              >
                <Link
                  href={`/streaming?streaming=${item.url}&title=${item.title}&title2=${item.title2}`}
                  className={`text-xs leading-4 px-2 pt-[6px] pb-[6px] uppercase border-l border-[#707070] [&:nth-child(1)>p]:border-l-0
                ${link == item.url && 'text-[#F2F2F2]'}`}
                >
                  <span className="HelveticaNowText_Bold"> {item.title}</span> -{' '}
                  <span className="HelveticaNowText_Regular italic"> {item.title2}</span>
                </Link>
                <p
                  className={`text-xs leading-4 px-2 pt-[6px] pb-[6px] uppercase NeueHaasRoman border-l border-[#707070] ${link == item.url && 'text-[#EBFF00]'
                    }`}
                >
                  {s}
                </p>
              </div>
            </div>
          ))}
        </div>
        <LiveScroll Custom_bg="bg-[#F2F2F2]" Text_color="text-[#7B7B7B]" />
      </footer>
  );
}
