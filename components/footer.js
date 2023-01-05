import React from 'react';

export default function Footer() {
    return (
        <footer className='border-y border-black fixed left-0 right-0 bottom-0 bg-zinc-500 py-2'>
            <div className="overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap">
                    <span className="text-base text-white mx-4">Marquee Item 1</span>
                    <span className="text-base text-red-600 mx-4">LIVE</span>
                </div>
            </div>
        </footer>
    )
}
