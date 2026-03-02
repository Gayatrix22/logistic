"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    let newErrors: any = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!form.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10 digit phone number";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">

      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-600 mt-2">
          Get in touch with our logistics experts
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">
            Send Message
          </h2>

          {submitted && (
            <p className="bg-green-100 text-green-700 p-3 rounded mb-4">
              Message sent successfully!
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Service */}
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            >
              <option value="">Select Service</option>
              <option>Road Freight</option>
              <option>Air Freight</option>
              <option>Ocean Freight</option>
              <option>Warehousing</option>
            </select>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Send Message
            </button>

          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              Office Location
            </h3>
            <p className="text-gray-600">
              Vadodara, Gujarat - India
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              Phone
            </h3>
            <p className="text-gray-600">
              +91 9909928018
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              Email
            </h3>
            <p className="text-gray-600">
              info@eramarya.com
            </p>
          </div>

        </div>
      </div>

      {/* Map */}
      <div className="max-w-7xl mx-auto mt-16">
        <iframe
          src="https://maps.google.com/maps?q=Vadodara%20Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-[400px] rounded-xl shadow"
        ></iframe>
      </div> 

    </main>
  );
}