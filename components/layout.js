import React from 'react';
import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {
    return (
        <main className='min-h-screen relative grid items-center'>
            <Header />
            <section className='md:fixed md:top-[6.6rem] md:bottom-0 md:left-0 md:right-0 grid items-center'>
                {children}
            </section>
            <Footer />
        </main>
    )
}
