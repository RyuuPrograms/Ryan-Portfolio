import "/src/styles/Hero.css";
import TypingName from "./TypingName";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <section id="hero" className="hero">
      <div className="purple-glow"></div>

      <div className="top-container">
        <button onClick={() => scrollToSection("hero")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("projects")}>Projects</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </div>

      <div className="hero-container">
        <div className="hero-left">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="tag"
          >
            SOFTWARE ENGINEER
          </motion.span>

          <TypingName />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Building modern web applications,
            AI-powered systems, and interactive
            digital experiences.
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => scrollToSection("projects")}
            className="view-projects"
          >
            View Projects
          </motion.button>
        </div>

        <motion.div
          className="hero-right"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        >
          <div className="portrait-wrapper">
            <img
              src="portrait.jpg"
              alt="portrait"
              className="portrait"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}