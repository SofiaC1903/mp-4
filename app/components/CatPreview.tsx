import {CatProps} from "@/types/CatProps";
import styled from "styled-components"

const Img = styled.img`
    max-width: 25%
`

export default function CatPreview({cat,}:{cat:CatProps}){
    console.log("Image url", cat.url)

    return (
        <div>
            <Img src={cat.url} alt={cat.name}/>
        </div>
    )
}