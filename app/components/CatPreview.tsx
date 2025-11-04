import {CatProps} from "@/types/CatProps";
import styled from "styled-components"


export const CatDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 25%;
    max-width:50%;
    margin: 3%;
    padding: 1%;
    border: 2px outset #171738;
    border-radius: 8px;
    background-color: #B6B0D6;
    box-shadow: 4px 4px 10px #32555D;
`

const Img = styled.img`
    max-width: 65%
`

export default function CatPreview({cat,}:{cat:CatProps}){

    return (
        <CatDiv>
            <Img src={cat.url} alt={cat.name}/>
        </CatDiv>
    )
}