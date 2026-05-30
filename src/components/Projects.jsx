import { useState } from "react";
import "/src/styles/Projects.css";

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  const projects = [
    {
      title: "SchoolTrack: Facial Recognition Attendance System",
      description:
        "AI-powered attendance system using facial recognition + mobile dashboard for real-time tracking.",
      link: "https://drive.google.com/drive/folders/1zA2c18enPT4Gy29ysBw66OG62fzASij4",
    },
    {
      title: "Text Summarizer: AI-Powered Article Condenser",
      description:
        "NLP-based tool that compresses long articles into clean AI-generated summaries.",
      link: "https://drive.google.com/drive/folders/16k6YoE3f-LRUSpJNQ2W99iT3-agZ_eEV?usp=sharing",
    },
  ];

  const AnimatedText = ({ text }) => {
    return (
      <span className="animated-text">
        {text.split("").map((char, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.03}s` }}>
            {char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            onMouseEnter={() => setHovered(project)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3>
              <AnimatedText text={project.title} />
            </h3>

            <span className="view-text">Click to open →</span>
          </a>
        ))}
      </div>

      {hovered && (
        <div className="popup-overlay">
          <div className="popup-card">
            <h3>{hovered.title}</h3>
            <p>{hovered.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}