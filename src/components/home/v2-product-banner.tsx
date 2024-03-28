"use client"
import Image from 'next/image'
import ButtonTwo from "../shared/elements/buttons/button-2"
import LargeImageSpeakerZX7 from "/public/assets/home/desktop/image-speaker-zx7.jpg"
import MediumImageSpeakerZX7 from "/public/assets/home/tablet/image-speaker-zx7.jpg"
import SmallImageSpeakerZX7 from "/public/assets/home/mobile/image-speaker-zx7.jpg"

export default function V2ProductBanner() {
    return (
        <>
            <section id="v2-product-banner" className="grid-container flow-spacing-1">
                <div className="v2-product-banner-grid | rounded-md overflow-hidden">
                    <div className='v2-pbg-area-1 | flex flex-col gap-6 justify-center items-start px-8 md:px-16  2xl:px-24'>
                        <h1 className="h4-dark" >ZX7 SPEAKER</h1>
                        <ButtonTwo />
                    </div>
                    <div className='v2-pbg-area-2'>
                        <Image
                            className='w-full hidden lg:block'
                            alt="Speaker ZX7"
                            src={LargeImageSpeakerZX7}
                            priority
                            quality={100}
                            width={1110}
                            height={320}
                        />
                        <Image
                            className='w-full hidden md:block lg:hidden'
                            alt="Speaker ZX7"
                            src={MediumImageSpeakerZX7}
                            priority
                            quality={100}
                            width={690}
                            height={320}
                        />
                        <Image
                            className='w-full block md:hidden'
                            alt="Speaker ZX7"
                            src={SmallImageSpeakerZX7}
                            priority
                            quality={100}
                            width={655}
                            height={320}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}