import heroImage from "../../public/images/hero/hero-cake.jpg";
import signature1 from "../../public/images/signature/bride-to-be.jpg";
import signature2 from "../../public/images/signature/butterfly-1.png";
import signature3 from "../../public/images/signature/chocolate-drip.jpg";
import signature4 from "../../public/images/signature/butterfly-2.jpg";
import signature5 from "../../public/images/signature/mango.jpg";
import signature6 from "../../public/images/signature/princess-castle.jpg";
import review1 from "../../public/images/reviews/1.jpg";

export const heroData = {
  image: heroImage,
  alt: "Frost & Flour Premium Cake",
};

export const aboutData = {
  image: heroImage,
};

export const signatureCreations = [
  {
    id: "bride-to-be",
    title: "Bride To Be Elegance",
    description: "A graceful bridal celebration cake handcrafted with delicate floral details and timeless elegance.",
    image: signature1,
  },
  {
    id: "butterfly-dreams",
    title: "Butterfly Dreams",
    description: "An elegant two-tier cake designed for unforgettable celebrations.",
    image: signature2,
  },
  {
    id: "chocolate-indulgence",
    title: "Chocolate Indulgence",
    description: "Rich chocolate glaze paired with handcrafted cream rosettes.",
    image: signature3,
  },
  {
    id: "blush-butterfly",
    title: "Blush Butterfly",
    description: "Soft pastel tones with delicate butterfly accents.",
    image: signature4,
  },
  {
    id: "summer-mango",
    title: "Summer Mango Delight",
    description: "Fresh mango pieces and light whipped cream for a refreshing celebration.",
    image: signature5,
  },
  {
    id: "princess-castle",
    title: "Princess Castle Cake",
    description: "A magical princess theme cake featuring an elegant castle and beautiful character details.",
    image: signature6,
  },
];

export const featuredCollections = [
  { id: "birthday", title: "Birthday Cakes", image: signature4, description: "Make every year unforgettable with our signature birthday creations." },
  { id: "anniversary", title: "Anniversary Cakes", image: signature2, description: "Celebrate your milestone with an elegant and romantic centerpiece." },
  { id: "wedding", title: "Wedding Cakes", image: signature1, description: "Bespoke tiered cakes designed to match your dream wedding." },
  { id: "bento", title: "Bento Cakes", image: signature3, description: "Perfectly portioned mini cakes for intimate celebrations." },
  { id: "custom", title: "Custom Cakes", image: signature5, description: "Bring your unique vision to life with our completely custom designs." },
];

import t1 from "../../public/images/testimonials/1.png";
import t2 from "../../public/images/testimonials/2.png";
import t3 from "../../public/images/testimonials/3.png";
import t4 from "../../public/images/testimonials/4.jpg";
import t5 from "../../public/images/testimonials/5.png";

export const testimonials = [
  { id: 1, image: t1, alt: "Customer story 1" },
  { id: 2, image: t2, alt: "Customer story 2" },
  { id: 3, image: t3, alt: "Customer story 3" },
  { id: 4, image: t4, alt: "Customer story 4" },
  { id: 5, image: t5, alt: "Customer story 5" },
];

import insta1 from "../../public/images/instagram/1.png";
import insta2 from "../../public/images/instagram/2.jpg";
import insta3 from "../../public/images/instagram/3.jpg";
import insta4 from "../../public/images/instagram/4.jpg";

export const instagramPosts = [
  { id: 1, image: insta1, link: "https://instagram.com" },
  { id: 2, image: insta2, link: "https://instagram.com" },
  { id: 3, image: insta3, link: "https://instagram.com" },
  { id: 4, image: insta4, link: "https://instagram.com" },
];
