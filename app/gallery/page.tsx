"use client";

import { useEffect, useState } from "react";

type ImageType = {
  id: number;
  image: string;
  category: string;
};

export default function GalleryPage() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Truck", "Warehouse", "Shipping", "Delivery"];

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/galleries")
      .then((res) => res.json())
      .then((data) => {
        const uniqueData = data.filter(
          (item: any, index: number, self: any[]) =>
            index === self.findIndex((i) => i.image === item.image)
        );

        setImages(uniqueData);
      });
  }, []);

  const filteredImages =
    filter === "All"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <main className="min-h-screen bg-white py-16 px-5">

      {/* HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Logistics <span className="text-orange-500">Gallery</span>
        </h2>
        <p className="text-gray-500 mt-3">
          Explore our trucks, warehouses & logistics operations
        </p>
      </div>

      {/* FILTER */}
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm border transition ${
              filter === cat
                ? "bg-orange-500 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-orange-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            className="break-inside-avoid mb-6 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src={img.image}
              className="w-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

    </main>
  );
}