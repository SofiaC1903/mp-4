import { CatProps } from "@/types/CatProps";


export default async function getAllCats(number:number): Promise<CatProps[]>{
    const API_KEY = '' + process.env.XAPI_KEY;

    const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${number}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'x-apikey': API_KEY,
            }
        }
    );

    if(res.ok){
        console.log("Data fetched succesfully");
    }else{
        console.log("Error experienced:" + res.statusText);
    }

    const jsonRes = await res.json();

    return jsonRes;
}