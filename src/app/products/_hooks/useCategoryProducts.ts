import { ProductCategoryItem } from '@/lib/type';
import { products } from '@/lib/products-data';

export function useCategoryProducts(category: string): ProductCategoryItem[] {
    // Convert category to lowercase if it's a string
    const normalizedCategory = typeof category === 'string' ? category.toLowerCase() : '';

    console.log('Normalized Category:', normalizedCategory); // Log the normalized category

    // Filter products based on the normalized category
    const filteredProducts = products.filter(item => {
        console.log('Product Category:', item.category);
        return typeof item.category === 'string' && item.category.toLowerCase() === normalizedCategory;
    });

    console.log('Filtered Products:', filteredProducts); // Log the filtered products array

    // Map filtered products to ProductCategoryItem format
    const mappedProducts = filteredProducts.map(item => {
        return {
            id: item.id,
            new: item.new,
            name: item.name,
            category: item.category,
            previewImageData: item.previewImageData,
            description: item.description
        };
    });

    console.log('Mapped Products:', mappedProducts); // Log the mapped products array

    // Sort mapped products by 'new' property
    const sortedProducts = mappedProducts.sort((obj1, obj2) => Number(obj2.new) - Number(obj1.new));

    console.log('Sorted Products:', sortedProducts); // Log the sorted products array

    return sortedProducts; // Return the sorted products array
}