import Image from 'next/image';
import Cam_dark from '../public/images/cam-dark.png';
import Link from 'next/link';
import About_Us from '../public/images/about-us.svg'

export default function About() {
  return (
    <section className="">
      <div className="container mx-auto text-center w-full h-full ">
      <Image src={About_Us} alt="" className='m-auto object-cover h-full w-full' />
        {/* <p className="mb-4 text-center">
          Elaborate Walks™ is an online repository of on course happenings
          experienced by the world wide community of golf goers.
        </p>
        <p className="mb-4 text-center">
          Watch and listen as the greatest game ever played happens in real
          time.
        </p>
        <p className="mb-4 text-center">Designed and Created by Reid Duncan.</p>
        <p className="my-6 bg-[#484647] w-fit mx-auto text-white">
          ELABORATEWALKS.COM
        </p>
        <Image src={Cam_dark} alt="" className="mx-auto" />

        <div className="my-8">
          <p className="mb-4 max-w-[408px] mx-auto text-center">
            For general questions or info on how to have your golf course
            featured on Elaborate Walks please email:
          </p>
          <Link
            href="mailto:reidmduncan@gmail.com"
            target="_blank"
            className="bg-[#484647] text-white"
          >
            reidmduncan@gmail.com
          </Link>
        </div>
        <div>
          <p className="mb-4 text-center">Instagram:</p>
          <Link href="#" target="_blank" className="bg-[#484647] text-white">
            @elaboratewalks
          </Link>
        </div> */}
      </div>
    </section>
  );
}
