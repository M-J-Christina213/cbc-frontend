export default function AddProductForm(){
    return(
        <div className="w-full h-full bg-cyan-500">
            <h1 className="text-2xl font-bold text-center"> Add Product Form </h1>
            <div className="flex flex-col w-full border items-center">
                <input type="text" placeholder="Insert your product Name here" className="w-[200px]"/>
                <input type="text" placeholder="Insert your product Price here" className="w-[200px]"/>
                <input type="text" placeholder="Insert your product Stock here" className="w-[200px]"/>
                <input type="text" placeholder="Insert your product Description here" className="w-[200px]"/>
                <button className="w-[200px] inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-lg hover:bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 items-center justify-center gap-2"> 
                         Add New Product
                </button>
        
                            
            </div>
           
        </div>
    )
}