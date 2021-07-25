import React from 'react'

// Import Styles
import styled from 'styled-components';
import { StyledAbout } from '../styles';

function Nav() {
    return (
        <StyledNav>
            <h1><a id="logo" href="#">Capture</a></h1>
            <ul>
                <li><a href="#">1. About</a></li>
                <li><a href="#">2. Our Work</a></li>
                <li><a href="#">3. Contact Us</a></li>
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
            padding-left: 10rem;
            position: relative;
        }

    #logo {
        font-family: 'Lobster', sans-serif;
        font-size: 1.8rem;
        font-weight: lighter;
    }

    a {
        color: #fff;
        text-decoration: none;
    }
`;

export default Nav;
