import React from 'react';
import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {
    return (
        <main className='min-h-screen relative grid items-center'>
            <Header />
            <section className='md:fixed md:top-[7rem] md:bottom-auto md:left-0 md:right-0 grid items-center md:pt-0 pt-[112px] md:pb-0 pb-[45px]'>
                {children}
            </section>
            <Footer />
        </main>
    )
}
