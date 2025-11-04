"use client"

import CatInputs from "@/app/components/CatInputs";
import {useState} from "react";
import {CatProps} from "@/types/CatProps";
import CatDisplay from "@/app/components/CatDisplay";
import styled from "styled-components";

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
            <TITLE>CAT THERAPY</TITLE>
            <CatInputs onCatsAction={setCats}/>
            <CatDisplay inputCats={cats}/>
        </div>
    );
}
