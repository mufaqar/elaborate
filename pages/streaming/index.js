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
import NewsBox from '../../components/newsBox';

export default function Slug({ url }) {

  const router = useRouter();
  var link = router.query['streaming'];
  var title = router.query['title'];
  var title2 = router.query['title2'];

  var settings = {
    dots: false,
    infinite: false,
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
            <div className="overflow-hidden relative w-full group">
              <Link
                href={`/streaming?streaming=${url}&title=${title}&title2=${title2}`}
              >
                <div className="video-container">
                  <iframe
                    src={`https://www.youtube.com/embed/${link}?controls=1&autoplay=1&mute=1&playsinline=1&loop=1`}
                  ></iframe>
                </div>
              </Link>
              <div
                className={`border-t-[13px] border-[#EBFD00] absolute bottom-[26px] left-0 right-0 ${link == url ? '' : 'lg:hidden'}`}
              >
                <div className="bg-[#F2F2F2] border-t border-[#707070]">
                  <div
                    className={`flex h-[47px] justify-between ${link == url && 'bg-[#414141]'
                      }`}
                  >
                    <Link
                      href={`/streaming?streaming=${url}&title=${title}&title2=${title2}`}
                      className={`text-xs leading-4 px-2 pt-[6px] pb-[6px] uppercase h-full items-center inline-flex border-l border-[#707070]  ${link == url && 'text-[#F2F2F2]'}`}
                    >
                      <span className="HelveticaNowText_Bold"> {title}</span> -{' '}
                      <span className="HelveticaNowText_Regular italic"> {title2}</span>
                    </Link>
                    <p
                      className={`text-xs leading-4 px-2 pt-[6px] pb-[6px] uppercase h-full items-center inline-flex NeueHaasRoman border-x border-[#707070]  ${link == url && 'text-[#EBFF00]'
                        }`}
                    >
                      {s}
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="flex px-3 justify-between bg-[#F2F2F2] absolute transition duration-200 ease-in-out  left-0 right-0 md:-bottom- 24 bottom-24 md:group-hover:bottom-24 ">
          <Link
            href={`/streaming?streaming=${url}&title=${title}`}
            className="text-xs leading-[16px] py-2 uppercase text-blue-600 NeueHaasRoman"
          >
            {title}
          </Link>
          <p className="text-xs leading-[16px] border-l border-[#707070] px-2 py-2 uppercase text-red-600 NeueHaasRoman">
            {ltime}
          </p>
        </div> */}
            </div>
            <div className='navigation absolute lg:hidden block top-[65%] z-50'>
              <button onClick={() => PrevSlide(item)} className='text-2xl font-bold text-[#EBFF00] Prevbtn'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLlinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button onClick={() => NextSlide(item)} className='text-2xl font-bold text-[#EBFF00] Nextbtn'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </>
        ))}
      </Slider>
    </>

  );
}

