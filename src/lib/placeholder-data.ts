import EarphonesCategoryImage from "/public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import HeadphonesCategoryImage from "/public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakersCategoryImage from "/public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import FacebookIcon from "/public/assets/shared/desktop/icon-facebook.svg";
import InstagramIcon from "/public/assets/shared/desktop/icon-instagram.svg";
import TwitterIcon from "/public/assets/shared/desktop/icon-twitter.svg";

export const featuredCategoryCard = [
    {
        name: "Headphones",
        image: HeadphonesCategoryImage,
        href: "/products/headphones",
    },
    {
        name: "Speakers",
        image: SpeakersCategoryImage,
        href: "/products/speakers",
    },
    {
        name: "Earphones",
        image: EarphonesCategoryImage,
        href: "/products/earphones",
    },
];

export const navLinks = [
    {
        title: "home",
        href: "/",
    },
    {
        title: "headphones",
        href: "/products/headphones",
    },
    {
        title: "speakers",
        href: "/products/speakers",
    },
    {
        title: "earphones",
        href: "/products/earphones",
    },
];

export const shareLinks = [
    {
        icon: FacebookIcon.src,
        title: "facebook",
        href: "/",
    },
    {
        icon: InstagramIcon.src,
        title: "instagram",
        href: "/",
    },
    {
        icon: TwitterIcon.src,
        title: "twitter",
        href: "/",
    },
];