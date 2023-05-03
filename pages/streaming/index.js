import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import Cam from '../../public/images/cam.svg';
import { useRouter } from 'next/router';
import Color_Img from '../../public/images/color-img.png';
import Play from '../../public/images/play.png';
import Stop from '../../public/images/stop.png';
import Slider from "react-slick";
import { videoData } from '../../public/videos.data';

export default function Slug({ url }) {
  const router = useRouter();
  var link = router.query['streaming'];
  var title = router.query['title'];
  var title2 = router.query['title2'];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  //console.log(link);

  let s = new Date().toLocaleTimeString();

  const [audio, setAudio] = useState(false);
  const slider = React.useRef(null);

  const PrevSlide = (item) => {
    router.push(`/streaming?streaming=${item?.url}&title=${item.title}&title2=${item.title2}`)
    slider?.current?.slickPrev()
  }
  const NextSlide = (item) => {
    router.push(`/streaming?streaming=${item?.url}&title=${item.title}&title2=${item.title2}`)
    slider?.current?.slickNext()
  }

  return (
    <>
      <Slider ref={slider} {...settings}>
        {videoData.map((item, i) => (
          <>
            <section key={i} className="overflow-hidden">
              <div className="relative video-container">
                <iframe
                  src={`https://www.youtube.com/embed/${item.url}?controls=1&autoplay=1&mute=1&playsinline=1&loop=1`}
                ></iframe>
              </div>
            </section>
            <div className='navigation absolute md:top-[65%] top-[70%]'>
              <button onClick={() => PrevSlide(item)} className='text-2xl font-bold text-[#EBFF00] Prevbtn'>&lt;</button>
              <button onClick={() => NextSlide(item)} className='text-2xl font-bold text-[#EBFF00] Nextbtn'>&gt;</button>
            </div>
          </>
        ))}
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
      </Slider>
    </>

  );
}

