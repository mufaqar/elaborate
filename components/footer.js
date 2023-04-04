import React from 'react';
import Link from 'next/link';
import LiveScroll from './liveScroll';
import { videoData } from '../public/videos.data';
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();
  var link = router.query['streaming'];
  var title = router.query['title'];
  let s = new Date().toLocaleTimeString();
  return (
    <footer className="fixed left-0 right-0 bottom-0 border-t-[13px] border-[#EBFF00]">
      <div
        className={`hidden md:grid md:grid-cols-4 grid-cols-1  border-t border-[#707070]`}
      >
        {videoData.map((item, i) => (
          <div key={i} className="bg-[#F2F2F2]">
            <div
              className={`flex h-full justify-between ${
                link == item.url && 'bg-[#414141]'
              }`}
            >
              <Link
                href={`/streaming?streaming=${item.url}&title=${item.title}`}
                className={`text-xs leading-4 px-2 pt-[8px] pb-[8px] uppercase NeueHaasRoman border-l border-[#707070] [&:nth-child(1)>p]:border-l-0 ${
                  link == item.url && 'text-[#F2F2F2]'
                }`}
              >
                <span className="font-bold"> {item.title}</span> - {item.title}
              </Link>
              <p
                className={`text-xs leading-4 px-2 pt-[8px] pb-[8px] uppercase NeueHaasRoman border-l border-[#707070] ${
                  link == item.url && 'text-[#EBFF00]'
                }`}
              >
                {s}
              </p>
            </div>
          </div>
        ))}
      </div>
      <LiveScroll Custom_bg="bg-[#F2F2F2]" Text_color="text-[#7B7B7B]" />
    </footer>
  );
}
