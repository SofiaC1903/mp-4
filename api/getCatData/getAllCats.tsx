import { CatProps } from "@/types/CatProps";


export default async function getAllCats(number:number): Promise<CatProps[]>{
    const apikey = process.env.xapikey;

    //remember to delete, for testing purposes only

    const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${number}&api_key=${apikey}`
    );

    if(res.ok){
        console.log("Data fetched succesfully");
    }else{
        console.log("Error experienced:" + res.statusText);
    }

    const jsonRes = await res.json();

    return jsonRes;
}