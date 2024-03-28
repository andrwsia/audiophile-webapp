import Hero from "../components/home/hero";
import FeaturedCategory from "../components/shared/featured-category/featured-category";
import V1ProductBanner from "../components/home/v1-product-banner";
import V2ProductBanner from "../components/home/v2-product-banner";
import V3ProductBanner from "../components/home/v3-product-banner";
import About from "../components/shared/about/about";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCategory />
      <V1ProductBanner />
      <V2ProductBanner />
      <V3ProductBanner />
      <About />
    </>
  );
}