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

  const handleFilter = (cat: string) => {
    setFilter(cat);
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/galleries")
      .then((res) => res.json())
      .then((data) => {
        // ✅ duplicate remove (same image)
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
    <main className="min-h-screen bg-gray-100 py-16 px-5">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Logistics Gallery
        </h2>
        <p className="text-gray-600">
          Explore our trucks, warehouses and logistic operation
        </p>
      </div>

      {/* FILTER */}
      <div className="mb-10 px-4">
        <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`py-3 px-4 rounded-full border text-sm ${
                filter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-8 space-y-8">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            className="break-inside-avoid mb-6 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition"
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