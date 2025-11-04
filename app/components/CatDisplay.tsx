"use client"

import { CatProps } from "@/types/CatProps";
import CatPreview from "./CatPreview";
import styled from "styled-components";


const AllCatsDiv = styled.div `
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      align-content: center;
      box-sizing: border-box;
`

export default function CatDisplay({inputCats} : {inputCats: CatProps[]}){

    return (
    <AllCatsDiv>
        {inputCats.map((cat)=>(
            <CatPreview key={cat.id} cat={cat}></CatPreview>
        ))}
    </AllCatsDiv>
    )
}