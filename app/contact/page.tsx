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

  const validate = () => {
    let newErrors: any = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.city) newErrors.city = "City is required";
    if (!form.state) newErrors.state = "State is required";
    if (!form.country) newErrors.country = "Country is required";

     if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!form.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = "Invalid email (/^\S+@\S+\.\S+$/)";
    } 

     if (!form.phone.trim()) {
      newErrors.phone = "Contact is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10 digit number";
    }

     if (!form.message.trim()) {
  newErrors.message = "Message is required";
} else if (form.message.length < 10) {
  newErrors.message = "Message must be at least 10 characters";
}
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

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
      {/* POPUP */}
      <AnimatePresence>
        {popupText && (
          <Popup text={popupText} clear={() => setPopupText("")} />
        )}
      </AnimatePresence>

      {/* CONTACT */}
      <section className="bg-gray-100 min-h-screen py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold text-blue-900 relative inline-block">
              Any Queries? Contact Us Now!
              <span className="absolute left-0 -bottom-2 h-[3px] bg-orange-600 animate-grow w-full"></span>
            </h2>

            <InfoCard icon={<MapPin size={32} />} title="Office Address" popup="Office address copied!" setPopup={setPopupText}>
              <p>ERA MARYA GLOBAL LOGISTICS PRIVATE LIMITED</p>
              <p>Signet Hub, 909, 9th Floor,</p>
              <p>Akshar Chowk, Vadodara,</p>
              <p>Gujarat, India - 390020</p>
            </InfoCard>

            <InfoCard icon={<Phone size={32} />} title="Phone Numbers" popup="Phone numbers copied!" setPopup={setPopupText}>
              +91 9909928018 <br />
              +91 8866841444
            </InfoCard>

            <InfoCard icon={<Mail size={32} />} title="Email" popup="Email copied!" setPopup={setPopupText}>
              info@eramarya.com <br />
              sales@eramarya.com
            </InfoCard>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                className={`w-full p-3 border rounded-lg ${errors.message ? "border-red-500" : ""}`}
              />
              {errors.message && <p className="text-red-500">{errors.message}</p>}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-800 text-white py-3 rounded"
              >
                Send Message
              </motion.button>

            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* POPUP */
function Popup({ text, clear }: any) {
  setTimeout(clear, 2000);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg"
    >
      {text}
    </motion.div>
  );
}

/* INFO CARD */
function InfoCard({ icon, title, children, popup, setPopup }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setPopup(popup)}
      className="bg-white p-6 rounded-xl shadow-md flex gap-4 cursor-pointer"
    >
      <div className="text-orange-600">{icon}</div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <div className="text-gray-600 text-sm">{children}</div>
      </div>
    </motion.div>
  );
}

/* INPUT */
function Input({ name, value, onChange, placeholder, error }: any) {
  return (
    <div>
      <motion.input
        whileFocus={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
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