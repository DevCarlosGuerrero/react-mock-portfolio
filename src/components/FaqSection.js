import react from 'react';

// Import Styles
import styled from 'styled-components';
import { StyledAbout, StyledDescription, StyledImage, StyledHide } from '../styles';


const FaqSection = () => {
    return (
        <StyledFaq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How do I start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quos?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quos?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Different payment methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quos?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What products do you offer</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quos?</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </StyledFaq>
    );
};

const StyledFaq = styled(StyledAbout)`
    display: block;

    h2 {
        font-weight: lighter;
        padding-bottom: 2rem;
    }

    p {
        padding: 1rem 0rem;
    }

    span {
        display: block;
    }

    .faq-line {
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }

    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
`;

export default FaqSection;