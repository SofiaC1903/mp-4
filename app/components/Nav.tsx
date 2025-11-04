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
    margin: 0 auto;
    border-bottom: 4px dashed #171738 ;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #FFD199;
    font-family: "Chicle", serif;
    font-size: calc(2px + 2vw);
    text-shadow: -2px 0 4px #2B4A4F;
`

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const StyledItems = styled.li`
    margin: 4% 45%;
    padding: 4% auto;
`

export default function Nav() {
    return (
        <StyledNav>
            <StyledList>
                <StyledItems><StyledLink href="/">Home</StyledLink></StyledItems>
                <StyledItems><StyledLink href="/about">About</StyledLink></StyledItems>
                <StyledItems><StyledLink href="/cats">Cats</StyledLink></StyledItems>
            </StyledList>
        </StyledNav>
    )
}