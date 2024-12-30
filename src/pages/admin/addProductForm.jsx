export default function AddProductForm(){
    return(
        <div className="w-full h-full bg-cyan-500">
            <h1 className="text-2xl font-bold text-center"> Add Product Form </h1>
            <div className="flex flex-col w-full border items-center">
                <div className="flex flex-col">
                    <label> Product ID </label>
                    <input type="text" className="w-[200px]"></input>
                </div>
                <div className="flex flex-col">
                    <label> Product Namae </label>
                    <input type="text" className="w-[200px]"></input>
                </div>
                <div className="flex flex-col">
                    <label> Alternative Names  </label>
                    <input type="text" className="w-[200px]"></input>
                </div>
                <div className="flex flex-col">
                    <label> Image URLs </label>
                    <input type="text" className="w-[200px]"></input>
                </div>
                <div className="flex flex-col">
                    <label> Price </label>
                    <input type="number" className="w-[200px]"></input>
                </div>
                <div className="flex flex-col">
                    <label> Last Price </label>
                    <input type="text" className="w-[200px]"></input>
                </div>
                <div className="flex flex-col">
                    <label> Stock </label>
                    <input type="text" className="w-[200px]"></input>
                </div>
                <div className="flex flex-col">
                    <label> Description </label>
                    <textarea type="text" className="w-[200px]"/>
                </div>

                <button className="w-[200px] inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-lg hover:bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 items-center justify-center gap-2"> 
                         Add New Product
                </button>
        
                            
            </div>
           
        </div>
    )
}