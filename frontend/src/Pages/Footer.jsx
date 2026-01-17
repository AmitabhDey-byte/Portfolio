import { motion } from "framer-motion";
import { pageVariants, staggerContainerVariants, staggerItemVariants } from "../utils/animations";
import "../Page-styling/Footer.css";

export default function Footer() {
  return (
    <motion.div
      className="footer-container"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <motion.div
        variants={staggerContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1 variants={staggerItemVariants}>Let's Connect</motion.h1>

        <motion.div className="footer-content">
          <motion.div className="footer-section" variants={staggerItemVariants}>
            <h3>Follow Me</h3>
            <div className="social-links">
              <motion.a href="https://www.instagram.com/amitabh_dey" className="social-link" whileHover={{ y: -5 }}>
                ⓕ
              </motion.a>

              <motion.a href="https://www.linkedin.com/in/amitabh-dey101" className="social-link" whileHover={{ y: -5 }}>
                in
              </motion.a>
              <motion.a href="https://github.com/AmitabhDey-byte" className="social-link" whileHover={{ y: -5 }}>
                📘
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="footer-divider" variants={staggerItemVariants} />

        <motion.div className="footer-bottom" variants={staggerItemVariants}>
          <p>&copy; 2024 Amitabh Dey. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}