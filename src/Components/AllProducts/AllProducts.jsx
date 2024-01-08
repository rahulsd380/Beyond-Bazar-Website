import { FaHeart, FaStar, FaUser } from "react-icons/fa";
import useAllProducts from "../Hooks/useAllProducts";
import { MdOutlineDateRange } from "react-icons/md";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const AllProducts = () => {
    const [allProducts] = useAllProducts();
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <div className="flex justify-between items-center mb-5 py-5">
            <div className="flex items-center gap-5">
                <div className="w-1 h-8 bg-rose-600"></div>
                <h1 className="text-gray-500 text-3xl font-bold">View All Products</h1>
            </div>

            <div className="flex items-center">
            <input type="text" placeholder="Find Anything..." className="px-2 h-10 rounded-l-md border-y border-l border-gray-400" />
            <div className="border border-gray-400 px-2 h-10 rounded-r-md flex justify-center items-center">
            <FaAnglesRight className="text-rose-600 text-3xl"></FaAnglesRight>
            </div>
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 pb-10">
                {
                    allProducts.map(product => <div key={product._id}>
                        <div className="bg-[#F1F1F2] p-3 rounded-md">
                <div className="bg-[#F6F7F7] rounded-md border border-[#E6E7E8] p-2 flex justify-center items-center mb-4 transform hover:scale-105 duration-500 ease-in-out relative">
                    <img className="w-48 h-44" src={product.image} alt="" />

                    <div className="bg-[#e4e4e6] p-1 absolute top-0 left-0 rounded-br-md">
                        <p>{product.price}</p>

                    </div>
                </div>
                <h1 className="text-2xl font-bold mb-1 text-[#535455]">{product.title}</h1>

                <div className="flex justify-between items-center mb-1">
                    <p className="flex items-center gap-2 text-sm text-[#6D6E70]"><FaUser></FaUser> {product.sellerName}</p>
                    <p className="flex items-center gap-2 text-sm text-[#6D6E70]"><MdOutlineDateRange></MdOutlineDateRange> {product.date}</p>
                    <FaHeart className="text-xl text-[#6D6E70]"></FaHeart>
                </div>

                   <div className="flex justify-between items-center">
                   <p className="flex gap-3 text-base items-center text-yellow-500"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar> <span>({product.reviews})</span></p>
                   <div className="flex items-center gap-3">
                        {/* <p className="text-xs font-semibold text-rose-600 px-2 py-1 rounded-md bg-[#F6F7F7] border border-[#E6E7E8]">$299</p> */}
                        <p className="text-xs text-green-600 p-1 rounded-md bg-[#F6F7F7] border border-[#E6E7E8]">{product.status}</p>
                   </div>
                   </div>

                   <p className="mb-2 text-[#6D6E70]">{product.description}</p>
                   <div className="flex gap-5">
                  <Link to={`/productDetails/${product._id}`} className="text-gray-500 font-semibold px-4 py-2 bg-[#F6F7F7] border border-[#d3d3d4] hover:bg-gradient-to-r from-red-500 to-red-800 hover:text-white transition duration-300 rounded-md w-full text-center">View Details</Link>
                   <button className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-red-500 to-red-800 rounded-md w-full text-center">Add To Cart</button>
                   </div>
            </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllProducts;