"use client"

import styled from "styled-components";
import Nav from "@/app/components/Nav";


const TITLE = styled.h1`
    text-align: center;
    padding: 2%;
    letter-spacing: 2px;
    font-family: "Chicle", serif;
    color: #FFD199;
    font-size: calc(3px + 4vw);
    text-shadow: -3px -2px 2px #B75D69;
`

const AboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    max-width:70%;
    margin: 4% auto;
    padding: 4%;
    border: 2px outset #171738;
    border-radius: 8px;
    background-color: #B6B0D6;
    box-shadow: 4px 4px 10px #32555D;
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
            <AboutDiv>
            <TITLE>ABOUT CAT THERAPY</TITLE>

                <Intro>
                    Hello! I made this website for anyone that needed to see cat pics and feel better.
                    Have fun!
                </Intro>
            </AboutDiv>
        </div>
    )
}