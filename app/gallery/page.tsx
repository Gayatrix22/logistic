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

<<<<<<< HEAD
=======
  // ✅ ADD THESE
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [relatedImages, setRelatedImages] = useState<ImageType[]>([]);
  const mainSwiperRef = useRef<any>(null);

>>>>>>> 9ac66c0793aa91d5539dfa5238e3e77b43b77de4
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

      {/* FILTER BUTTONS */}
      {/* FILTER */}
<div className="mb-12 flex justify-center">
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full max-w-4xl">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => setFilter(cat)}
        className={`w-full px-4 py-3 rounded-lg text-sm border transition text-center ${
          filter === cat
            ? "bg-orange-500 text-white shadow-lg"
            : "bg-white text-gray-700 hover:bg-orange-100"
        }`}
      >
        {cat}
      </button>
    ))}
  </div>
</div>
      {/* GRID (2 ROWS × 3 COLUMNS) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.slice(0, 6).map((img) => (
          <div
            key={img.id}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src={img.image}
              alt={img.category}
              className="w-full h-64 object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

    </main>
  );
}