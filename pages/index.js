import Layout from "../components/layout";
import NewsBox from "../components/newsBox";

export default function Home() {
  return (
    <section className="h-full md:pt-0 pt-[112px] md:pb-0 pb-[45px]">
      <div className="grid md:grid-cols-4 grid-cols-1 min-h-full">
        <NewsBox />
        <NewsBox />
        <NewsBox />
        <NewsBox />
      </div>
    </section>
  )
}
