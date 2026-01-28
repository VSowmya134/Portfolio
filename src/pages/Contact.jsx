import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animationVariants';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setMessageStatus('Thank you! Your message has been sent.');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setMessageStatus(''), 3000);
    }, 1000);
  };

  return (
    <SectionWrapper idName="contact">
      <div className="flex justify-center items-center min-h-[60vh] px-4">
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="w-full max-w-3xl bg-gray-800 p-10 rounded-2xl shadow-xl"
        >
          <p className="text-sm text-teal-400 uppercase tracking-wider mb-2">
            Get in touch
          </p>
          <h2 className="text-3xl font-bold text-white mb-6">Contact Me</h2>

          <label className="flex flex-col mb-4">
            <span className="text-white font-medium mb-2">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-gray-900 py-3 px-4 rounded-lg placeholder:text-gray-400 text-white outline-none"
              required
            />
          </label>

          <label className="flex flex-col mb-4">
            <span className="text-white font-medium mb-2">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="bg-gray-900 py-3 px-4 rounded-lg placeholder:text-gray-400 text-white outline-none"
              required
            />
          </label>

          <label className="flex flex-col mb-4">
            <span className="text-white font-medium mb-2">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="6"
              className="bg-gray-900 py-3 px-4 rounded-lg placeholder:text-gray-400 text-white outline-none resize-none"
              required
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-teal-600 hover:bg-teal-700 py-3 px-6 rounded-lg text-white font-semibold w-full mt-2 transition-all duration-300"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {messageStatus && (
            <p className="mt-4 text-center text-green-400">{messageStatus}</p>
          )}
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
