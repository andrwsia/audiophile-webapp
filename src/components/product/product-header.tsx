'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import ButtonOneAlt from '../shared/elements/buttons/button-1-alt'
import ResponsiveImage from '../shared/elements/responsive-image'
import { ResponsiveImageProps } from '@/lib/type'
type ProductHeaderProps = {
    id: string;
    name: string;
    isNew: boolean;
    description: string;
    price: number;
    productImageData: ResponsiveImageProps;
    cartImage: string
}

export default function ProductHeader({ headerData }: { headerData: ProductHeaderProps }) {
    const { name, description, price, productImageData, isNew } = headerData
    // const {dispatch} = useCartData()
    const [quantity, setQuantity] = useState(1)
    const productImageRef = useRef<HTMLDivElement | null>(null)
    // const [cartAnimationData, setCartAnimationData] = useState<CartAnimationProps>({top:0, left:0, width:0, height:0, productImageData})
    // const [animateTrigger, setAnimateTrigger] = useState(false)

    // useEffect(() => {
    //     if(!productImageRef.current) return;
    //     const {top, left,width, height} = productImageRef.current.getBoundingClientRect();
    //     setCartAnimationData({top, left, width, height, productImageData})
    //     console.log(top, left, width, height)
    // }, [setCartAnimationData, productImageData])

    const addquantity = () => {
        setQuantity(prev => prev + 1)
    }
    const minusquantity = () => {
        if (quantity < 2) return
        setQuantity(prev => prev - 1)
    }

    // const animateActivate = () => {
    //     setAnimateTrigger(true)
    //     setTimeout(() => {
    //         setAnimateTrigger(false)
    //     }, 1000)
    // }

    // const throttle = (func: () => void, limit: number): (() => void) => {
    //     let inThrottle: boolean;
    //     return function(): void {
    //       if (!inThrottle) {
    //         func();
    //         inThrottle = true;
    //         setTimeout(() => (inThrottle = false), limit);
    //       }
    //     };
    // };

    // const addtoCart = throttle(() => {
    //     dispatch({type: "ADD_ITEM", payload: {
    //         productId: id,
    //         cartImage,
    //         price,
    //         quantity,
    //         name
    //     }})
    //     animateActivate()
    // },1000)

    return (
        <section id="product-header" className="grid-container | flow-spacing-3 mt-36 sm:mt-48">
            <div className="product-header-grid | items-center">
                <div ref={productImageRef}>
                    <ResponsiveImage
                        alt={productImageData.alt}
                        mobile={productImageData.mobile}
                        tablet={productImageData.tablet}
                        desktop={productImageData.desktop}
                    />
                    {/* <AddCartAnimation cartAnimationData={cartAnimationData} animateTrigger={animateTrigger}/> */}
                </div>
                <div className='flex flex-col justify-center items-start md:items-center'>
                    <div>
                        <p className={`overline-orange | pb-6 md:pb-8 max-w-md  ${isNew ? '' : 'hidden'}`}>
                            new product
                        </p>
                        <h2 className='h2-dark | pb-6 md:pb-8 max-w-md '>
                            {name}
                        </h2>
                        <p className='body-text-alt | pb-6 md:pb-8 max-w-md '>
                            {description}
                        </p>
                        <div className='h6-dark | pb-6 md:pb-8 max-w-md '>
                            $ {price.toLocaleString()}
                        </div>
                        <div className='flex gap-4'>
                            <div className='flex w-5/12 bg-grey-1 font-bold'>
                                <div className='flex-1 flex justify-center items-center text-secondary-color cursor-pointer hover:text-accent-color' onClickCapture={minusquantity}>-</div>
                                <div className='flex-1 flex justify-center items-center'>{quantity}</div>
                                <div className='flex-1 flex justify-center items-center text-secondary-color cursor-pointer hover:text-accent-color' onClickCapture={addquantity}>+</div>
                            </div>
                            <Link
                                // href={`/product/${itemData.category}/${itemData.id}`}
                                href={'#'}
                            >
                                <ButtonOneAlt />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}