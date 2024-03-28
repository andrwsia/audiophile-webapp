"use client";
import CardCategory from "./card-category";
import { featuredCategoryCard } from "@/lib/placeholder-data";

export default function FeaturedCategory() {
    return (
        <>
            <section id="featured-category" className="grid-container flow-spacing-3">
                <div className="featured-grid">
                    {featuredCategoryCard.map((card, index) => (
                        <CardCategory key={index} name={card.name} image={card.image} href={card.href}/>
                    ))}
                </div>
            </section>
        </>
    );
}