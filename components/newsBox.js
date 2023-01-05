import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img_url from '../public/images/dummy.jpg';

export default function NewsBox() {
  return (
    <div className="min-h-full md:border-l border-black relative">
      {/* <iframe className="w-full aspect-[9/12] object-cover" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      <div className="h-full">
        <Image src={img_url} alt="" className="object-fill min-h-full" />
      </div>
      <div className="flex px-3 justify-between h-[40px]  absolute left-0 right-0 bottom-6">
        <Link href="/news" className="text-xs leading-[16px] py-2 uppercase">
          Victoria, Australia
        </Link>
        <p className="text-xs leading-[16px] border-l border-black/80 px-2 py-2 uppercase">
          12:31 PM
        </p>
      </div>
    </div>
  );
}
