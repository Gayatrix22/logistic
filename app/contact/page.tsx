"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

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

  // VALIDATION
  const validate = () => {
    let newErrors: any = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    else if (!/^[A-Za-z\s]+$/.test(form.name))
      newErrors.name = "Name is not valid";

    if (!form.city) newErrors.city = "City is required";
    if (!form.state) newErrors.state = "State is required";
    if (!form.country) newErrors.country = "Country is required";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Email is not valid";

    if (!form.phone.trim()) newErrors.phone = "Contact is required";
    else if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = "Enter valid 10 digit number";

    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.length < 10)
      newErrors.message = "Message must be 10+ characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validate()) {
      const templateParams = {
        name: form.name,
        company: form.company,
        city: form.city,
        state: form.state,
        country: form.country,
        email: form.email,
        phone: form.phone,
        message: form.message,
      };

      emailjs
        .send(
          "service_4nyx5x7",
          "template_d99gkxl",
          templateParams,
          "hpvAFyupAtcd8znIb"
        )
        .then(
          () => {
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
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    }
  };

  return (
    <>
      {/* POPUP */}
      <AnimatePresence>
        {popupText && <Popup text={popupText} clear={() => setPopupText("")} />}
      </AnimatePresence>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/Global-Logistics.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
            Home <span className="text-red-500 mx-2">»</span> Contact Us
          </p>
        </motion.div>
      </motion.section>

      {/* CONTACT */}
      <section className="bg-gray-100 min-h-screen py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-blue-900 relative inline-block">
              Any Queries? Contact Us Now!
              <span className="absolute left-0 -bottom-2 h-[3px] bg-orange-600 animate-grow w-full"></span>
            </h2>

            <InfoCard
              icon={<MapPin size={32} />}
              title="Office Address"
              popup="Office address copied!"
              setPopup={setPopupText}
            >
             <p> ERA MARYA GLOBAL LOGISTICS PRIVATE LIMITED </p>
              <p>Signet Hub, 909, 9th Floor,</p>
              <p>Akshar Chowk, Vadodara,</p>
             <p> Gujarat, India - 390020</p>
            </InfoCard>

            <InfoCard
              icon={<Phone size={32} />}
              title="Phone Numbers"
              popup="Phone numbers copied!"
              setPopup={setPopupText}
            >
              +91 9909928018 <br />
              +91 8866841444
            </InfoCard>

            <InfoCard
              icon={<Mail size={32} />}
              title="Email"
              popup="Email copied!"
              setPopup={setPopupText}
            >
              info@eramarya.com <br />
              sales@eramarya.com
            </InfoCard>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              Enter Inquiry
            </h3>

            {submitted && (
              <div className="bg-green-100 text-green-700 p-3 mb-4 rounded">
                Message Sent Successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input label="Your Name" name="name" value={form.name} onChange={handleChange} error={errors.name} />
              <Input label="Company Name" name="company" value={form.company} onChange={handleChange} />

              <div className="grid grid-cols-2 gap-4">
                <Select label="City" name="city" value={form.city} onChange={handleChange}
                  options={["Vadodara", "Ahmedabad", "Surat", "Mumbai"]} error={errors.city} />

                <Select label="State" name="state" value={form.state} onChange={handleChange}
                  options={["Gujarat", "Maharashtra", "Delhi", "Rajasthan"]} error={errors.state} />
              </div>

              <Select label="Country" name="country" value={form.country} onChange={handleChange}
                options={["India", "USA", "UK", "Canada", "Australia"]} error={errors.country} />

              <Input label="Email Address" name="email" value={form.email} onChange={handleChange} error={errors.email} />
              <Input label="Contact Number" name="phone" value={form.phone} onChange={handleChange} error={errors.phone} />

              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.message ? "border-red-500" : ""}`}
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

              <button
                type="submit"
                className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* MAP */}
      <div className="max-w-7xl mx-auto mt-16 px-6 mb-16">
        <iframe
          src="https://maps.google.com/maps?q=Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-[400px] rounded-xl shadow"
        ></iframe>
      </div>

      <style>{`
        @keyframes grow {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-grow {
          animation: grow 1.1s ease-out forwards;
        }
      `}</style>
    </>
  );
}

/* POPUP */
function Popup({ text, clear }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg"
      onAnimationEnd={() => setTimeout(clear, 2000)}
    >
      {text}
    </motion.div>
  );
}

/* INFO CARD */
function InfoCard({ icon, title, children, popup, setPopup }: any) {
  return (
    <motion.div
      whileHover={{ x: 6 }}
      transition={{ type: "spring", stiffness: 200 }}
      onClick={() => setPopup(popup)}
      className="bg-white p-6 rounded-xl shadow-md flex gap-4 items-start border-l-4 border-transparent hover:border-orange-600 cursor-pointer"
    >
      <div className="text-orange-600">{icon}</div>
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-gray-600 mt-2 text-sm">{children}</p>
      </div>
    </motion.div>
  );
}

/* INPUT */
function Input({ label, name, value, onChange, error }: any) {
  return (
    <div>
      <input
        type="text"
        name={name}
        placeholder={label}
        value={value}
        onChange={onChange}
        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${error ? "border-red-500" : ""}`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

/* SELECT */
function Select({ label, name, value, onChange, options, error }: any) {
  return (
    <div>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 ${error ? "border-red-500" : ""}`}
      >
        <option value="">Select {label}</option>
        {options.map((opt: string, idx: number) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}