import { CatProps } from "@/types/CatProps";
import {useEffect, useState} from "react";


export default function GetAllCats(number:number): CatProps[]{
    const apikey = process.env.xapikey;
    const [data, setData] = useState<CatProps[]>([]);

    useEffect(() => {
        async function getCats()  {
            const res = await fetch(
                `https://api.thecatapi.com/v1/images/search?limit=${number}&api_key=${apikey}`
            );
            const jsonRes = await res.json();
            setData(jsonRes);
        }

        getCats()
            .then(() => console.log("Data fetched succesfully"))
            .catch((e:Error) => console.log("Error experienced:" + e));
    }, [number,apikey]);

    return data
}