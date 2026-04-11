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
  const thumbSwiperRef = useRef<any>(null);

  const categories = ["All", "Truck", "Warehouse", "Shipping", "Delivery"];

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

      {/* 🔥 ANIMATED TITLE */}
<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 text-gray-800 
animate-[slideIn_0.8s_ease-out]">
  Logistics Gallery
</h1>

      {/* FILTER */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full transition ${
              filter === cat
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-gray-200"
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
                (i) => i.category === img.category
              );
              setRelatedImages(related);
            }}
            className="rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition"
          >
            <img
              src={img.image}
              className="w-full object-cover hover:scale-105 transition duration-300"
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
            className="absolute top-6 right-6 text-white bg-white/10 px-4 py-2 rounded-full hover:bg-white/20"
          >
            ✕ Close
          </button>

          <div className="w-full max-w-4xl px-4">

            {/* MAIN IMAGE */}
            <div className="relative">

              {/* LEFT ARROW */}
              <button
                onClick={() => mainSwiperRef.current?.slidePrev()}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 
                w-12 h-12 rounded-full bg-black/40 text-white text-xl flex items-center justify-center hover:bg-black/70"
              >
                ‹
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={() => mainSwiperRef.current?.slideNext()}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 
                w-12 h-12 rounded-full bg-black/40 text-white text-xl flex items-center justify-center hover:bg-black/70"
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
            <div className="mt-6">
              <Swiper
                onSwiper={(swiper) => (thumbSwiperRef.current = swiper)}
                slidesPerView={4}
                spaceBetween={10}
                breakpoints={{
                  640: { slidesPerView: 5 },
                  768: { slidesPerView: 6 },
                }}
              >
                {relatedImages.map((img, index) => (
                  <SwiperSlide key={img.id}>
                    <img
                      src={img.image}
                      onClick={() => {
                        setSelectedImage(img.image);
                        mainSwiperRef.current?.slideTo(index);
                      }}
                      className={`h-20 w-full object-cover rounded cursor-pointer transition ${
                        selectedImage === img.image
                          ? "border-2 border-blue-500"
                          : "opacity-60 hover:opacity-100"
                      }`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>
        </div>
      )}
    </main>
  );
}