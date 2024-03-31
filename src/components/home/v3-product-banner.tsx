"use client"
import Image from "next/image";
import Link from "next/link"
import ButtonTwo from "../shared/elements/buttons/button-2";
import LargeImageEarphonesYX1 from "/public/assets/home/desktop/image-earphones-yx1.jpg";
import MediumImageEarphonesYX1 from "/public/assets/home/tablet/image-earphones-yx1.jpg";
import SmallImageEarphonesYX1 from "/public/assets/home/mobile/image-earphones-yx1.jpg";
import { products } from "@/lib/products-data"

// Function to get the href of a product by its id
function getHrefById(productId: string) {
    // Find the product with the given id
    const product = products.find(prod => prod.id === productId);

    // If product is found, return its href, otherwise return null
    return product ? product.href : '';
}

export default function V3ProductBanner() {
    const productId = 'yx1-earphones';
    const href = getHrefById(productId);

    return (
        <>
            <section id="v3-product-banner" className="grid-container flow-spacing-3">
                <div className="v3-product-banner-grid | ">
                    <div className="overflow-hidden rounded-md">
                        <Image 
                            className="w-full hidden lg:block"
                            alt="Earphones YX1"
                            src={LargeImageEarphonesYX1}
                            priority
                            quality={100}
                            // objectFit="contain"
                            width={540}
                            height={320}
                        />
                        <Image 
                            className="w-full hidden lg:hidden md:block"
                            alt="Earphones YX1"
                            src={MediumImageEarphonesYX1}
                            priority
                            quality={100}
                            // objectFit="contain"
                            width={339}
                            height={320}
                        />
                        <Image 
                            className="w-full block md:hidden"
                            alt="Earphones YX1"
                            src={SmallImageEarphonesYX1}
                            priority
                            quality={100}
                            // objectFit="contain"
                            width={327}
                            height={200}
                        />
                    </div>
                    <div className="flex flex-col justify-center px-8 py-6 sm:p-12 xl:p-22 bg-white-3 overflow-hidden rounded-md">
                        <h4 className="h4-dark pb-8">YX1 EARPHONES</h4>
                        <Link href={href}>
                            <ButtonTwo />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}