"use client"

import Link from "next/link";
import styled from 'styled-components';

const StyledNav = styled.nav`
display: flex;
flex-direction: row;
`
export default function Nav() {
    return (
        <StyledNav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/cats">Cats</Link>
        </StyledNav>
    )
}