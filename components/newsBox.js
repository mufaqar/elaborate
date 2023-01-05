import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img_url from '../public/images/dummy.jpg'

export default function NewsBox() {
    return (
        <div className='min-h-full md:border-l border-black'>
            {/* <video
                autoPlay="autoplay"
                muted
                preload="auto"
                loop
                className="w-full aspect-[9/12] object-cover"
            >
                <source src="https://youtu.be/dQw4w9WgXcQ" />
            </video> */}

            <iframe className="w-full aspect-[9/12] object-cover" src="https://www.youtube.com/dQw4w9WgXcQ"></iframe>

            <Link href="#">
                <Image src={img_url} alt="" className='object-fill' />
            </Link>

            <div className='flex px-3 justify-between '>
                <Link href="#" className='text-lg leading-7 py-2 uppercase'>
                    Victoria, Australia
                </Link>
                <p className='text-lg leading-7 border-l border-black/80 px-2 py-2 uppercase'>
                    12:31 PM
                </p>
            </div>
        </div >
    )
}
