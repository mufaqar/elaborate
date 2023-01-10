import Layout from "../components/layout";
import NewsBox from "../components/newsBox";
import {videoData} from "../public/videos.data"

export default function Home() {
  return (
    <section className="">
      <div className="grid md:grid-cols-4 grid-cols-1 min-h-full">
      {
        videoData.map((item, i)=>(
          <NewsBox url={item.url} time={item.time} id={i+1} title={item.title} key={i}/>
        ))
      }
      </div>
    </section>
  )
}
