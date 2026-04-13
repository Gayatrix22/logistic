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

            onClick={() => {
              setSelectedImage(img.image);
              const related = images.filter(
                (item) => item.category === img.category
              );
              setRelatedImages(related);
            }}
            className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition group"

            className="break-inside-avoid mb-6 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition"

          >
            <img
              src={img.image}
              className="w-full object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[1000]">

          {/* CLOSE */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 bg-orange-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-orange-600"
          >
            ✕ Close
          </button>

          <div className="w-full max-w-4xl px-4">

            {/* SWIPER */}
            <div className="relative">

              {/* LEFT */}
              <button
                onClick={() => mainSwiperRef.current?.slidePrev()}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 
                w-12 h-12 rounded-full bg-orange-500 text-white text-xl flex items-center justify-center shadow-md"
              >
                ‹
              </button>

              {/* RIGHT */}
              <button
                onClick={() => mainSwiperRef.current?.slideNext()}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 
                w-12 h-12 rounded-full bg-orange-500 text-white text-xl flex items-center justify-center shadow-md"
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
                  className={`h-20 w-full object-cover rounded cursor-pointer transition ${
                    selectedImage === img.image
                      ? "border-2 border-orange-500"
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