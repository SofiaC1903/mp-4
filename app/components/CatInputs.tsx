"use client"

import { useState } from "react";
import GetAllCats from "@/api/getCatData/getAllCats";
import {CatProps} from "@/types/CatProps";

export default function CatInputs({ onCatsGet }: { onCatsGet: (cats: CatProps[]) => void }){

    const [number, setNumber] = useState(5);

    const HandleAPI = async () => {
        try{
            const cats: CatProps[] = await GetAllCats(number)
            onCatsGet(cats)
        } catch(error){
            console.log("Error while getting cat photos: " + error)
        }

    }

    return(
        <div>
            <input
                type="number"
                placeholder="How many cats do you wanna see?"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            /><button onClick={HandleAPI}>Get Kitties!</button>
        </div>
    )

}