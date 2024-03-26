import EarphonesCategoryImage from "@/public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import HeadphonesCategoryImage from "@/public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakersCategoryImage from "@/public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import FacebookIcon from "@/public/assets/shared/desktop/icon-facebook.svg";
import InstagramIcon from "@/public/assets/shared/desktop/icon-instagram.svg";
import TwitterIcon from "@/public/assets/shared/desktop/icon-twitter.svg";
import { title } from "process";

export const featuredCategoryCard = [
    { 
        name: "Headphones", 
        image: HeadphonesCategoryImage 
    },
    { 
        name: "Speakers", 
        image: SpeakersCategoryImage 
    },
    { 
        name: "Earphones", 
        image: EarphonesCategoryImage 
    },
];

export const navLinks = [
    {
        title: "home",
        href: "#"
    },
    {
        title: "headphones",
        href: "#"
    },
    {
        title: "speakers",
        href: "#"
    },
    {
        title: "earphones",
        href: "#"
    },
]

export const shareLinks = [
    {
        icon: FacebookIcon.src,
        title: 'facebook',
        href: '#'
    },
    {
        icon: InstagramIcon.src,
        title: 'instagram',
        href: '#'
    },
    {
        icon: TwitterIcon.src,
        title: 'twitter',
        href: '#'
    }
]