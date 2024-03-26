"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";
import ButtonThree from "../elements/buttons/button-3";

interface CardCategoryProps {
    name: string;
    image: StaticImageData;
}

export default function CardCategory({ name, image }: CardCategoryProps) {
    return (
        <>
            <div className="card-category-grid">
                <div className="ccg-area-1"></div>
                <div className="ccg-area-2 | rounded-md"></div>
                <div className="ccg-content | flex flex-col items-center justify-evenly">
                    <Image
                        className="block"
                        alt={name}
                        src={image}
                        priority
                        quality={100}
                        width={200}
                        objectFit="contain"
                    />

                    <p className="h6-dark | text-center">{name}</p>
                    <div className="py-1 sm:py-2">
                        <ButtonThree />
                    </div>
                </div>
            </div>
        </>
    );
}