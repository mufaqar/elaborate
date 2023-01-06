import React from 'react';
import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {
    return (
        <main className='min-h-screen relative grid items-center'>
            <Header />
            <section className='fixed 2xl:top-[5rem] xl-[5rem] md:top-[4.5rem] sm:top-[6rem] top-[4.4rem] bottom-0 left-0 right-0 '>
                {children}
            </section>
            <Footer />
        </main>
    )
}
