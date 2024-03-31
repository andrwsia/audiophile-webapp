"use client"
import Image from "next/image"
import Link from "next/link"
import ButtonTwoAlt from "../shared/elements/buttons/button-2-alt"
import LargeImageSpeakerZX9 from "/public/assets/home/desktop/image-speaker-zx9.png"
import ImageSpeakerZX9 from "/public/assets/home/tablet/image-speaker-zx9.png"
import PatternCircles from "../shared/elements/design/pattern-circles"
import { products } from "@/lib/products-data"

// Function to get the href of a product by its id
function getHrefById(productId: string) {
    // Find the product with the given id
    const product = products.find(prod => prod.id === productId);

    // If product is found, return its href, otherwise return null
    return product ? product.href : '';
}

export default function V1ProductBanner() {
    const productId = 'zx9-speaker';
    const href = getHrefById(productId);

    return (
        <>
            <section id="v1-product-banner" className="grid-container flow-spacing-1">
                <div className="v1-product-banner-grid | overflow-hidden rounded-md pt-12 md:pt-16 px-4 md:px-8">
                    <div className="v1-pbg-area-1 | relative flex justify-center items-end">
                        <Image
                            className="z-10 hidden block-md relative -bottom-5-md"
                            alt="Speaker ZX9"
                            src={LargeImageSpeakerZX9}
                            priority
                            quality={100}
                            // objectFit="contain"
                            width={400}
                        />
                        <Image
                            className="z-10 block hidden-md"
                            alt="Speaker ZX9"
                            src={ImageSpeakerZX9}
                            priority
                            quality={100}
                            // objectFit="contain"
                            width={150}
                        />
                        <div className="product-img-decoration"></div>
                    </div>
                    <div className="v1-pbg-area-2 | z-10 flex flex-col items-center relative -bottom-5-md">
                        <div className="v1-pbg-content">
                            <h1 className="h1-light | text-center text-left-md pb-8 pt-4">ZX9 <br /> Speaker</h1>
                            <p className="body-text-light | text-center text-left-md pb-8 max-w-80">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                            <div className="text-center text-left-md pb-8">
                                <Link href={href}>
                                    <ButtonTwoAlt />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 