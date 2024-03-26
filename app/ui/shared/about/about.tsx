"use client"
import Image from "next/image";
import LargeAboutImage from "@/public/assets/shared/desktop/image-best-gear.jpg";
import MediumAboutImage from "@/public/assets/shared/tablet/image-best-gear.jpg";
import SmallAboutImage from "@/public/assets/shared/mobile/image-best-gear.jpg";

export default function About() {
    return (
        <section id="about" className="grid-container flow-spacing-2">
            <div className="about-grid">
                <div className="flex flex-col justify-center items-center lg:items-start">
                    <h2 className="h2-dark text-balance| pb-8 max-w-md text-center lg:text-left">Bringing you the <span className="orange-1">best</span> audio gear</h2>
                    <p className="body-text-alt text-balance| max-w-md text-center lg:text-left">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
                <div className="overflow-hidden rounded-md">
                    <Image 
                        className="w-full hidden lg:block"
                        alt="About Image"
                        src={LargeAboutImage}
                        priority
                        quality={100}
                        objectFit="cover"
                        width={540}
                        height={588}
                    />
                    <Image 
                        className="w-full hidden sm:block lg:hidden"
                        alt="About Image"
                        src={MediumAboutImage}
                        priority
                        quality={100}
                        objectFit="cover"
                        width={689}
                        height={300}
                    />
                    <Image 
                        className="w-full block sm:hidden"
                        alt="About Image"
                        src={SmallAboutImage}
                        priority
                        quality={100}
                        objectFit="cover"
                        width={327}
                        height={300}
                    />
                </div>
            </div>
        </section>
    )
}