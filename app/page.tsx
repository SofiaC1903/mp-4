"use client"

import CatInputs from "@/app/components/CatInputs";
import {useState} from "react";
import {CatProps} from "@/types/CatProps";
import CatDisplay from "@/app/components/CatDisplay";

export default function Home() {

    const [cats, setCats] = useState<CatProps[]>([]);

    return (
        <div>
            <CatInputs onCatsGet={setCats}/>
            <CatDisplay inputCats={cats}/>
        </div>
    );
}
