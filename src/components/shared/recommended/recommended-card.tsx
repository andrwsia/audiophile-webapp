"use client"
// import Image from "next/image";
import Link from "next/link";
import ButtonOne from "../elements/buttons/button-1";
import ResponsiveImage from "../elements/responsive-image";
import { ResponsiveImageProps } from "@/lib/type";

type RecommendedProps = {
    id: string,
    href: string,
    name: string,
    sharedImageData?: ResponsiveImageProps;
}

export default function RecommendedCard({ recommendedProducts }: { recommendedProducts: RecommendedProps }) {
    const { href, name, sharedImageData } = recommendedProducts
    const alt = sharedImageData ? sharedImageData.alt : "";
    const { mobile, tablet, desktop } = sharedImageData || {
        mobile: { width: 0, height: 0, src: "" },
        tablet: { width: 0, height: 0, src: "" },
        desktop: { width: 0, height: 0, src: "" }
    };


    return (
        <>
            <section id="recommended-card">
                <div className="flex flex-col justify-between | w-full h-full | gap-6 md:gap-8">
                    <ResponsiveImage
                        alt={alt}
                        mobile={mobile}
                        tablet={tablet}
                        desktop={desktop}
                    />
                    <h5 className="h5-dark | text-center">{name}</h5>
                    <Link href={href} className="flex flex-col items-center">
                        <ButtonOne />
                    </Link>
                </div>
            </section>
        </>
    )
}