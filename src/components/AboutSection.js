import React from 'react';

// Import Images
import home1 from '../img/home1.png';

// Import Styles
import styled from 'styled-components';
import { StyledAbout, StyledDescription, StyledImage, StyledHide } from '../styles';

//Framer Motion
import { motion } from  'framer-motion';

const AboutSection = () => {

    return (
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <motion.h2>We work to make</motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2>your <span>dreams</span> come</motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2>true.</motion.h2>
                    </StyledHide>
                </div>
                <p>Contact us for any photography or video ideas that ypu have. We have professionals with amazing skills.</p>
                <button>Contact us</button>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt="Man holding camera" />
            </StyledImage>
        </StyledAbout>
    );
};

export default AboutSection;