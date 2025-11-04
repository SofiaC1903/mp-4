"use client"

import { useState } from "react";
import GetAllCats from "@/api/getCatData/getAllCats";
import {CatProps} from "@/types/CatProps";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`

const Input= styled.input`
    display: block;
    background-color: #9CC2C9;
    font-size: calc(2px + 2vw);
    color: #FFD199;
    text-shadow: 2px 3px 4px #2B4A4F;
    margin: 2%;
    padding: 1%;
    border: 4px dotted #32555D;
    border-radius: 6px;
    font-family: "Chicle", serif;
`

const Button= styled.button`
    display: block;
    color: #FFD199;
    font-size: calc(2px + 2vw);
    font-family: "Chicle", serif;
    text-shadow: 2px 3px 4px #B75D69;
    margin: 2%;
    padding: 1%;
    border-radius: 6px;
    border: 4px dotted #FC6471;
    background-color: #FDAFB6;
`


export default function CatInputs({ onCatsAction }: { onCatsAction: (cat: CatProps[]) => void }){
    const [number, setNumber] = useState(1);
    const [Loading, setLoading] = useState(false);

    const HandleAPI = async () => {
        try{
            setLoading(true);
            const cats: CatProps[] = await GetAllCats(number)
            onCatsAction(cats)
            setLoading(false);
        } catch(error){
            setLoading(false);
            console.log("Error while getting cat photos: " + error)
        }

    }

    return(
        <Wrapper>
            <Input
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            /><Button onClick={HandleAPI} disabled={Loading}>{Loading ? 'Loading...' : 'Get Kitties!'}</Button>
        </Wrapper>
    )

}