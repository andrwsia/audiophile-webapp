"use client";
import RecommendedCard from "./recommended-card";
import { useRecommendedProducts } from "@/app/products/_hooks/useRecommendedProducts";

export default function RecommendedContainer() {

    const recommendedProducts = useRecommendedProducts();

    return (
        <>
            <section id="recommended-container" className="grid-container flow-spacing-3">
                <div className="grid-container_grid-area">

                    <h3 className="h3-dark | text-center | pb-12 md:pb-16">You may also like</h3>
                    <div className="recommended-container-grid">
                        {recommendedProducts.map((data, index) => (
                            <RecommendedCard
                                key={index}
                                recommendedProducts={data} // Pass recommendedData as a whole
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}