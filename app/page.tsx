"use client"

import CatInputs from "@/app/components/CatInputs";
import {useState} from "react";
import {CatProps} from "@/types/CatProps";
import CatDisplay from "@/app/components/CatDisplay";
import styled from "styled-components";

const TITLE = styled.h1`
    text-align: center;
    padding: 4%;
    font-family: "Chicle", serif;
    font-size: calc(2px + 4vw);
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
