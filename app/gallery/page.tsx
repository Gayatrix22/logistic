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

  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  // ✅ RELATED IMAGES
  const [relatedImages, setRelatedImages] = useState<ImageType[]>([]);

  const categories = ["All", "Truck", "Warehouse", "Shipping", "Delivery"];

  const handleFilter = (cat: string) => {
    setFilter(cat);
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/galleries")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  const filteredImages =
    filter === "All"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[35vh] sm:h-[40vh] md:h-[50vh] lg:h-[45vh] flex items-center justify-center text-white text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Global-Logistics.jpg')" }}
        ></div>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Gallery
          </h1>

          <p className="mt-2 text-sm sm:text-base md:text-lg">
            Home <span className="text-red-500">»</span> Gallery
          </p>
        </div>
      </section>

      <main
        className="min-h-screen bg-gray-100 py-16 px-5"
        onMouseMove={(e) =>
          setCursor({ x: e.clientX, y: e.clientY })
        }
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-800">
            Logistics Gallery
          </h2>
          <p className="text-gray-600 mt-2">
            Explore our trucks, warehouses and logistics operation
          </p>
        </div>

        {/* FILTER */}
        <div className="mb-10 px-4">
          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`
                  w-full sm:w-auto py-3 px-4 rounded-full border text-sm font-medium 
                  backdrop-blur-md transition-all duration-300
                  ${
                    filter === cat
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white/70 hover:bg-blue-50"
                  }
                `}
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
              onClick={() => {
                setSelectedImage(img.image);

                // ✅ RELATED IMAGES
                const related = images.filter(
                  (item) => item.category === img.category
                );
                setRelatedImages(related);
              }}
              className="break-inside-avoid mb-6 relative rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={img.image}
                className="w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* CURSOR */}
        <div
          className="fixed pointer-events-none z-[999]"
          style={{ left: cursor.x - 100, top: cursor.y - 100 }}
        >
          <div className="w-52 h-52 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>
        </div>

        {/* 🔥 CENTER LIGHTBOX */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[1000]">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 flex items-center gap-2 
              px-5 py-2 rounded-full 
              bg-white/10 backdrop-blur-md border border-white/20 
              text-white text-sm font-medium 
              hover:bg-white/20 hover:scale-105
              transition-all duration-300 shadow-lg"
            >
              ✕ <span>Back to page</span>
            </button>

            <div className="flex flex-col items-center max-w-4xl w-full px-4">

              {/* MAIN IMAGE */}
              <img
                src={selectedImage}
                className="w-full max-h-[70vh] object-cover rounded-xl shadow-2xl"
              />

              {/* TITLE */}
              <h2 className="text-white text-xl mt-4 font-semibold">
                {relatedImages[0]?.category}
              </h2>

              {/* 🔥 RELATED IMAGES */}
              <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-3 w-full">
                {relatedImages.map((img) => (
                  <img
                    key={img.id}
                    src={img.image}
                    onClick={() => setSelectedImage(img.image)}
                    className="h-20 w-full object-cover rounded cursor-pointer hover:scale-105 transition border border-white/20"
                  />
                ))}
              </div>

            </div>
          </div>
        )}
      </main>
    </>
  );
}