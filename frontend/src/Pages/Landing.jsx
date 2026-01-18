import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TextType from "../component/TextType";
import "../Page-styling/Landing.css";
import {
  pageVariants,
  staggerContainerVariants,
  staggerItemVariants,
  buttonHoverVariants,
} from "../utils/animations";
import avatar from "../assets/avatar.jpeg"; 

const MotionLink = motion(Link);

export default function Landing() {
  return (
    <motion.div
      className="page"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <div className="landing-layout">
        <motion.div
          className="page-content"
          variants={staggerContainerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={staggerItemVariants}>
            <TextType
              text={["Hello There!", "I'm Amitabh Dey", "Welcome to My Portfolio"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="|"
            />
          </motion.div>

          <motion.p variants={staggerItemVariants}>
            A creative developer crafting beautiful, functional digital
            <br />
            experiences that blend design and technology seamlessly.
          </motion.p>

          <motion.div className="links" variants={staggerItemVariants}>
            <MotionLink
              to="/projects"
              className="btn"
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View My Projects
            </MotionLink>

            <MotionLink
              to="/about"
              className="btn-2"
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Learn More
            </MotionLink>
          </motion.div>
        </motion.div>

        <div className="landing-image">
          <img src={avatar} alt="Profile" />
        </div>
      </div>
    </motion.div>
  );
}
