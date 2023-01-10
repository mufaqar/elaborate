import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import img_url from '../../public/images/dummy.jpg';

export default function Slug() {
  return (
    <section className="relative h-sccreen">
      <div className='relative h-[90vh]'>
        <iframe
          src={`https://www.youtube.com/embed/DbLMSFvB2Og?controls=1&autoplay=1&mute=1&playsinline=1&loop=1`}
        ></iframe>
      </div>
      <div className='flex px-3 absolute bottom-0 left-0 right-0 bg-white'>
        <p className='text-xs leading-4 px-2 pt-3 pb-3 uppercase NeueHaasRoman'>
          Victoria, Australia
        </p>
        <p className='text-xs leading-4 border-l border-black/80 px-2 pt-2.5 pb-2.5 uppercase NeueHaasRoman'>
          12:31 PM
        </p>
      </div>
    </section>
  )
}
