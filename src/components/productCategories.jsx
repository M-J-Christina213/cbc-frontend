import makeup from "../assets/images-cbc/categoryMakeup.png";
import




export default function ProductCategories() {
    const categories = [
        { id: 1, name: "Makeup", url: makeup, title:"Category Makeup", rating: 4.5, author:"white", aosDelay: 0},
        { id: 2, name: "Skincare", url: skincare, title:"Category Skincare", rating: 4.5, author:"white", aosDelay: 0},
        { id: 3, name: "Haircare", url: haircare, title:"Category Haircare", rating: 4.5, author:"white", aosDelay: 0},
        { id: 4, name: "Nails" , url: nails, title:"Category Nails", rating: 4.5, author:"white", aosDelay: 0},
        { id: 5, name: "Bath & Body", url: Bath & Body, title:"Category Bath and Body", rating: 4.5, author:"white", aosDelay: 0 }
    ];

    return (
        <div className="mt-14 mb-12">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mx-auto mb-10 max-w-[600px]">
                    <p className="text-sm text-primary">Top Selling Product Categories</p>
                    <h1 className="text-3xl font-bold">Products</h1>
                    <p className="text-xs text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                {/* Body Section */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                        {/* Card Section */}
                        {categories.map((data) => (
                            <div key={data.id} className="border p-4 rounded-lg shadow-md text-center w-40">
                                <p className="font-semibold">{data.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
