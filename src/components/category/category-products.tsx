"use client"
import Link from "next/link";
import ButtonOne from "@/components/shared/elements/buttons/button-1"
import ResponsiveImage from "@/components/shared/elements/responsive-image";
import { ProductCategoryItem } from "@/lib/type";

type ItemProps = {
    itemData: ProductCategoryItem;
    even: boolean;
}

export default function CategoryProducts({ even, itemData }: ItemProps) {

    const { name, description, previewImageData, href } = itemData;

    console.log(itemData);
    return (
        <>
            <section id="category-product" className="grid-container | flow-spacing-3">
                <div className="category-product-grid">
                    <div className={`overflow-hidden rounded-md ${even ? 'lg:order-2' : ''}`}>
                        <ResponsiveImage
                            alt={previewImageData.alt}
                            mobile={previewImageData.mobile}
                            tablet={previewImageData.tablet}
                            desktop={previewImageData.desktop}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col items-center lg:items-start">
                            <span className={`overline-orange | pb-6 sm:pb-8 max-w-md text-center lg:text-left ${itemData.new ? '' : 'hidden'}`}>New Product</span>
                            <h2 className="h2-dark | pb-6 sm:pb-8 max-w-md text-center lg:text-left">{name}</h2>
                            <p className="body-text-alt | pb-6 sm:pb-8 max-w-md text-center lg:text-left">{description}</p>
                            <Link
                                // href={`/product/${itemData.category}/${itemData.id}`}
                                href={href}
                            >
                                <ButtonOne />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}