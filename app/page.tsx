"use client";
import Header from "./ui/shared/header/header";
import Hero from "./ui/home/hero";
import FeaturedCategory from "./ui/shared/featured-category/featured-category";
import V1ProductBanner from "./ui/home/v1-product-banner";
import V2ProductBanner from "./ui/home/v2-product-banner";
import V3ProductBanner from "./ui/home/v3-product-banner";
import About from "./ui/shared/about/about";
import Footer from "./ui/shared/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedCategory />
      <V1ProductBanner />
      <V2ProductBanner />
      <V3ProductBanner />
      <About />
      <Footer />
    </>
  );
}