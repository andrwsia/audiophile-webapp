"use client"

type CategoryHeaderProps = {
    category: string;
    // Add any other props if needed
};

export default function CategoryHeader({ category }: CategoryHeaderProps) {
    return (
        <>
            <div id="category-header" className="grid-container | flow-spacing-3 | pt-24">
                <h2 className="grid-container_grid-area | h2-light | text-center | py-8 md:py-24 ">{category}</h2>
            </div>
        </>
    )
}