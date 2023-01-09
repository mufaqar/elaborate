import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import img_url from '../../public/images/dummy.jpg';

export default function Slug() {
  return (
    <section className="relative h-sccreen">
      {/* <iframe className="w-full md:aspect-[12/4] aspect-[9/12] object-cover" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      <div className='relative h-[90vh]'>
        <Image src={img_url} alt="" className='object-cover h-full' />
      </div>
      <div className='flex px-3 absolute bottom-0 left-0 right-0 bg-white'>
        <p className='text-lg leading-7 px-2 pt-3 pb-9 uppercase NeueHaasRoman'>
          Victoria, Australia
        </p>
        <p className='text-lg leading-7 border-l border-black/80 px-2 pt-3 pb-9 uppercase NeueHaasRoman'>
          12:31 PM
        </p>
      </div>
    </section>
  )
}
