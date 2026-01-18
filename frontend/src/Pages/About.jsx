import { motion } from "framer-motion";
import "../Page-styling/About.css";

export default function About() {
  return (
    <motion.section
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
  <motion.div
  className="about-header"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h1 className="gradient-text">
    About Me
  </h1>

  <motion.p
    className="about-subtitle"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.6 }}
  >
    Developer • Learner • Problem Solver
  </motion.p>
</motion.div>


      <div className="about-grid">
        <motion.div
          className="content-card"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <p>
            B.Tech IT student at Narula Institute of Technology and a MERN stack
            developer. I enjoy building full-stack applications and working with
            modern web technologies while improving my problem-solving skills.
          </p>
        </motion.div>

        <motion.div
          className="content-card"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <p>
            My long-term goal is to become a well-rounded software engineer who
            designs scalable, high-quality systems, contributes to meaningful
            products, and continuously grows with new tools and technologies.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
