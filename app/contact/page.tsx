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
    let newErrors:any = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.city) newErrors.city = "City required";
    if (!form.state) newErrors.state = "State required";
    if (!form.country) newErrors.country = "Country required";

    if (!form.email.trim()) newErrors.email = "Email required";

    if (!form.phone.trim()) newErrors.phone = "Phone required";

    if (!form.message.trim()) newErrors.message = "Message required";
    if (!form.city) newErrors.city = "City is required";
    if (!form.state) newErrors.state = "State is required";
    if (!form.country) newErrors.country = "Country is required";

    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.phone.trim()) newErrors.phone = "Contact is required";
    if (!form.message.trim()) newErrors.message = "Message is required";


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e:any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e:any) => {

    e.preventDefault();

    if (validate()) {

      emailjs.send(
        "service_4nyx5x7",
        "template_d99gkxl",
        form,
        "hpvAFyupAtcd8znIb"
      ).then(() => {

        setSubmitted(true);

        setTimeout(() => setSubmitted(false),3000);

        setForm({
          name:"",
          company:"",
          city:"",
          state:"",
          country:"",
          email:"",
          phone:"",
          message:""
        });

      });
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
<Popup text={popupText} clear={()=>setPopupText("")}/>
)}
</AnimatePresence>


{/* CONTACT SECTION */}

<section className="bg-gray-100 min-h-screen py-12 md:py-16 px-4 sm:px-6 lg:px-8">

<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

{/* LEFT SIDE */}

<motion.div
initial={{opacity:0,x:-60}}
animate={{opacity:1,x:0}}
className="space-y-6"
>

<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 relative inline-block">

Any Queries? Contact Us Now!
=======
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


<span className="absolute left-0 -bottom-2 h-[3px] bg-orange-600 animate-grow w-full"></span>


</h2>

<InfoCard
icon={<MapPin size={30}/>}
title="Office Address"
popup="Address copied"
setPopup={setPopupText}
>

ERA MARYA GLOBAL LOGISTICS PRIVATE LIMITED

Signet Hub, 909, 9th Floor,

Akshar Chowk, Vadodara,

Gujarat, India - 390020

</InfoCard>


<InfoCard
icon={<Phone size={30}/>}
title="Phone Numbers"
popup="Phone copied"
setPopup={setPopupText}
>

+91 9909928018

+91 8866841444

</InfoCard>


<InfoCard
icon={<Mail size={30}/>}
title="Email"
popup="Email copied"
setPopup={setPopupText}
>

info@eramarya.com

sales@eramarya.com

</InfoCard>

</motion.div>


{/* FORM */}

<motion.div
initial={{opacity:0,x:60}}
animate={{opacity:1,x:0}}
className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-xl"
>

<h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
Enter Inquiry
</h3>

{submitted && (
<div className="bg-green-100 text-green-700 p-3 mb-4 rounded">
Message Sent Successfully!
</div>
)}

<form onSubmit={handleSubmit} className="space-y-4">

<Input label="Your Name" name="name" value={form.name} onChange={handleChange} error={errors.name}/>

<Input label="Company Name" name="company" value={form.company} onChange={handleChange}/>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<Select
label="City"
name="city"
value={form.city}
onChange={handleChange}
options={["Vadodara","Ahmedabad","Surat","Mumbai"]}
error={errors.city}
/>

<Select
label="State"
name="state"
value={form.state}
onChange={handleChange}
options={["Gujarat","Maharashtra","Delhi"]}
error={errors.state}
/>

</div>

<Select
label="Country"
name="country"
value={form.country}
onChange={handleChange}
options={["India","USA","UK","Canada"]}
error={errors.country}
/>

<Input
label="Email"
name="email"
value={form.email}
onChange={handleChange}
error={errors.email}
/>

<Input
label="Phone"
name="phone"
value={form.phone}
onChange={handleChange}
error={errors.phone}
/>

<textarea
name="message"
placeholder="Your Message"
value={form.message}
onChange={handleChange}
className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
/>

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

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">

<iframe
src="https://maps.google.com/maps?q=Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed"
className="w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-xl shadow"
/>

</div>

</>

);
=======
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
>>>>>>> 6a5288c6ed6c1edc7f9af9173f5526646c22fc4e
}


/* POPUP */


function Popup({text,clear}:any){

return(

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:40}}
className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-5 py-3 rounded-full shadow-lg text-sm"
onAnimationEnd={()=>setTimeout(clear,2000)}
>

{text}

</motion.div>

);

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


function InfoCard({icon,title,children,popup,setPopup}:any){

return(

<motion.div
whileHover={{x:6}}
onClick={()=>setPopup(popup)}
className="bg-white p-5 rounded-xl shadow-md flex gap-4 items-start border-l-4 border-transparent hover:border-orange-600 active:border-orange-600 transition-all duration-300 cursor-pointer"
>

<div className="text-orange-600">
{icon}
</div>

<div className="text-sm sm:text-base break-words">

<h4 className="font-semibold text-lg">
{title}
</h4>

<div className="text-gray-600 mt-2">
{children}
</div>

</div>

</motion.div>

);
}

/* INPUT */

function Input({label,name,value,onChange,error}:any){

return(

<div>

<input
type="text"
name={name}
placeholder={label}
value={value}
onChange={onChange}
className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${error?"border-red-500":""}`}
/>

{error && <p className="text-red-500 text-sm">{error}</p>}

</div>

);
}


/* SELECT */

function Select({label,name,value,onChange,options,error}:any){

return(

<div>

<select
name={name}
value={value}
onChange={onChange}
className={`w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 ${error?"border-red-500":""}`}
>

<option value="">
Select {label}
</option>

{options.map((opt:string,i:number)=>(
<option key={i} value={opt}>
{opt}
</option>
))}

</select>

{error && <p className="text-red-500 text-sm">{error}</p>}

</div>

);

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