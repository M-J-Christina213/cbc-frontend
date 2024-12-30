export default function AddProductForm() {
    return (
        <div className="flex-1 w-full p-8 m-10 bg-white rounded-lg shadow-lg" >
            <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
                Add New Product
            </h2>
            <div className="flex flex-col gap-4 w-1/2 mx-auto">
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700">Product ID</label>
                    <input type="text" placeholder="Enter Product ID" className="p-2 border rounded-md focus:ring-2 focus:ring-pink-600" />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700">Product Name</label>
                    <input type="text" placeholder="Enter Product Name" className="p-2 border rounded-md focus:ring-2 focus:ring-pink-600" />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700">Alternative Names</label>
                    <input type="text" placeholder="Enter Alternative Names" className="p-2 border rounded-md focus:ring-2 focus:ring-pink-600" />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700">Image URLs</label>
                    <input type="text" placeholder="Enter Image URLs" className="p-2 border rounded-md focus:ring-2 focus:ring-pink-600" />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700">Price</label>
                    <input type="number" placeholder="Enter Price" className="p-2 border rounded-md focus:ring-2 focus:ring-pink-600" />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700">Last Price</label>
                    <input type="text" placeholder="Enter Last Price" className="p-2 border rounded-md focus:ring-2 focus:ring-pink-600" />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700">Stock</label>
                    <input type="text" placeholder="Enter Stock" className="p-2 border rounded-md focus:ring-2 focus:ring-pink-600" />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700">Description</label>
                    <textarea placeholder="Enter Product Description" className="p-2 border rounded-md focus:ring-2 focus:ring-pink-600"></textarea>
                </div>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                    Add New Product
                </button>
            </div>
        </div>
    );
}
