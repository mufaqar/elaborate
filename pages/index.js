import Layout from "../components/layout";
import NewsBox from "../components/newsBox";

export default function Home() {
  return (
    <section className="">
      <div className="grid md:grid-cols-4 grid-cols-1 min-h-full">
        <NewsBox />
        <NewsBox />
        <NewsBox />
        <NewsBox />
      </div>
    </section>
  )
}
