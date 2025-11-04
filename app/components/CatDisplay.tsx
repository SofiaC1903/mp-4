"use client"

import { CatProps } from "@/types/CatProps";
import CatPreview from "./CatPreview";

export default function CatDisplay({cat,} : {cat: CatProps[]}){

    return (
        <div>
            {cat.map((cat)=>(
                <CatPreview key={cat.id} cat={cat}></CatPreview>
            ))}
        </div>
    )
}