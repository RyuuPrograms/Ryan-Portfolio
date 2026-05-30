import { useState } from "react";
import emailjs from "@emailjs/browser";
import "/src/styles/Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_o6mwtgr",
        "template_wor09w6",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "V9RjFiTHULh2ZhvUK"
      )
      .then(
        () => {
          setStatus("Message sent successfully 💜");
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Failed to send message ❌");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        {/* LEFT SIDE INFO */}
        <div className="contact-info">
          <h2>Let’s Work Together</h2>
          <p>
            Got a project, idea, or opportunity? Feel free to reach out.
          </p>

          <div className="contact-links">
            <a href="mailto:youremail@gmail.com">📧 ryuuprograms@gmail.com</a>

            <a
              href="https://discord.com/users/yourdiscordid"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Discord: RyuenYu
            </a>

            <a
              href="https://github.com/RyuuPrograms"
              target="_blank"
              rel="noopener noreferrer"
            >
              🐙 GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ryan-rasalan-897907386/"
              target="_blank"
              rel="noopener noreferrer"
            >
              💼 LinkedIn
            </a>
            <a
              href="https://www.facebook.com/rasalan.ryan"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Facebook: Ryan Rasalan
            
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message..."
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>

          {status && <p className="status">{status}</p>}
        </form>

      </div>
    </section>
  );
}