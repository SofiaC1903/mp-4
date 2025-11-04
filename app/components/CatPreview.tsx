import {CatProps} from "@/types/CatProps";
import Image from "next/image";

export default function CatPreview({cat}:{cat:CatProps}){
    return (
        <div>
            <h3>{cat.name} | {cat.origin}</h3>
            <Image src={cat.url} width={cat.width} height={cat.height} alt={cat.name}/>
            <p>Personality: {cat.temperament}</p>
            <p>Average Lifespan: {cat.lifespan}</p>
        </div>
    )
}