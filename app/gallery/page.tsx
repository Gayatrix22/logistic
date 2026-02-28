"use client";

import { useState } from "react";

type ImageType = {
  id: number;
  src: string;
  category: string;
};

const images: ImageType[] = [
  { id: 1, src: "/gallry2.jpg", category: "Truck" },
  { id: 2, src: "/gallery2.jpg", category: "Truck" },
  { id: 3, src: "/gallery3.jpg", category: "Truck" },

  { id: 4, src: "/gallery4.jpg", category: "Shipping" },
  { id: 5, src: "/gallery5.jpg", category: "Shipping" },
  { id: 6, src: "/gallery6.jpg", category: "Shipping" },

  { id: 7, src: "/gallery7.jpg", category: "Warehouse" },
  { id: 8, src: "/gallery8.jpg", category: "Warehouse" },
  { id: 9, src: "/gallery9.jpg", category: "Warehouse" },

  { id: 10, src: "/gallery10.jpg", category: "Delivery" },
  { id: 11, src: "/gallery/delivery2.jpg", category: "Delivery" },
  { id: 12, src: "/gallery/delivery3.jpg", category: "Delivery" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    filter === "All"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Logistics Gallery</h1>
        <p className="text-gray-600 mt-2">
          Explore our trucks, warehouses and logistics operations
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {["All", "Truck", "Warehouse", "Shipping", "Delivery"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full border transition ${
              filter === cat
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-blue-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            className="overflow-hidden rounded-xl shadow hover:shadow-xl transition cursor-pointer"
            onClick={() => setSelectedImage(img.src)}
          >
            <img
              src={img.src}
              alt="logistics gallery"
              className="w-full h-[250px] object-cover hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="preview"
            className="max-h-[90%] max-w-[90%] rounded-lg"
          />
        </div>
      )}
    </main>
  );
}