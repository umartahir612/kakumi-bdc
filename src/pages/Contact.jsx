import { useState } from "react";
import "./Contact.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* Banner */}
      <div className="contact-banner">📞 Get in Touch with Us</div>

      {/* Contact Information */}
      <div className="contact-info">
        <h2>Our Office</h2>
        <p><strong>Address:</strong> Suite 13, Ground Floor,wuse zone 4 Plaza, Abuja</p>
        <p><strong>Email:</strong> support@kakumibdc.com</p>
        <p><strong>Phone:</strong> +234 803 786 9368</p>
        <p><strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 5:00 PM</p>
      </div>

      {/* Google Map */}
      <div className="map-container">
        <iframe
          title="Kakumi BDC Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.506662632447!2d7.489297!3d9.057854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a5d1741c6f1%3A0x2db657d7df0e90!2sWuse%20Zone%204!5e0!3m2!1sen!2sng!4v1699999999999"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        {submitted ? (
          <p className="success-msg">✅ Thank you! Your message has been sent.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        )}
      </div>

      {/* Social Media */}
      <div className="social-links">
        <h2>Follow Us</h2>
        <a href="https://facebook.com">🌐 Facebook</a>
        <a href="https://twitter.com">🐦 Twitter</a>
        <a href="https://instagram.com">📸 Instagram</a>
        <a href="https://linkedin.com">💼 LinkedIn</a>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>❓ Frequently Asked Questions</h2>
        <details>
          <summary>How do I exchange currencies?</summary>
          <p>You can visit our office or contact us online to request a transaction.</p>
        </details>
        <details>
          <summary>Do you provide receipts?</summary>
          <p>Yes, we provide official receipts for all transactions.</p>
        </details>
        <details>
          <summary>Is Kakumi BDC licensed?</summary>
          <p>Yes, we are licensed by the Central Bank of Nigeria (CBN).</p>
        </details>
      </div>
    </div>
  );
}
