import { FaHeart, FaStar, FaUser } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { FaArrowRightLong } from "react-icons/fa6";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const FeaturedProducts = () => {
    // const [allProducts] = useAllProducts();
    const [isNotWishlist, setIsNotWishlist] = useState(false);
    const toggleButton = () => {
        setIsNotWishlist(!isNotWishlist);
      };
    const [allProducts, setAllProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
      


    const  url = `http://localhost:5000/allProducts`

    useEffect( () => {
        setTimeout(() => {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllProducts(data)
                setIsLoading(false)
            })
        }, 2000)
    }, [url]);

    const featuredProduct = allProducts.filter(product => product.isFeatured === "true");



    return (
        <div className="max-w-7xl mx-auto py-10">
            <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-5">
                <div className="w-1 h-8 bg-rose-600"></div>
                <h1 className="text-gray-500 text-3xl font-bold">View Our Featured Products</h1>
            </div>

            <div className="flex justify-center items-center">
                    <Link to={"/allProducts"} className="text-gray-500 font-semibold text-center flex items-center gap-1">View All Product <FaArrowRightLong></FaArrowRightLong></Link>
                </div>
            </div>

            
            {
                isLoading ?
                <SkeletonTheme color="#F1F2F3" highlightColor="#F1F2F3">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div>
                  <div className="bg-[#F1F1F2] p-3 rounded-md">
                    <div className="bg-[#F6F7F7] rounded-md border border-[#E6E7E8] p-2 flex justify-center items-center mb-4 transform hover:scale-105 duration-500 ease-in-out relative">
                      <div style={{ flex: 1 }}>
                        <Skeleton height={150}></Skeleton>
                      </div>
              
                      <div className="p-1 absolute top-0 left-0 rounded-br-md">
                        <Skeleton></Skeleton>
                      </div>
                    </div>
                    <h1 className="text-xl font-bold mb-1 text-[#535455]">
                      <Skeleton></Skeleton>
                    </h1>
              
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Skeleton width={80} height={20} />
                <Skeleton width={80} height={20} />
                <Skeleton width={80} height={20} />
              </div>
              
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Skeleton width={100} height={20} />
                <Skeleton width={100} height={20} />
              </div>
              
                    <p className="mb-2 ">
                      <Skeleton height={30}></Skeleton>
                    </p>
              
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Skeleton width={100} height={40} />
                <Skeleton width={100} height={40} />
              </div>
              
                  </div>
                </div>

                <div>
                  <div className="bg-[#F1F1F2] p-3 rounded-md">
                    <div className="bg-[#F6F7F7] rounded-md border border-[#E6E7E8] p-2 flex justify-center items-center mb-4 transform hover:scale-105 duration-500 ease-in-out relative">
                      <div style={{ flex: 1 }}>
                        <Skeleton height={150}></Skeleton>
                      </div>
              
                      <div className="p-1 absolute top-0 left-0 rounded-br-md">
                        <Skeleton></Skeleton>
                      </div>
                    </div>
                    <h1 className="text-xl font-bold mb-1 text-[#535455]">
                      <Skeleton></Skeleton>
                    </h1>
              
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Skeleton width={80} height={20} />
                <Skeleton width={80} height={20} />
                <Skeleton width={80} height={20} />
              </div>
              
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Skeleton width={100} height={20} />
                <Skeleton width={100} height={20} />
              </div>
              
                    <p className="mb-2 ">
                      <Skeleton height={30}></Skeleton>
                    </p>
              
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Skeleton width={100} height={40} />
                <Skeleton width={100} height={40} />
              </div>
              
                  </div>
                </div>

                <div>
                  <div className="bg-[#F1F1F2] p-3 rounded-md">
                    <div className="bg-[#F6F7F7] rounded-md border border-[#E6E7E8] p-2 flex justify-center items-center mb-4 transform hover:scale-105 duration-500 ease-in-out relative">
                      <div style={{ flex: 1 }}>
                        <Skeleton height={150}></Skeleton>
                      </div>
              
                      <div className="p-1 absolute top-0 left-0 rounded-br-md">
                        <Skeleton></Skeleton>
                      </div>
                    </div>
                    <h1 className="text-xl font-bold mb-1 text-[#535455]">
                      <Skeleton></Skeleton>
                    </h1>
              
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Skeleton width={80} height={20} />
                <Skeleton width={80} height={20} />
                <Skeleton width={80} height={20} />
              </div>
              
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Skeleton width={100} height={20} />
                <Skeleton width={100} height={20} />
              </div>
              
                    <p className="mb-2 ">
                      <Skeleton height={30}></Skeleton>
                    </p>
              
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Skeleton width={100} height={40} />
                <Skeleton width={100} height={40} />
              </div>
              
                  </div>
                </div>

                <div>
                  <div className="bg-[#F1F1F2] p-3 rounded-md">
                    <div className="bg-[#F6F7F7] rounded-md border border-[#E6E7E8] p-2 flex justify-center items-center mb-4 transform hover:scale-105 duration-500 ease-in-out relative">
                      <div style={{ flex: 1 }}>
                        <Skeleton height={150}></Skeleton>
                      </div>
              
                      <div className="p-1 absolute top-0 left-0 rounded-br-md">
                        <Skeleton></Skeleton>
                      </div>
                    </div>
                    <h1 className="text-xl font-bold mb-1 text-[#535455]">
                      <Skeleton></Skeleton>
                    </h1>
              
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Skeleton width={80} height={20} />
                <Skeleton width={80} height={20} />
                <Skeleton width={80} height={20} />
              </div>
              
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Skeleton width={100} height={20} />
                <Skeleton width={100} height={20} />
              </div>
              
                    <p className="mb-2 ">
                      <Skeleton height={30}></Skeleton>
                    </p>
              
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Skeleton width={100} height={40} />
                <Skeleton width={100} height={40} />
              </div>
              
                  </div>
                </div>
                
              </div>
              </SkeletonTheme>
              :
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {
                  featuredProduct.map(product => <div key={product._id}>
                      <div className="bg-[#F1F1F2] p-3 rounded-md">
              <div className="bg-[#F6F7F7] rounded-md border border-[#E6E7E8] p-2 flex justify-center items-center mb-4 transform hover:scale-105 duration-500 ease-in-out relative">
                  <img className="w-48 h-44" src={product.image || <Skeleton></Skeleton>} alt="" />

                  <div className="bg-[#e4e4e6] p-1 absolute top-0 left-0 rounded-br-md">
                      <p>${product.price || <Skeleton></Skeleton>}</p>

                  </div>
              </div>
              <h1 className="text-xl font-bold mb-1 text-[#535455]">{product.title}</h1>

              <div className="flex justify-between items-center mb-1">
                  <p className="flex items-center gap-2 text-sm text-[#6D6E70]"><FaUser></FaUser> {product.sellerName}</p>
                  <p className="text-sm flex items-center gap-2 text-[#6D6E70]"><MdOutlineDateRange></MdOutlineDateRange> {product.date}</p>
                  <button onClick={() => toggleButton(product._id)}>
                  {isNotWishlist ? <FaHeart className="text-xl text-[#6D6E70]"></FaHeart> : <FaHeart className="text-xl text-rose-600"></FaHeart>}
                  </button>
              </div>

                 <div className="flex justify-between items-center">
                 <p className="flex gap-3 text-sm items-center text-yellow-500"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar> <span>({product.reviews})</span></p>
                 <div className="flex items-center gap-3">
                      {/* <p className="text-xs font-semibold text-rose-600 px-2 py-1 rounded-md bg-[#F6F7F7] border border-[#E6E7E8]">$299</p> */}
                      <p className="text-xs text-green-600 p-1 rounded-md bg-[#F6F7F7] border border-[#E6E7E8]">{product.status}</p>
                 </div>
                 </div>

                 <p className="mb-2 text-[#6D6E70] text-sm">{product.description}</p>
                 <div className="flex gap-5">
                <Link to={`/productDetails/${product._id}`} className="text-gray-500 font-semibold px-4 py-2 bg-[#F6F7F7] border border-[#d3d3d4] hover:bg-gradient-to-r from-red-500 to-red-800 hover:text-white transition duration-300 rounded-md w-full text-center">View Details</Link>
                 <button className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-red-500 to-red-800 rounded-md w-full text-center">Add To Cart</button>
                 </div>
          </div>
                  </div>)
              }

          </div>
            }
           

           
                <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default FeaturedProducts;