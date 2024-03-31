'use client'

import React from 'react';
import LoadingScreen from '@/components/shared/elements/loading';
import ProductHeader from '@/components/product/product-header';
import ProductFeatures from '@/components/product/product-features';
import ProductGallery from '@/components/product/product-gallery';
import RecommendedContainer from '@/components/shared/recommended/recommended-container';
import { useProduct } from '../_hooks/useProducts';
import { Product } from '@/lib/type';

export default function Page({ params }: { params: { slug: string[] } }) {
    const [category, id] = params.slug;

    console.log("Category:", category);
    console.log("ID:", id);

    const { data: productData } = useProduct(category, String(id));

    // Check if productData is undefined
    if (!productData) {
        return (
            <div>
                <LoadingScreen/>
            </div>
        )
    }

    const headerData = {
        id: productData.id,
        name: productData.name,
        isNew: productData.new,
        description: productData.description,
        price: productData.price,
        productImageData: productData.productImageData,
        cartImage: productData.cartImage
    };

    return (
        <main>
            <ProductHeader headerData={headerData}/>
            <ProductFeatures features={productData.features} boxItems={productData.boxItems}/>
            <ProductGallery images={productData.galleries}/>
            <RecommendedContainer/>
        </main>
    );
}
