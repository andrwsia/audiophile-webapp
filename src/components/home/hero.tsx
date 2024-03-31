"use client";
import Image from "next/image";
import Link from "next/link";
import ImageHeader from "/public/assets/home/tablet/image-header.jpg";
import SmallImageHeader from "/public/assets/home/mobile/image-header.jpg";
import ButtonOne from "../shared/elements/buttons/button-1";
import { products } from "@/lib/products-data"

// Function to get the href of a product by its id
function getHrefById(productId: string) {
    // Find the product with the given id
    const product = products.find(prod => prod.id === productId);

    // If product is found, return its href, otherwise return null
    return product ? product.href : '';
}

export default function Hero() {
  const productId = 'xx99-mark-two-headphones';
  const href = getHrefById(productId);

  return (
    <>
      <section id="hero" className="flow-spacing-2 relative | hero-padding-top">
        <div className="hero-grid">
          <div className="hero-grid_area-1 | z-10 flex flex-col justify-center items-center sm:items-start py-16">
            <div>
              <p className="overline-light | mb-8 text-center sm:text-left">
                New Product
              </p>
              <h1 className="h1-light | mb-8 text-center sm:text-left">
                XX99 Mark II Headphones
              </h1>
            </div>
            <p className="body-text-light | mb-8 text-center sm:text-left">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link href={href}>
              <ButtonOne />
            </Link>
          </div>
          <div className="hero-grid_area-2 | flex justify-center sm:justify-end">
            <div className="background-opacity"></div>
            <Image
              className="w-fit pb-14 hidden block-sm"
              alt="XX99 Mark Two Headphones"
              src={ImageHeader}
              priority
              quality={100}
              // objectFit="cover"
              width={700}
            />
            <Image
              className="w-full block hidden-sm"
              alt="XX99 Mark Two Headphones"
              src={SmallImageHeader}
              priority
              quality={100}
              width={650}
            />
          </div>
        </div>
      </section>
    </>
  );
}
