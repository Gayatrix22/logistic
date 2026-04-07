"use client";

import { useState, useEffect } from "react";
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

  // ✅ VALIDATION
  const validate = () => {
    let newErrors: any = {};

    const name = form.name.trim();
    if (!name) newErrors.name = "Name is required";
    else if (name.length < 3) newErrors.name = "Min 3 characters";
    else if (!/^[a-zA-Z\s]+$/.test(name))
      newErrors.name = "Only letters allowed";

    if (!form.company.trim()) newErrors.company = "Company required";
    if (!form.city.trim()) newErrors.city = "City required";
    if (!form.state.trim()) newErrors.state = "State required";
    if (!form.country.trim()) newErrors.country = "Country required";

    const email = form.email.trim();
    if (!email) newErrors.email = "Email required";
    else if (!/^\S+@\S+\.\S+$/.test(email))
      newErrors.email = "Invalid email";

    const phone = form.phone.trim();
    if (!phone) newErrors.phone = "Phone required";
    else if (!/^[0-9]{10}$/.test(phone))
      newErrors.phone = "Enter 10 digit number";

    const message = form.message.trim();
    if (!message) newErrors.message = "Message required";
    else if (message.length < 10)
      newErrors.message = "Min 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ SUBMIT
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

      let data;
      try {
        data = await res.json();
      } catch {
        alert("Invalid server response");
        return;
      }

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
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      alert("Server error / CORS issue");
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

            {/* HEADING + LINE */}
            <div>
              <h2 className="text-4xl font-bold text-blue-900 inline-block">
                Any Queries? Contact Us Now!
              </h2>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-orange-500 mt-2 rounded"
              />
            </div>

            {/* CARDS */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.25 },
                },
              }}
            >

              <InfoCard icon={<MapPin size={32} />} title="Office Address" popup="Copied!" setPopup={setPopupText}>
                <span className="font-semibold block mb-1">
                  ERA MARYA GLOBAL LOGISTICS PRIVATE LIMITED
                </span>
                <p>Signet Hub, 909, 9th Floor</p>
                <p>Akshar Chowk, Vadodara</p>
                <p>Gujarat, India - 390020</p>
              </InfoCard>

              <InfoCard icon={<Phone size={32} />} title="Telephone number" popup="Copied!" setPopup={setPopupText}>
                <span>(+91) 9909928018</span>
                <p>(+91) 8866841444</p>
              </InfoCard>

              <InfoCard icon={<Mail size={32} />} title="Mail address" popup="Copied!" setPopup={setPopupText}>
                <span>info@eramarya.com</span>
                <p>sales@eramarya.com</p>
              </InfoCard>

            </motion.div>

          </motion.div>

          {/* FORM */}
          <motion.div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              Enter Inquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              <Input name="name" value={form.name} onChange={handleChange} placeholder="Name" error={errors.name} />
              <Input name="company" value={form.company} onChange={handleChange} placeholder="Company" error={errors.company} />

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
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

              <button className="w-full bg-blue-800 text-white py-3 rounded hover:bg-blue-900">
                Send Message
              </button>

              {submitted && (
                <div className="bg-green-100 text-green-700 p-3 rounded">
                  Message Sent Successfully!
                </div>
              )}

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
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

/* POPUP FIXED */
function Popup({ text, clear }: any) {
  useEffect(() => {
    const timer = setTimeout(clear, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg">
      {text}
    </div>
  );
}

/* INFO CARD WITH ANIMATION */
function InfoCard({ icon, title, children, popup, setPopup }: any) {
  return (
    <motion.div
      onClick={() => setPopup(popup)}
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="relative bg-white p-6 rounded-xl flex gap-4 cursor-pointer overflow-hidden"
    >
      {/* 🔥 Animated Left Line */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 0.5 }}
        className="absolute left-0 top-0 w-1 bg-orange-500 rounded"
      />

      {/* ICON */}
      <motion.div
        whileHover={{ rotate: 10, scale: 1.1 }}
        className="text-orange-600 ml-2"
      >
        {icon}
      </motion.div>

      {/* TEXT */}
      <div>
        <h4 className="font-semibold">{title}</h4>
        <div className="text-gray-600 text-sm">{children}</div>
      </div>
    </motion.div>
  );
}