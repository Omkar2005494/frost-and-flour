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

import bday1 from "../../public/images/collections/birthday/1.png";
import bday2 from "../../public/images/collections/birthday/2.jpg";
import bday3 from "../../public/images/collections/birthday/3.jpg";
import bday4 from "../../public/images/collections/birthday/4.jpg";
import bday5 from "../../public/images/collections/birthday/5.jpg";

import anniv1 from "../../public/images/collections/anniversary/1.jpg";
import anniv2 from "../../public/images/collections/anniversary/2.jpg";
import anniv3 from "../../public/images/collections/anniversary/3.jpg";
import anniv4 from "../../public/images/collections/anniversary/4.jpg";
import anniv5 from "../../public/images/collections/anniversary/5.jpg";

import wed1 from "../../public/images/collections/wedding/1.jpg";
import wed2 from "../../public/images/collections/wedding/2.jpg";
import wed3 from "../../public/images/collections/wedding/3.jpg";
import wed4 from "../../public/images/collections/wedding/4.png";
import wed5 from "../../public/images/collections/wedding/5.jpg";

import bento1 from "../../public/images/collections/bento/1.jpg";
import bento2 from "../../public/images/collections/bento/2.png";
import bento3 from "../../public/images/collections/bento/3.jpg";
import bento4 from "../../public/images/collections/bento/4.png";
import bento5 from "../../public/images/collections/bento/5.png";

import custom1 from "../../public/images/collections/custom/1.png";
import custom2 from "../../public/images/collections/custom/2.jpg";
import custom3 from "../../public/images/collections/custom/3.jpg";
import custom4 from "../../public/images/collections/custom/4.jpg";
import custom5 from "../../public/images/collections/custom/5.png";

export const featuredCollections = [
  { 
    id: "birthday", 
    title: "Birthday Cakes", 
    image: signature4, 
    images: [signature4, bday1, bday2, bday3, bday4, bday5],
    description: "Make every year unforgettable with our signature birthday creations." 
  },
  { 
    id: "anniversary", 
    title: "Anniversary Cakes", 
    image: signature2, 
    images: [signature2, anniv1, anniv2, anniv3, anniv4, anniv5],
    description: "Celebrate your milestone with an elegant and romantic centerpiece." 
  },
  { 
    id: "wedding", 
    title: "Wedding Cakes", 
    image: signature1, 
    images: [signature1, wed1, wed2, wed3, wed4, wed5],
    description: "Bespoke tiered cakes designed to match your dream wedding." 
  },
  { 
    id: "bento", 
    title: "Bento Cakes", 
    image: signature3, 
    images: [signature3, bento1, bento2, bento3, bento4, bento5],
    description: "Perfectly portioned mini cakes for intimate celebrations." 
  },
  { 
    id: "custom", 
    title: "Custom Cakes", 
    image: signature5, 
    images: [signature5, custom1, custom2, custom3, custom4, custom5],
    description: "Bring your unique vision to life with our completely custom designs." 
  },
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
