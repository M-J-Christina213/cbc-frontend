import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import ProductCard from "../../components/productCard";
import Header from "../../components/header";
import Footer from "../../components/footer";

const categories = ["Makeup", "Skincare", "Haircare", "Nails", "Body & Bath", "Tools & Brushes"];
const subcategories = {
  Makeup: {
    Eyes: ["Eyeshadow Palette", "Eyeliner", "Eye Definer", "Eyebrow Pencil", "Mascara"],
    Lips: ["Lipstick", "Lip Cream", "Lip Definer", "Lip Liner"],
    Face: ["Blusher", "Concealer", "Compact Powder", "Foundation"]
  },
  Skincare: [
    "Cleanser", "Eye Gel Mask", "Moisturizer", "Serum", "Day & Night Cream", "Toner", "Face Wash", "Scrub", "Men's Skincare"
  ],
  Haircare: [
    "Shampoo", "Conditioner", "Hair Care Treatment"
  ],
  Nails: [
    "Nail Polish", "Nail Polish Remover"
  ],
  BodyAndBath: [
    "Body Lotion", "Body Care", "Body Wash", "Hand Sanitizer", "Hand Wash", "Foot Cream"
  ],
  ToolsAndBrushes: [
    "Makeup Brushes", "Makeup Sponges", "Brush Set"
  ]
};

export default function ProductPage() {
  const { category, subcategory } = useParams();
  const [products, setProducts] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState("loading");

  const formattedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1).toLowerCase() : "";
  const formattedSubcategory = subcategory ? subcategory.charAt(0).toUpperCase() + subcategory.slice(1).toLowerCase() : "";

  useEffect(() => {
    setLoadingStatus("loading");

    console.log("Category:", category, "Subcategory:", subcategory); // Debugging params

    // Fetch products based on category and subcategory
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products?category=${formattedCategory}&subcategory=${formattedSubcategory}`)
      .then((res) => {
        console.log(res.data);  // Check the data received
        setProducts(res.data);
        setLoadingStatus("loaded");
      })
      .catch((err) => {
        toast.error("Failed to fetch products");
        setLoadingStatus("error");
      });
  }, [category, subcategory]);

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Header />
      {/* Navigation */}
      <nav className="bg-purple-700 text-white py-4 px-6 flex justify-center gap-6 shadow-md">
        {categories.map((cat) => (
          <Link key={cat} to={`/${cat.toLowerCase()}`} className="hover:underline text-lg font-semibold">
            {cat}
          </Link>
        ))}
      </nav>

      {/* Main Content */}
      <div className="flex max-w-9xl mx-0 px-6 py-8 gap-6">
        {/* Left Subcategory Navigation */}
        <div className="w-1/5 bg-white p-4 shadow-md flex-shrink-0">
          <h3 className="text-xl font-bold text-purple-800 mb-4">Subcategories</h3>
          {formattedCategory === "Makeup" && (
            <ul className="space-y-2">
              {Object.keys(subcategories[formattedCategory]).map((subcategoryKey) => (
                <li key={subcategoryKey} className="text-lg font-semibold">
                  <Link
                    to={`/${category.toLowerCase()}/${subcategoryKey.toLowerCase()}`}
                    className="hover:underline text-purple-700"
                  >
                    {subcategoryKey}
                  </Link>
                  <ul className="pl-4 mt-2 space-y-1 text-sm text-gray-600">
                    {subcategories[formattedCategory][subcategoryKey].map((item) => (
                      <li key={item}>
                        <Link
                          to={`/${category.toLowerCase()}/${subcategoryKey.toLowerCase()}`}
                          className="hover:underline"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
          {formattedCategory !== "Makeup" && (
            <ul className="space-y-2">
              {subcategories[formattedCategory].map((item) => (
                <li key={item} className="text-lg font-semibold">
                  <Link
                    to={`/${category.toLowerCase()}/${item.toLowerCase()}`}
                    className="hover:underline text-purple-700"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Product Grid - Take Remaining Space */}
        <div className="flex-grow">
          <h2 className="text-3xl font-bold text-purple-900 text-center mb-8">
            {formattedSubcategory ? formattedSubcategory : formattedCategory} Products
          </h2>
          {loadingStatus === "loading" ? (
            <p>Loading...</p>
          ) : loadingStatus === "error" ? (
            <p>Failed to load products</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.productID} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
