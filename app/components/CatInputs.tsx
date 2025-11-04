"use client"

import { useState } from "react";
import GetAllCats from "@/api/getCatData/getAllCats";
import {CatProps} from "@/types/CatProps";
import styled from "styled-components";

const Wrapper = styled.div`
    align-content: center;
`

const Input= styled.input`
    background-color: #9CC2C9;
    border-radius: 5px;
`

const Button= styled.button`
`


export default function CatInputs({ onCatsAction }: { onCatsAction: (cat: CatProps[]) => void }){

    const [number, setNumber] = useState(1);

    const HandleAPI = async () => {
        try{
            const cats: CatProps[] = await GetAllCats(number)
            onCatsAction(cats)
        } catch(error){
            console.log("Error while getting cat photos: " + error)
        }

    }

    return(
        <Wrapper>
            <Input
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            /><Button onClick={HandleAPI}>Get Kitties!</Button>
        </Wrapper>
    )

}