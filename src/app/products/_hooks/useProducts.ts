import React, { useEffect } from 'react';
import { products } from '@/lib/products-data';
import { Product } from '@/lib/type';

export function useProduct(category: string, id: string): { data: Product | undefined } {
  const [data, setData] = React.useState<Product | undefined>(undefined);

  const mockFetch = React.useCallback((): Promise<Product | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = products.find(item => ((item.id === id) && (item.category === category)));
        console.log('Fetched product:', result);
        return resolve(result);
      }, 2500);
    });
  }, [category, id]);

  useEffect(() => {
    console.log('Category:', category);
    console.log('ID:', id);
    const fetchProduct = async () => {
      const result = await mockFetch();
      if (result) {
        setData(result);
      }
    };
    fetchProduct();
  }, [category, id, mockFetch]);  

  console.log('Data:', data); // Log the data here to check if it's being updated

  return { data };
}