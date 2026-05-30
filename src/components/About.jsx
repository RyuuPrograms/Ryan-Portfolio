import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
      >
        About Me
      </motion.h2>

      <p>
        I'm a Software Engineer passionate about
        web development, AI engineering and
        building modern digital experiences.
      </p>
    </section>
  );
}