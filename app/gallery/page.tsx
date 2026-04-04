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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ["All", "Truck", "Warehouse", "Shipping", "Delivery"];

  const handleFilter = (cat: string) => {
    setFilter(cat);
  };

  useEffect(() => {
    fetch("http://192.168.1.11:8000/api/galleries")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  const filteredImages =
    filter === "All"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <>
      <section className="relative w-full h-[35vh] sm:h-[40vh] md:h-[50vh] lg:h-[45vh] flex items-center justify-center text-white text-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Global-Logistics.jpg')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Gallery
          </h1>

          <p className="mt-2 text-sm sm:text-base md:text-lg">
            Home <span className="text-red-500">»</span> Gallery
          </p>
        </div>
      </section>

      {/* MAIN */}
      <main className="min-h-screen bg-gray-100 py-16 px-5">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Logistics Gallery</h1>
          <p className="text-gray-600 mt-2">
            Explore our trucks, warehouses and logistics operation
          </p>
        </div>

        {/* ✅ UPDATED FILTERS (CENTER + SCROLL) */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-4 overflow-x-auto whitespace-nowrap px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`px-5 py-2 rounded-full border shrink-0 transition-all duration-300 
                ${
                  filter === cat
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-blue-50 hover:-translate-y-1"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.length === 0 ? (
            <p className="col-span-3 text-center text-gray-500">
              No images available
            </p>
          ) : (
            filteredImages.map((img) => (
              <div
                key={img.id}
                onClick={() => setSelectedImage(img.image)}
                className="relative rounded-xl overflow-hidden cursor-pointer group"
              >
                <img
                  src={img.image}
                  alt={img.category}
                  className="w-full h-60 object-cover transform transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="text-white text-xl font-semibold">
                    {img.category}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[1000]"
          >
            <img
              src={selectedImage}
              alt="preview"
              className="max-w-[90%] max-h-[90%] rounded-lg"
            />
          </div>
        )}
      </main>
    </>
  );
}