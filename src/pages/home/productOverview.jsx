import { useParams } from "react-router-dom"

export default function ProductOverview(){

    const params = useParams();
    const productId = params.id;

    useEffect(
        ()=>{
            console.log(productId)
        }
    , [])
    return (
        <div className="w-full h-[calc (100vh-100px)] bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400" >
            <h1> Product Overview </h1>
        </div>
    )
}