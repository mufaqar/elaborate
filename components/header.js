import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LiveScroll from './liveScroll';
import Logo from '../public/logo.png';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <Head>
        <title>Elaborate Walks - Live Streaming</title>
        <meta
          name="description"
          content="Generated by elaborate Walks - Live Streaming"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex  items-center">
        {/* mobile Menu Starts */}
        <div
          className={`md:hidden absolute top-0 left-0 h-screen w-screen z-50 bg-[#7B7B7B] px-4 transform ${open ? '-translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out  `}
        >
          <div
            className="flex items-center justify-center mx-auto mt-5 bg-[#7B7B7B]"
            onClick={() => setOpen(false)}
          >
            {' '}
            {/*logo container*/}
            <Link
              href="/"
              className="text-xl font-semibold flex justify-center items-center text-white"
            >
              <Image src={Logo} alt="" className="w-2/3" />
            </Link>
          </div>
          <div className="flex flex-col gap-10 text-white text-base mt-16 NeueHaasMedium">
            <div onClick={() => setOpen(false)}>
              <Link href="/">Index</Link>
            </div>
            <div onClick={() => setOpen(false)}>
              <Link href="/about">About</Link>
            </div>
            <div onClick={() => setOpen(false)}>
              <Link href="/stories">Stories</Link>
            </div>
            <div onClick={() => setOpen(false)}>
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
        {/* mobile Menu End*/}

        {/* Main Menu Starts*/}
        <div className="w-full flex flex-col justify-between items-center">
          <div className="hidden md:flex justify-between w-full text-sm leading-[14px] font-normal text-white NeueHaasMedium bg-[#7B7B7B]  px-4 py-2">
            <Link href="/">ELBORTEWALKS.COM</Link>
            <Link href="/about">About</Link>
            <Link href="/stories">Fetures</Link>
            <p>All Rights Reserved</p>
          </div>
          <div className='md:bg-transparent bg-[#7B7B7B] w-full px-4 py-3 flex flex-row justify-between items-center'>
            <div
              className={`z-50 flex relative w-8 h-6 flex-col justify-between items-center md:hidden ${open ? 'mt-[10px]' : 'mt-0'
                }`}
              onClick={() => {
                setOpen(!open);
              }}
            >
              {/* hamburger button */}
              <span
                className={`h-[3px] w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? 'rotate-45 translate-y-2.5 bg-white' : ''
                  }`}
              />
              <span
                className={`h-[3px] w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-2.5 bg-white' : ''
                  }`}
              />
            </div>
            <div className="md:w-full w-8/12 mx-auto flex items-center md:justify-center justify-end">
              <Link href="/" className="justify-center flex">
                <Image src={Logo} alt="" className="md:w-full w-2/3" />
              </Link>
            </div>
          </div>
        </div>
        {/* mobile Menu End*/}
      </nav>

      {/* <LiveScroll Custom_bg="bg-white" Text_color="text-black" /> */}
    </header>
  );
}
