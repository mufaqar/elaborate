import React from 'react';
import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {
    return (
        <main className=''>
            <Header />
            <section className='md:overflow-y-hidden overflow-y-scroll -z-10'>
                {children}
            </section>
            <Footer />
        </main>
    )
}
