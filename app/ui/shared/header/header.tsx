'use client';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { navLinks } from "@/app/lib/placeholder-data";
import Logo from "../elements/logo";
import CartIcon from "@/public/assets/shared/desktop/icon-cart.svg";
import NavButton from '../elements/buttons/nav-button';

export default function Header() {
    const cartIcon = { icon: CartIcon.src };

    // const [isNavVisible, setIsNavVisible] = useState(false);
    const [isNavButtonOpen, setIsNavButtonOpen] = useState(false);

    return (
        <>
            <header id="header" className=" | fixed z-20 w-full top-0 left-0">
                <nav className={`header-grid relative | items-center |`}>
                    
                    <div className='w-full h-1 header-border-bottom absolute bottom-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0'></div>

                    <div className=" lg:hidden">
                        <NavButton isOpen={isNavButtonOpen} setIsOpen={setIsNavButtonOpen}/>
                    </div>
                    <div className="header-logo | py-8 | flex justify-center lg:justify-start">
                        <Link href={'/'}>
                            <Logo />
                        </Link>
                    </div>
                    <div className="header-nav | hidden lg:block">
                        <ul className="flex flex-row justify-center gap-6">
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
                    <div className="header-cart | flex justify-end">
                        <Link href={"/"}
                            className='svg-icon | w-6 h-6 block'
                            style={{ maskImage: `url(${cartIcon.icon})` } as React.CSSProperties}
                        >
                        </Link>
                    </div>
                </nav>
                {/* {isNavButtonOpen && ( */}
                <nav className={`header-nav-mobile_close ${isNavButtonOpen ? 'header-nav-mobile_open' : ''} | py-6`}>
                {/* <nav className='header-nav-mobile | py-6'> */}
                        <ul className="header-nav-mobile_menu | flex flex-col justify-center gap-6">
                            {
                                navLinks.map((item, index) => {
                                    return (
                                        <li key={index} className='sub-title-dark | text-center'>
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
                    </nav>
                {/* )} */}
            </header>
        </>
    )
}