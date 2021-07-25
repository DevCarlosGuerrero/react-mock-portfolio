import React from 'react';

// Import Images

import home1 from '../img/home1.png';

// Import Styles
import styled from 'styled-components';
import { StyledAbout, StyledDescription, StyledImage, StyledHide } from '../styles';

const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2>We work to make</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>your <span>dreams</span> come</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>true.</h2>
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