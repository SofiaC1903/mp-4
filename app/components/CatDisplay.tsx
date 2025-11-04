"use client"

import { CatProps } from "@/types/CatProps";
import CatPreview from "./CatPreview";

export default function CatDisplay({inputCats} : {inputCats: CatProps[]}){

    return (
        <div>
            {inputCats.map((cat)=>(
                <CatPreview key={cat.id} cat={cat}></CatPreview>
            ))}
        </div>
    )
}