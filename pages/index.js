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
            title2={item.title2}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}
