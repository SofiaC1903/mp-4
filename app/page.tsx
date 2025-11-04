"use client"

import styled from "styled-components";
import Nav from "@/app/components/Nav";


const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    max-width:70%;
    margin: 6% auto;
    padding: 4%;
    border: 2px outset #171738;
    border-radius: 8px;
    background-color: #B6B0D6;
    box-shadow: 4px 4px 10px #32555D;
`

const TITLE = styled.h1`
    text-align: center;
    padding-top: 4%;
    letter-spacing: 2px;
    font-family: "Chicle", serif;
    color: #FFD199;
    font-size: calc(20px + 10vw);
    text-shadow: -3px -2px 2px #B75D69;
`

export default function Home() {

    return (
        <div>
            <Nav/>
            <HomeDiv> <TITLE>WELCOME!</TITLE></HomeDiv>
        </div>
    );
}
