import React from 'react'
import { ProductBoxItem } from '@/lib/type'
type FeaturesProps = {
    features: string;
    boxItems: ProductBoxItem[]
}

export default function ProductFeatures({ features, boxItems }: FeaturesProps) {
    return (
        <div id="product-features" className='grid-container flow-spacing-3'>
            <div className='product-features-grid'>
                <div className=''>
                    <h3 className='h3-dark | pb-6 sm:pb-8'>
                        Features
                    </h3>
                    <div className='body-text-alt | max-w-full | grid gap-6 sm:gap-8'>
                        {
                            (features).split('<break/>').map((paragraph, index) => (
                                <p key={index} className=''>{paragraph.trim()}</p>
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col lg:items-center'>
                    <div className='grid grid-cols-1 md:gap-12 lg:gap-0 md:grid-cols-2 lg:grid-cols-1 lg:col-span-2'>
                        <h3 className='h3-dark | pb-6 sm:pb-8'>
                            in the box
                        </h3>
                        <div>
                            <ul className=''>
                                {
                                    boxItems.map((item, index) => {
                                        return (
                                            <li key={index} className='flex gap-6 font-medium'>
                                                <span className='count-orange pb-2'>{item.count}x</span>
                                                <span className='body-text-alt pb-2'>
                                                    {item.name}
                                                </span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}