// Import Images
import home1 from "../img/home1.png";

// Import Components
import Wave from "./Wave";

// Import Styles
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";

// Animations
import { motion } from "framer-motion";
import { titleAnimation, fadeAnimation, photoAnimation } from "../animation";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </StyledHide>
        </div>
        <motion.p variants={fadeAnimation}>
          Contact us for any photography or video ideas that ypu have. We have
          professionals with amazing skills.
        </motion.p>
        <motion.button variants={fadeAnimation}>Contact us</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="Man holding camera"
        />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;
