import {CatProps} from "@/types/CatProps";
import styled from "styled-components"


const CatDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 25%;
    max-width:50%;
    margin: 4%;
    padding: 2%;
    border: 2px solid #65000B;
    border-radius: 8px;
    background-color: #B6B0D6;
    box-shadow: 2px 3px 10px #DA7635;
    align-items: center;
    
`

const Img = styled.img`
    max-width: 60%
`

export default function CatPreview({cat,}:{cat:CatProps}){

    return (
        <CatDiv>
            <Img src={cat.url} alt={cat.name}/>
        </CatDiv>
    )
}