import React from 'react';
import NewsBox from '../components/newsBox';
import { videoData } from '../public/videos.data';
import Slider from "react-slick";
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const slider = React.useRef(null);

  const PrevSlide = (item) => {
    router.push(`/streaming?streaming=${item?.url}&title=${item.title}&title2=${item.title2}`)
    slider?.current?.slickPrev()
  }
  const NextSlide = (item) => {
    router.push(`/streaming?streaming=${item?.url}&title=${item.title}&title2=${item.title2}`)
    slider?.current?.slickNext()
  }

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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

  return (
    <Slider ref={slider} {...settings}>
      {videoData.map((item, i) => (
        <>
          <NewsBox
            url={item.url}
            id={i + 1}
            title={item.title}
            title2={item.title2}
            key={i}
          />
          <div className='navigation absolute lg:hidden block top-[65%] z-20'>
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
  );
}
