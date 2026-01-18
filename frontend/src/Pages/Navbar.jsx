import { Link } from "react-router-dom";
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
          <motion.Link 
            to="/"
            whileHover={{ color: "#ff00ee" }}
          >
            MyPortfolio
          </motion.Link>
        </motion.div>

        <motion.div className="nav-links">
          {["projects", "about", "skills", "contact"].map((link) => (
            <motion.Link
              key={link}
              to={`/${link}`}
              variants={linkVariants}
              whileHover="hover"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </motion.Link>
          ))}
        </motion.div>

        <div className="nav-cta">
          <motion.Link
            to="/contact"
            className="btn-contact"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Get in Touch
          </motion.Link>
        </div>
      </nav>
    </motion.div>
  );
}