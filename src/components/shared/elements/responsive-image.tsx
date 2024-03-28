"use client";
import Image from "next/image";
import { ResponsiveImageProps } from "@/lib/type";

export default function ResponsiveImage({ alt, mobile, tablet, desktop }: ResponsiveImageProps) {
    return (
        <>
            <Image 
                src={mobile.src} 
                alt={alt} 
                width={mobile.width} 
                height={mobile.height}
                quality={100}
                priority 
                className="w-full md:hidden"
            />
            <Image 
                src={tablet.src} 
                alt={alt} 
                width={tablet.width} 
                height={tablet.height}
                quality={100}
                priority 
                className="w-full hidden md:block lg:hidden"
            />
            <Image 
                src={desktop.src} 
                alt={alt} 
                width={desktop.width} 
                height={desktop.height}
                quality={100}
                priority  
                className="w-full hidden lg:block"
            />
        </>
    )
}