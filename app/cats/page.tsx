"use client"

import {useState} from "react";
import {CatProps} from "@/types/CatProps";
import CatInputs from "@/app/components/CatInputs";
import CatDisplay from "@/app/components/CatDisplay";
import styled from "styled-components";
import Nav from "@/app/components/Nav";


const TitleDiv = styled.div`
    display: flex;

    justify-content: center;
    width: 30%;
    margin: 3% auto;
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
    font-size: calc(3px + 4vw);
    text-shadow: -3px -2px 2px #B75D69;
`

export default function Home() {

    const [cats, setCats] = useState<CatProps[]>([]);

    return (
        <div>
            <Nav/>
            <TitleDiv><TITLE>CAT THERAPY</TITLE></TitleDiv>
            <CatInputs onCatsAction={setCats}/>
            <CatDisplay inputCats={cats}/>
        </div>
    );
}