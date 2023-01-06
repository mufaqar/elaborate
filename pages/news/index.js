import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import img_url from '../../public/images/dummy.jpg';

export default function Slug() {
  return (
    <section className="md:pt-0 pt-[75px] md:pb-0 pb-[45px]">
      {/* <iframe className="w-full md:aspect-[12/4] aspect-[9/12] object-cover" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      <div className='md:h-[78vh] h-[97vh]'>
        <Image src={img_url} alt="" className='h-full object-cover' />
      </div>
      <div className='flex px-3 '>
        <p className='text-lg leading-7 px-2 py-3 uppercase NeueHaasRoman'>
          Victoria, Australia
        </p>
        <p className='text-lg leading-7 border-l border-black/80 px-2 py-3 uppercase NeueHaasRoman'>
          12:31 PM
        </p>
      </div>
    </section>
  )
}
