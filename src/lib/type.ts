export type ImageProps = {
    src: string;
    width: number;
    height: number;
}

export type ResponsiveImageProps = {
    alt: string;
    mobile: ImageProps;
    tablet: ImageProps;
    desktop: ImageProps;
    objectFit?: string;
}

export type ProductBoxItem = {
    name: string, count: number
}

export type Category = 'headphones' | 'earphones' | 'speakers';

export type Product = {
    id: number;
    new: boolean;
    name: string;
    description: string;
    features: string;
    price: number;
    category: Category;
    cartImage: string;
    productImageData: ResponsiveImageProps;
    previewImageData: ResponsiveImageProps;
    boxItems: ProductBoxItem[];
    galleries: ResponsiveImageProps[];
    sharedImageData?: ResponsiveImageProps;
}

export type ProductCategoryItem = {
    id: number; 
    new: boolean;
    name: string;
    category: string;
    previewImageData: ResponsiveImageProps; 
    description: string
}