"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    company: "",
    city: "",
    state: "",
    country: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  /* ================= VALIDATION ================= */
  const validate = () => {
    let err: any = {};

    if (!form.name.trim()) err.name = "Name required";
    if (!form.company.trim()) err.company = "Company required";
    if (!form.city.trim()) err.city = "City required";
    if (!form.state.trim()) err.state = "State required";
    if (!form.country.trim()) err.country = "Country required";
    
    if (!form.name.trim()) {
  err.name = "Name required";
} else if (!/^[A-Za-z\s]+$/.test(form.name)) {
  err.name = "Only letters allowed";
} else if (form.name.length < 3) {
  err.name = "Minimum 3 characters required";
} 

    if (!form.email.trim()) err.email = "Email required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      err.email = "Invalid email";

    if (!form.phone.trim()) err.phone = "Phone required";
    else if (!/^[0-9]{10}$/.test(form.phone))
      err.phone = "Enter 10 digit number";

    if (!form.message.trim()) err.message = "Message required";
    else if (form.message.length < 10)
      err.message = "Min 10 characters";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await fetch("http://127.0.0.1:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);

        setForm({
          name: "",
          company: "",
          city: "",
          state: "",
          country: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Something went wrong");
      }
    } catch {
      alert("Server error");
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen py-16 px-6">

      {/* 🔥 TOP GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-xl">

        {/* LEFT */}
        <div className="bg-orange-500 text-white p-10 space-y-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold">
            Contact Our Logistics Experts
          </h2>

          <div className="space-y-5 text-sm">

            {/* Address */}
            <div>
              <p className="font-semibold flex items-center gap-2 mb-1">
                <MapPin className="bg-white/20 p-1 rounded-full" size={22} />
                <span>Office Address</span>
              </p>

              <p className="font-semibold text-base">
                ERA MARYA GLOBAL LOGISTICS PRIVATE LIMITED
              </p>
              <p>Signet Hub, 909, 9th Floor</p>
              <p>Akshar Chowk, Vadodara</p>
              <p>Gujarat, India - 390020</p>
            </div>

            {/* Phone */}
            <div>
              <p className="font-semibold flex items-center gap-2">
                <Phone className="bg-white/20 p-1 rounded-full" size={22} />
                <span>Telephone</span>
              </p>
              <p>(+91) 9909928018</p>
              <p>(+91) 8866841444</p>
            </div>

            {/* Email */}
            <div>
              <p className="font-semibold flex items-center gap-2">
                <Mail className="bg-white/20 p-1 rounded-full" size={22} />
                <span>Email</span>
              </p>
              <p>info@eramarya.com</p>
              <p>sales@eramarya.com</p>
            </div>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white p-8">
          <h3 className="text-2xl font-bold mb-6">Send Inquiry</h3>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="grid md:grid-cols-2 gap-4">
              <Input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" error={errors.name} />
              <Input name="email" value={form.email} onChange={handleChange} placeholder="Email" error={errors.email} />
            </div>

            <Input name="company" value={form.company} onChange={handleChange} placeholder="Company" error={errors.company} />

            <div className="grid md:grid-cols-2 gap-4">
              <Input name="city" value={form.city} onChange={handleChange} placeholder="City" error={errors.city} />
              <Input name="state" value={form.state} onChange={handleChange} placeholder="State" error={errors.state} />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input name="country" value={form.country} onChange={handleChange} placeholder="Country" error={errors.country} />
              <Input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" error={errors.phone} />
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              className={`w-full p-3 border rounded outline-none focus:ring-2 focus:ring-orange-400 ${
                errors.message ? "border-red-500" : ""
              }`}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            <button className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition duration-300 transform hover:scale-[1.02]">
              Send Inquiry
            </button>

            {submitted && (
              <div className="bg-green-100 text-green-700 p-3 rounded text-center font-medium animate-pulse">
                ✅ Message Sent Successfully!
              </div>
            )}
          </form>
        </div>

      </div>

      {/* 🔥 LOCATION HEADING */}
      <div className="text-center mt-12 mb-6">
        <h2 className="text-3xl font-bold">Our Location</h2>
        <p className="text-gray-600 text-sm">
          Visit our office or find us easily on the map
        </p>
      </div>

      {/* 🔥 MAP CARD */}
      <div className="flex justify-center px-4">
        <div className="w-full max-w-5xl bg-white p-4 rounded-2xl shadow-xl">
          <iframe
            src="https://www.google.com/maps?q=Akshar%20Chowk%20Vadodara&output=embed"
            className="w-full h-[350px] rounded-xl border-0"
            loading="lazy"
          ></iframe>

          <div className="text-center mt-4">
            <a
              href="https://www.google.com/maps?q=Akshar%20Chowk%20Vadodara"
              target="_blank"
              className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}

/* INPUT */
function Input({ name, value, onChange, placeholder, error }: any) {
  return (
    <div>
    <input
  name={name}
  value={value}
  onChange={onChange}
  placeholder={placeholder}
  autoComplete="off"
  className={`w-full p-3 border rounded outline-none focus:ring-2 focus:ring-orange-400 ${
    error ? "border-red-500" : ""
  }`}
/>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}