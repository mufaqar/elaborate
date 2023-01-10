import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import img_url from '../../public/images/dummy.jpg';
import { useRouter } from 'next/router';

export default function Slug() {
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
        <div className="flex px-3 absolute bottom-6 left-0 right-0 bg-white">
          <p className="text-xs leading-4 px-2 pt-3 pb-3 uppercase NeueHaasRoman">
            {title}
          </p>
          <p className="text-xs leading-4 border-l border-black/80 px-2 pt-2.5 pb-2.5 uppercase NeueHaasRoman">
            {s}
          </p>
        </div>
      </div>
    </section>
  );
}
