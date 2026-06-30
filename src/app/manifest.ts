import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Frost & Flour",
    short_name: "Frost & Flour",
    description: "Premium handcrafted homemade cakes designed with love.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F5F2",
    theme_color: "#F8F5F2",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
