import React from "react";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface PlaceholderImageProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number | string;
  height?: number | string;
  label?: string;
  src?: string | StaticImageData | any; // Supports static imports for blur placeholders
  alt?: string;
  priority?: boolean;
}

export function PlaceholderImage({
  width = "100%",
  height = "100%",
  className,
  label = "Real Image Pending",
  src,
  alt,
  priority = false,
  ...props
}: PlaceholderImageProps) {
  if (src) {
    const isStatic = typeof src !== "string";
    return (
      <div className={cn("relative overflow-hidden", className)} {...props}>
        <Image
          src={src}
          alt={alt || label}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading={priority ? undefined : "lazy"}
          priority={priority}
          placeholder={isStatic ? "blur" : "empty"}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center bg-muted text-muted-foreground border-2 border-dashed border-border rounded-lg overflow-hidden",
        className
      )}
      style={{ width, height }}
      {...props}
    >
      <span className="text-sm font-medium opacity-50 uppercase tracking-widest text-center px-4">
        {label}
      </span>
    </div>
  );
}
