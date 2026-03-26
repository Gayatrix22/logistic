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

  // ✅ Categories
  const categories = ["All", "Truck", "Warehouse", "Shipping", "Delivery"];

  const handleFilter = (cat: string) => {
    setFilter(cat);
  };

  // ✅ API CALL
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/galleries")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // debug
        setImages(data);
      });
  }, []);

  // ✅ Filter
  const filteredImages =
    filter === "All"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[35vh] flex items-center justify-center text-white text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Global-Logistics.jpg')" }}
        ></div>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <p className="mt-2">
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
            filteredImages.map((img) => {
              console.log(img.image); // ✅ debug

              return (
                <div
                  key={img.id}
                  className="card"
                  onClick={() => setSelectedImage(img.image)} // ✅ FIXED
                >
                  <img
                    src={img.image} // ✅ USE API IMAGE
                    alt={img.category}
                    onError={() =>
                      console.log("Image failed:", img.image)
                    }
                  />

                  <div className="overlay">
                    <span>{img.category}</span>
                  </div>
                </div>
              );
            })
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

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
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