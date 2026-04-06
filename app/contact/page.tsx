"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [popupText, setPopupText] = useState("");

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

  // ✅ VALIDATION (FIXED)
  const validate = () => {
    let newErrors: any = {};

    // Name
    const name = form.name.trim();
    if (!name) {
      newErrors.name = "Name is required";
    } else if (name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name = "Name can only contain letters and spaces";
    }  

      // Company
    if (!form.company.trim()) {
      newErrors.company = "Company is required";
    }

    // City
    if (!form.city.trim()) {
      newErrors.city = "City is required";
    }

    // State
    if (!form.state.trim()) {
      newErrors.state = "State is required";
    }

    // Country
    if (!form.country.trim()) {
      newErrors.country = "Country is required";
    }

    // Email
    const email = form.email.trim();
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Enter valid email";
    }

    // Phone
    const phone = form.phone.trim();
    if (!phone) {
      newErrors.phone = "Contact is required";
    } else if (!/^[0-9]{10}$/.test(phone)) {
      newErrors.phone = "Enter valid 10 digit number";
    }

    // Message
    const message = form.message.trim();
    if (!message) {
      newErrors.message = "Message is required";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (validate()) {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        const data = await res.json();

        if (data.status) {
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
      } catch (error) {
        console.log(error);
        alert("Server error");
      }
    }
  };

  return (
    <>
      <AnimatePresence>
        {popupText && (
          <Popup text={popupText} clear={() => setPopupText("")} />
        )}
      </AnimatePresence>

      <section className="bg-gray-100 min-h-screen py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-blue-900">
              Any Queries? Contact Us Now!
            </h2>

            <InfoCard icon={<MapPin size={32} />} title="Office Address" popup="Copied!" setPopup={setPopupText}>
              ERA MARYA GLOBAL LOGISTICS PRIVATE LIMITED
            </InfoCard>

            <InfoCard icon={<Phone size={32} />} title="Phone" popup="Copied!" setPopup={setPopupText}>
              +91 9909928018
            </InfoCard>

            <InfoCard icon={<Mail size={32} />} title="Email" popup="Copied!" setPopup={setPopupText}>
              info@eramarya.com
            </InfoCard>
          </motion.div>

          {/* FORM */}
          <motion.div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              Enter Inquiry
            </h3>

            {submitted && (
              <div className="bg-green-100 text-green-700 p-3 mb-4 rounded">
                Message Sent Successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

              <Input name="name" value={form.name} onChange={handleChange} placeholder="Name" error={errors.name} />
              <Input name="company" value={form.company} onChange={handleChange} placeholder="Company" />

              <Input name="city" value={form.city} onChange={handleChange} placeholder="City" error={errors.city} />
              <Input name="state" value={form.state} onChange={handleChange} placeholder="State" error={errors.state} />
              <Input name="country" value={form.country} onChange={handleChange} placeholder="Country" error={errors.country} />

              <Input name="email" value={form.email} onChange={handleChange} placeholder="Email" error={errors.email} />
              <Input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" error={errors.phone} />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                className={`w-full p-3 border rounded ${errors.message ? "border-red-500" : ""}`}
              />
              {errors.message && <p className="text-red-500">{errors.message}</p>}

              <button className="w-full bg-blue-800 text-white py-3 rounded">
                Send Message
              </button>

            </form>
          </motion.div>
        </div>
      </section>
    </>
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
        className={`w-full p-3 border rounded ${error ? "border-red-500" : ""}`}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

/* POPUP */
function Popup({ text, clear }: any) {
  setTimeout(clear, 2000);
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-6 py-3 rounded-full">
      {text}
    </div>
  );
}

/* INFO CARD */
function InfoCard({ icon, title, children, popup, setPopup }: any) {
  return (
    <div onClick={() => setPopup(popup)} className="bg-white p-6 rounded-xl shadow-md flex gap-4 cursor-pointer">
      <div className="text-orange-600">{icon}</div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <div className="text-gray-600 text-sm">{children}</div>
      </div>
    </div>
  );
}