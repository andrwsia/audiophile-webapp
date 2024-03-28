import FeaturedCategory from "@/components/shared/featured-category/featured-category";
import About from "@/components/shared/about/about";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div>
                {children}
                <FeaturedCategory />
                <About />
            </div>
        </>
    );
}