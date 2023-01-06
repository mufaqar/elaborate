import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img_url from '../public/images/dummy.jpg';

export default function NewsBox() {
  return (
    <div className="min-h-full md:border-l border-black relative group">     
      <div className="h-full">
         <iframe className="w-full h-full aspect-[9/12] object-cover" src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
        {/* <Image src={img_url} alt="" className="object-fill min-h-full" /> */}
      </div>
      <div className="flex px-3 justify-between h-[36px] bg-white absolute left-0 right-0 md:-bottom-6 md:group-hover:bottom-6 -bottom-10 group-hover:bottom-0">
        <Link href="/news" className="text-xs leading-[16px] py-2 uppercase text-blue-600">
          Victoria, Australia
        </Link>
        <p className="text-xs leading-[16px] border-l border-black/80 px-2 py-2 uppercase text-red-600 ">
          12:31 PM
        </p>
      </div>
    </div>
  );
}
