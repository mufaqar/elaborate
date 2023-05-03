import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import Cam from '../../public/images/cam.svg';
import { useRouter } from 'next/router';
import Color_Img from '../../public/images/color-img.png';
import Play from '../../public/images/play.png';
import Stop from '../../public/images/stop.png';

export default function Slug({ url }) {
  const router = useRouter();
  var link = router.query['streaming'];
  var title = router.query['title'];
  var title2 = router.query['title2'];

  //console.log(link);

  let s = new Date().toLocaleTimeString();

  const [audio, setAudio] = useState(false);

  return (
    <section className="overflow-hidden">
      <div className="relative video-container">
        <iframe
          src={`https://www.youtube.com/embed/${link}?controls=1&autoplay=1&mute=1&playsinline=1&loop=1`}
        ></iframe>
        
        {/* <div className={` grid md:grid-cols-4 grid-cols-1 absolute bottom-6 left-0 right-0 `}>
          {videoData.map((item, i) => (
            <div key={i} className="bg-[#F2F2F2]">
              <div className={`flex h-full justify-between ${link == item.url && 'bg-[#414141]'}`}>
                <Link href={`/streaming?streaming=${item.url}&title=${item.title}?id=${i}`}
                  className={`text-xs leading-4 px-2 pt-3 pb-3 uppercase NeueHaasRoman border-l border-[#707070] [&:nth-child(1)>p]:border-l-0 ${link == item.url && 'text-[#F2F2F2]'}`}>
                  {item.title}
                </Link>
                <p className={`text-xs leading-4 px-2 pt-3 pb-3 uppercase NeueHaasRoman border-l border-[#707070] ${link == item.url && 'text-[#EBFF00]'}`}>
                  {s}
                </p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
