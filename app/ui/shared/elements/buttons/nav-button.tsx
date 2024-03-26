"use client"
import React, { useState } from 'react';

interface NavButtonProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function NavButton({ isOpen, setIsOpen }: NavButtonProps) {
    const toggleNavIcon = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div id="nav-icon" className={isOpen ? 'open' : ''} onClick={toggleNavIcon}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}