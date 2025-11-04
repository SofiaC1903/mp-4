"use client"

import { useState } from "react";
import GetAllCats from "@/api/getCatData/GetAllCats";

export default function CatInputs(){

    const [number, setNumber] = useState(5);

    const HandleAPI = async () => {
        GetAllCats(number)
    }

    return(
        <div>
            <input
                type="number"
                placeholder="Number of cats"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            /><button onClick={HandleAPI}>Get Kitties!</button>
        </div>
    )

}