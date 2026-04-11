"use client";

import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

type ImageType = {
  id: number;
  image: string;
  category: string;
};

export default function GalleryPage() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [relatedImages, setRelatedImages] = useState<ImageType[]>([]);

  const mainSwiperRef = useRef<any>(null);

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
    <main className="min-h-screen bg-gray-100 py-16 px-5">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Logistics Gallery
        </h2>
        <p className="text-gray-600">
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
            onClick={() => {
              setSelectedImage(img.image);
              const related = images.filter(
                (item) => item.category === img.category
              );
              setRelatedImages(related);
            }}
            className="break-inside-avoid mb-6 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition"
          >
            <img
              src={img.image}
              className="w-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* 🔥 LIGHTBOX WITH SWIPER */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[1000]">

          {/* CLOSE */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white bg-white/10 px-4 py-2 rounded-full"
          >
            ✕ Close
          </button>

          <div className="w-full max-w-4xl px-4">

            {/* MAIN SWIPER */}
            <div className="relative">

              {/* LEFT ARROW */}
              <button
                onClick={() => mainSwiperRef.current?.slidePrev()}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 
                w-12 h-12 rounded-full bg-black/40 text-white text-xl flex items-center justify-center"
              >
                ‹
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={() => mainSwiperRef.current?.slideNext()}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 
                w-12 h-12 rounded-full bg-black/40 text-white text-xl flex items-center justify-center"
              >
                ›
              </button>

              <Swiper
                onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                initialSlide={Math.max(
                  0,
                  relatedImages.findIndex(
                    (img) => img.image === selectedImage
                  )
                )}
                onSlideChange={(swiper) => {
                  const current = relatedImages[swiper.activeIndex];
                  if (current) setSelectedImage(current.image);
                }}
              >
                {relatedImages.map((img) => (
                  <SwiperSlide key={img.id}>
                    <img
                      src={img.image}
                      className="w-full max-h-[70vh] object-cover rounded-xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* THUMBNAILS */}
            <div className="mt-6 grid grid-cols-4 gap-3">
              {relatedImages.map((img, index) => (
                <img
                  key={img.id}
                  src={img.image}
                  onClick={() => {
                    setSelectedImage(img.image);
                    mainSwiperRef.current?.slideTo(index);
                  }}
                  className={`h-20 w-full object-cover rounded cursor-pointer ${
                    selectedImage === img.image
                      ? "border-2 border-blue-500"
                      : "opacity-60 hover:opacity-100"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      )}
    </main>
  );
}