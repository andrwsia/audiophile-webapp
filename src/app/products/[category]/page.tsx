import CategoryHeader from "@/components/category/category-header";
import CategoryProducts from "@/components/category/category-products";
import { useCategoryProducts } from "../_hooks/useCategoryProducts";

export default function Page({ params }: { params: { category: string }}) {
    const {category} = params;
    const productsList = useCategoryProducts(category);

    return (
        <>
            <CategoryHeader category={category} />
            {productsList.map((item, index) => (
                <CategoryProducts key={index} itemData={item} even={(index + 1) % 2 === 0} />
            ))}
        </>
    );
}