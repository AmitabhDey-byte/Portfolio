import { motion } from "framer-motion";
import { pageVariants, staggerContainerVariants, staggerItemVariants } from "../utils/animations";
import "../Page-styling/Projects.css";

export default function Projects() {
 return(
    <>
      <motion.div
        className="page"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <motion.div
          className="page-content"
          variants={staggerContainerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={staggerItemVariants}>My Projects</motion.h1>
          <motion.p variants={staggerItemVariants}>
            Here are some of my recent projects.
          </motion.p>
        </motion.div>
      </motion.div>
    </>
 )
}
