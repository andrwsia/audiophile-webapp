'use client';
import Link from "next/link";
import { navLinks } from "@/app/lib/placeholder-data";
import { shareLinks } from "@/app/lib/placeholder-data";
import Logo from "../elements/logo";

export default function Footer() {

    return (
        <>
            <footer id="footer" className="grid-container">
                <div className="footer-grid | relative py-8 md:py-12">
                <div className='w-28 h-1 bg-orange-1 absolute top-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0'></div>
                    <div className="footer-logo | flex justify-center md:justify-start">
                        <Link href={'/'}>
                            <Logo />
                        </Link>
                    </div>
                    <div className="footer-nav | flex justify-center md:justify-start lg:justify-end">
                        <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
                            {
                                navLinks.map((item, index) => {
                                    return (
                                        <li key={index} className='sub-title-light | text-center md:text-left'>
                                            <Link 
                                                href={item.href}  
                                            >
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="footer-description | flex flex-col items-center md:items-start">
                        <p className="body-text-alt | text-center md:text-left">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                    </div>
                    <div className="footer-shareLinks | flex items-end justify-center md:justify-end">
                        <ul className="flex gap-6">
                            {
                                shareLinks.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a 
                                                href={item.href} 
                                                className='svg-icon | w-6 h-6 block' 
                                                style={{maskImage: `url(${item.icon})`} as React.CSSProperties}
                                            >
                                                <span className='hidden'>{item.title}</span>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="footer-copyright | flex flex-col items-center md:items-start">
                        <p className="body-text-alt | font-bold text-center md:text-left">Copyright 2021. All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}