"use client"

import styled from "styled-components";
import { CatDiv } from "@/app/components/CatPreview";
import Nav from "@/app/components/Nav";

const TITLE = styled.h1`
    text-align: center;
    padding-top: 4%;
    letter-spacing: 2px;
    font-family: "Chicle", serif;
    color: #FFD199;
    font-size: calc(3px + 4vw);
    text-shadow: -3px -2px 2px #B75D69;
`

const Intro = styled.h4`
    color: #FFD199;
    font-size: calc(2px + 2vw);
    font-family: "Chicle", serif;
    text-shadow: 2px 3px 4px #2B4A4F;
    text-align: center;
`

export default function About(){
    return (
        <div>
            <Nav/>
            <TITLE>ABOUT CAT THERAPY</TITLE>
            <CatDiv>
                <Intro>
                    Hello! I made this website for anyone that needed to see cat pics and feel better.
                    Have fun!
                </Intro>
            </CatDiv>
        </div>
    )
}