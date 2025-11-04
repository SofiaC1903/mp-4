import CatPreview from "@/app/components/CatPreview";
import getAllCats from "@/api/getCatData/GetAllCats";
import CatInputs from "@/app/components/CatInputs";

export default async function Home() {

    const cats = getAllCats( 10);

    return (
        <div>
            <CatInputs/>
            <CatPreview inputCats={cats}/>
        </div>
    );
}
