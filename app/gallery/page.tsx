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
  { id: 11, src: "/gallery11.jpg", category: "Delivery" },
  { id: 12, src: "/gallery12.jpg", category: "Delivery" },
];

const categories = ["All", "Truck", "Warehouse", "Shipping", "Delivery"];

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFilter = (cat: string) => {
    if (!categories.includes(cat)) {
      console.error("Invalid category");
      return;
    }
    setFilter(cat);
  };

  const filteredImages =
    filter === "All"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[35vh] sm:h-[40vh] md:h-[45vh] flex items-center justify-center text-white text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Global-Logistics.jpg')" }}
        ></div>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Gallery
          </h1>
          <p className="mt-3 text-xs sm:text-sm md:text-base">
            Home <span className="text-red-500">»</span> Gallery
          </p>
        </div>
      </section>

      <main className="gallery-wrapper">

        {/* Heading */}
        <div className="heading">
          <h1>Logistics Gallery</h1>
          <p>Explore our trucks, warehouses and logistics operation</p>
        </div>

        {/* Filters */}
        <div className="filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={filter === cat ? "active" : ""}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid">
          {filteredImages.length === 0 ? (
            <p className="no-data">No images available</p>
          ) : (
            filteredImages.map((img) => (
              <div
                key={img.id}
                className="card"
                onClick={() => setSelectedImage(img.src)}
              >

                <img src={img.src} alt="gallery" />

                {/* Hover Overlay */}
                <div className="overlay">
                  <span>{img.category}</span>
                </div>

              </div>
            ))
          )}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="lightbox"
            onClick={() => setSelectedImage(null)}
          >
            <img src={selectedImage} alt="preview" />
          </div>
        )}
      </main>

      {/* CSS */}
      <style jsx>{`

        .gallery-wrapper {
          min-height: 100vh;
          background: #f5f7fb;
          padding: 60px 20px;
        }

        .heading {
          text-align: center;
          margin-bottom: 40px;
        }

        .heading h1 {
          font-size: 40px;
          font-weight: bold;
        }

        .filters {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .filters button {
          padding: 10px 20px;
          border-radius: 25px;
          border: 1px solid #ddd;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filters button:hover {
          transform: translateY(-3px);
          background: #e8f0ff;
        }

        .filters .active {
          background: #2563eb;
          color: white;
        }

        .grid {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }

        .card {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          cursor: pointer;
        }

        .card img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .card:hover img {
          transform: scale(1.12);
        }

        /* Overlay Hover Effect */

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: 0.4s;
        }

        .overlay span {
          color: white;
          font-size: 22px;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .card:hover .overlay {
          opacity: 1;
        }

        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .lightbox img {
          max-width: 90%;
          max-height: 90%;
          border-radius: 10px;
        }

        .no-data {
          text-align: center;
          grid-column: span 3;
          font-size: 18px;
          color: gray;
        }

      `}</style>
    </>
  );
}