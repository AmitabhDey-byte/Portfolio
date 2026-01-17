import { motion } from "framer-motion";
import "../Page-styling/Navbar.css";

export default function Navbar() {
  const navVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      color: "#ff00ee",
      transition: {
        duration: 0.2,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0, 212, 255, 0.3)",
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={navVariants}
    >
      <nav className="navbar">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.a 
            href="/"
            whileHover={{ color: "#ff00ee" }}
          >
            MyPortfolio
          </motion.a>
        </motion.div>

        <motion.div className="nav-links">
          {["Projects", "About", "Skills", "Contact"].map((link) => (
            <motion.a
              key={link}
              href={`/${link}`}
              variants={linkVariants}
              whileHover="hover"
            >
              {link}
            </motion.a>
          ))}
        </motion.div>

        <div className="nav-cta">
          <motion.a
            href="/Contact"
            className="btn-contact"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Get in Touch
          </motion.a>
        </div>
      </nav>
    </motion.div>
  );
}