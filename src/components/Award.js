import React from 'react'
import styled from 'styled-components';

const Award = ({title, description}) => {
    return (
        <StyledAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyledAward>
    )
};

const StyledAward = styled.div`
    padding: 5rem;

    h3 {
        font-size: 2rem;
    }

    p {
        padding: 2rem 0rem;
    }

    .line {
        width: 100%;
        background: #23d997;
        height: 0.4rem;
        margin: 1rem 0rem;
    }
`;

export default Award
