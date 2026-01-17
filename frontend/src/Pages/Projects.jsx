import { motion } from "framer-motion";
import { pageVariants, staggerContainerVariants, staggerItemVariants } from "../utils/animations";
import "../Page-styling/Projects.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A creative web application built with React and modern CSS.",
      tags: ["React", "JavaScript", "CSS"],
    },
    {
      id: 2,
      title: "Project Two",
      description: "Full-stack application with dynamic features and smooth animations.",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 3,
      title: "Project Three",
      description: "Interactive portfolio showcase with advanced animations.",
      tags: ["React", "Framer Motion", "Vite"],
    },
  ];

  return (
    <motion.div
      className="projects-container"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <motion.div variants={staggerContainerVariants}>
        <motion.h1 variants={staggerItemVariants}>My Projects</motion.h1>

        <motion.div className="projects-grid" variants={staggerContainerVariants}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={staggerItemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    className="tag"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}