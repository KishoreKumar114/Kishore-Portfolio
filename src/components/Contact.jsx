import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Debug environment variables
  useEffect(() => {
    console.log("🔧 EmailJS Environment Variables:", {
      serviceId: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    });
  }, []);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // EmailJS Send Function
  const handleEmailJSSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);
    console.log("🔄 Starting email send...");

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Kishore Kumar",
          from_email: form.email,
          to_email: "kishorekumarr2k4@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      
      console.log("✅ Email sent successfully!", result);
      alert("Thank you! I will get back to you as soon as possible.");
      
      setForm({
        name: "",
        email: "",
        message: "",
      });
      
    } catch (error) {
      console.error("❌ Email sending failed:", error);
      
      // Fallback to mailto if EmailJS fails
      handleMailToSubmit();
      
    } finally {
      setLoading(false);
    }
  };

  // MailTo Fallback Function (100% Working)
  const handleMailToSubmit = () => {
    const subject = `New Message from ${form.name} - Portfolio`;
    const body = `
Name: ${form.name}
Email: ${form.email}
Message: ${form.message}

Sent from your portfolio website
    `.trim();
    
    window.location.href = `mailto:kishorekumarr2k4@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Clear form after mailto
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  // Main Submit Handler - Tries EmailJS first, then falls back to mailto
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    // Try EmailJS first, if fails it will automatically use mailto
    handleEmailJSSubmit(e);
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        {/* Contact Information */}
        <div className="mb-8">
          <h3 className="text-white text-2xl font-bold text-center mb-8">Get In Touch</h3>
          
          <div className="space-y-6">
            {/* Phone */}
            <div>
              <p className="text-[#915EFF] font-semibold mb-1">📞 Phone</p>
              <p className="text-white">+91 7695999984</p>
            </div>

            {/* Email */}
            <div>
              <p className="text-[#915EFF] font-semibold mb-1">✉️ Email</p>
              <p className="text-white">kishorekumarr2k4@gmail.com</p>
            </div>

            {/* GitHub */}
            <div>
              <p className="text-[#915EFF] font-semibold mb-1">💻 GitHub</p>
              <a href="https://github.com/kishorekumar114" target="_blank" rel="noreferrer" className="text-white hover:text-[#915EFF] transition-colors">
                github.com/kishorekumar114
              </a>
            </div>

            {/* LinkedIn */}
            <div>
              <p className="text-[#915EFF] font-semibold mb-1">🔗 LinkedIn</p>
              <a href="https://www.linkedin.com/in/kishore-kumar-20ba242b0" target="_blank" rel="noreferrer" className="text-white hover:text-[#915EFF] transition-colors">
                linkedin.com/in/kishore-kumar
              </a>
            </div>
          </div>
        </div>

        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>

          <div className="flex gap-4 flex-wrap">
            <button
              type='submit'
              className='bg-[#915EFF] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#7c3aed] transition-colors disabled:opacity-50'
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Direct MailTo Button */}
            <button
              type='button'
              onClick={handleMailToSubmit}
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold border border-[#915EFF] hover:bg-[#915EFF] transition-colors'
            >
              Use Email Client
            </button>
          </div>

          <p className="text-secondary text-sm mt-4">
            💡 <strong>Tip:</strong> If "Sending..." gets stuck, use "Use Email Client" button
          </p>
        </form>
      </motion.div>

      {/* Earth Animation */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-[700px] md:h-[650px] h-[500px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");