"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  product: {
    thumbnail: string;
    images: string[];
    title: string;
  };
};
export default function ProductImage({ product }: Props) {
  const [selectedImage, setSelectedImage] = useState(product.thumbnail);
  return (
    <div>
      <Image src={selectedImage} alt={product.title} width={300} height={300} />
      <div className="flex gap-1">
        {product.images.map((image, index) => (
          <div
            key={index}
            className="border border-[#ccc]"
            onClick={() => {
              setSelectedImage(image);
            }}
          >
            <Image src={image} alt={product.title} width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
}
