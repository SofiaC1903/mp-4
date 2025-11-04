"use client"

import Link from "next/link";
import styled from 'styled-components';

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    background-color: #B6B0D6;
    align-items: center;
    justify-content: space-evenly;
    padding: 1%;
    border-bottom: 4px dashed #171738 ;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #FFD199;
    font-family: "Chicle", serif;
    font-size: calc(2px + 2vw);
    text-shadow: -2px 0 4px #2B4A4F;
`
export default function Nav() {
    return (
        <StyledNav>
            <StyledLink href="/">Home</StyledLink>
            <StyledLink href="/about">About</StyledLink>
            <StyledLink href="/cats">Cats</StyledLink>
        </StyledNav>
    )
}