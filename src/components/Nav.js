import React from 'react'

// Import Styles
import styled from 'styled-components';
import { StyledAbout } from '../styles';

// Router
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <StyledNav>
            <h1><Link id="logo" to="/">Capture</Link></h1>
            <ul>
                <li><Link to="/">1. About Us</Link></li>
                <li><Link to="/work">2. Our Work</Link></li>
                <li><Link to="/contact">3. Contact Us</Link></li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;

    ul {
        display: flex;
        list-style: none;
    }

    li {
            margin-left: 10rem;
            position: relative;
        }

    #logo {
        font-family: 'Lobster', sans-serif;
        font-size: 1.8rem;
        font-weight: lighter;
        cursor: pointer;
    }

    a {
        color: #fff;
        text-decoration: none;
    }
`;

export default Nav;
