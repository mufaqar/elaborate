import Image from 'next/image';
import NewsBox from '../components/newsBox';
import { videoData } from '../public/videos.data';
import Play from '../public/images/play.png';

export default function Home() {
  return (
    <section className="relative">
      <div className="grid md:grid-cols-4 grid-cols-1 min-h-full">
        {videoData.map((item, i) => (
          <NewsBox
            url={item.url}
            id={i + 1}
            title={item.title}
            key={i}
          />
        ))}
      </div>
      <div className='absolute md:bottom-28 md:top-auto top-36 left-5 md:right-auto right-5 flex items-center'>
        <Image src={Play} alt="" className='bg-[#EBFD00] object-contain p-3 h-9 w-9' />
        <p className="text-xs leading-4 px-2 pt-2 pb-2 uppercase NeueHaasRoman bg-[#F2F2F2] h-9 w-fit">
          Field Recordings from Augusta National Golf Club
        </p>
      </div>
    </section>
  );
}
