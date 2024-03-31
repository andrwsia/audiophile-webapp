import React from 'react'
import ResponsiveImage from '../shared/elements/responsive-image'
import { ResponsiveImageProps } from '@/lib/type'
// import './ProductGallery.css'
type GalleryProps = {
    images: ResponsiveImageProps[]
}
export default function ProductGallery({images}: GalleryProps) {
    return (
        <div id='product-gallery' className='grid-container | flow-spacing-3'>
            <div className="product-gallery-grid">
                <div className='rounded-lg overflow-hidden product-gallery-one'>
                    <ResponsiveImage alt={images[0].alt} mobile={images[0].mobile} tablet={images[0].mobile} desktop={images[0].desktop}/>
                </div>
                <div className='rounded-lg overflow-hidden product-gallery-two'>
                    <ResponsiveImage alt={images[1].alt} mobile={images[1].mobile} tablet={images[1].mobile} desktop={images[1].desktop}/>
                </div>
                <div className='rounded-lg overflow-hidden product-gallery-three'>
                    <ResponsiveImage alt={images[2].alt} mobile={images[2].mobile} tablet={images[2].mobile} desktop={images[2].desktop}/>
                </div>
            </div>
        </div>
    )
}