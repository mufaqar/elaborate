import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Cam from '../../public/images/cam.png';
import { useRouter } from 'next/router';
import { videoData } from '../../public/videos.data';

export default function Slug({ url }) {
  const router = useRouter();
  var link = router.query['streaming'];
  var title = router.query['title'];

  let s = new Date().toLocaleTimeString();

  return (
    <section className="overflow-hidden">
      <div className="relative video-container">
        <iframe
          src={`https://www.youtube.com/embed/${link}?controls=1&autoplay=1&mute=1&playsinline=1&loop=1`}
        ></iframe>
        <div className='absolute bottom-24 left-5 '>
          <Image src={Cam} alt="" />
          <p className="mt-5 text-xs leading-4 px-2 pt-3 pb-3 uppercase NeueHaasRoman bg-[#F2F2F2]">
            {title}<br/>
            {s}
          </p>
        </div>
        <div className={` grid md:grid-cols-4 grid-cols-1 absolute bottom-6 left-0 right-0 `}>
          {videoData.map((item, i) => (
            <div key={i}>
              <div className={`flex bg-[#F2F2F2] h-full`}>
                <Link href={`/streaming?streaming=${item.url}&title=${item.title}`}
                  className="text-xs leading-4 px-2 pt-3 pb-3 uppercase NeueHaasRoman border-l border-[#707070] [&:nth-child(1)>p]:border-l-0">
                  {item.title}
                </Link>
                <p className="text-xs leading-4 px-2 pt-3 pb-3 uppercase NeueHaasRoman border-l border-[#707070]">
                  {s}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
