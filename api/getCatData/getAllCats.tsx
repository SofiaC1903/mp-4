import { CatProps } from "@/types/CatProps";


export default async function getAllCats(number:number): Promise<CatProps[]>{
    const apikey = process.env.xapikey;

    const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${number}&api_key=${apikey}`
    );
    const jsonRes = await res.json();

    if(jsonRes.ok){
        console.log("Data fetched succesfully");
    }else{
        console.log("Error experienced:" + jsonRes.statusText);
    }
    return jsonRes;
}