import { motion } from "framer-motion";
import { pageVariants, staggerContainerVariants, staggerItemVariants, buttonHoverVariants } from "../utils/animations";
import "../Page-styling/Contact.css";

export default function Contact() {
  return (
    <motion.div
      className="contact-container"
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
        <motion.span className="btn-contact-header" variants={staggerItemVariants}>Get in Touch</motion.span>
        
        <motion.h2 variants={staggerItemVariants}>Let's Work Together</motion.h2>
        
        <motion.p className="contact-content" variants={staggerItemVariants}>
          Have a project in mind? I'd love to hear about it. Send me a message 
          and let's create something amazing together.
        </motion.p>

        <motion.div className="contact-wrapper" variants={staggerItemVariants}>
          <motion.div className="left" variants={staggerItemVariants}>
            <h3>Email</h3>
            <motion.a 
              href="mailto:amitabhdey101@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              amitabhdey101@gmail.com
            </motion.a>
            <h3>Location</h3>
            <p>Kolkata, India</p>
          </motion.div>

          <motion.div className="right" variants={staggerItemVariants}>
            <motion.form className="info">
              <motion.input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required
                whileFocus={{ scale: 1.02, boxShadow: "0 0 10px rgba(0,212,255,0.2)" }}
              />
              <motion.input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required
                whileFocus={{ scale: 1.02, boxShadow: "0 0 10px rgba(0,212,255,0.2)" }}
              />
              <motion.input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                required
                whileFocus={{ scale: 1.02, boxShadow: "0 0 10px rgba(0,212,255,0.2)" }}
              />
              <motion.textarea 
                name="message" 
                rows="6" 
                placeholder="Your Message" 
                required
                whileFocus={{ scale: 1.02, boxShadow: "0 0 10px rgba(0,212,255,0.2)" }}
              />
              <motion.button 
                type="submit"
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}