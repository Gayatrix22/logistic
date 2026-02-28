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

  // Category validation
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
      <main className="gallery-wrapper">

        {/* Heading */}
        <div className="heading">
          <h1>Logistics Gallery</h1>
          <p>Explore our trucks, warehouses and logistics operations</p>
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
  className="overflow-hidden rounded-xl shadow hover:shadow-xl transition cursor-pointer h-[260px]"
  onClick={() => setSelectedImage(img.src)}
>
  <img
    src={img.src}
    alt="gallery"
    className="w-full h-full object-cover hover:scale-110 transition duration-300"
  />
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
          animation: fadeDown 0.8s ease;
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
          overflow: hidden;
          border-radius: 12px;
          cursor: pointer;
          animation: fadeUp 0.6s ease;
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

        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.4s ease;
          z-index: 1000;
        }

        .lightbox img {
          max-width: 90%;
          max-height: 90%;
          border-radius: 10px;
          animation: zoomIn 0.4s ease;
        }

        .no-data {
          text-align: center;
          grid-column: span 3;
          font-size: 18px;
          color: gray;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.7);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}