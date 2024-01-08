import { Link, useLoaderData } from "react-router-dom";
import { IoHeartSharp } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Navbar from "../../Navbar/Navbar";
import useAxiosPublic from './../../Hooks/useAxiosPublic';
import { Toaster, toast } from "sonner";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const ProductDetails = () => {
    const {user} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const allProductDetails = useLoaderData();
    const {_id, image, title, description, price, sellerName, date, reviews, status, quantity} = allProductDetails;

    const handleAddToCart = (item) => {
        const cartItem = {
            email: user?.email,
            productId : _id,
            title: title,
            image: image,
            description: description,
            price: price,
            status: status,
            reviews: reviews,
        }
        // const toastId = toast.loading("Adding to cart...");
        axiosPublic.post("cart", cartItem)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId) {
                const promise = new Promise((resolve) => setTimeout(() => resolve({ name: title }), 2000));
                toast.promise(promise, {
                    loading: 'Loading...',
                    success: (data) => {
                        return `${data.name} has been added to cart`;
                    },
                    error: 'Error',
                });
            }
        })
    }

    const handleAddToWishlist = (item) => {
        const wishlistItem = {
            productId: _id,
            title: title,
            image: image,
            description: description,
            price: price,
            status: status,
            reviews: reviews,
        };
    
        axiosPublic.post("wishlist", wishlistItem)
            .then((res) => {
                console.log(res.data);
                if (res.data.insertedId) {
                    const promise = new Promise((resolve) => setTimeout(() => resolve({ name: title }), 2000));
                    toast.promise(promise, {
                        loading: 'Loading...',
                        success: (data) => {
                            return `${data.name} has been added to wishlist`;
                        },
                        error: 'Error',
                    });
                }
            })
            .catch((error) => {
                console.error("Error adding to wishlist:", error);
                // Handle the error as needed, you might want to show an error toast here.
            });
    };


   

    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">

                <div className="flex justify-center">
            <Carousel autoPlay>
                <div>
                    <img className="rounded-lg" src={image} />
                </div>
                <div>
                    <img className="rounded-lg" src={image} />
                </div>
                <div>
                    <img className="rounded-lg" src={image} />
                </div>
                <div>
                    <img className="rounded-lg" src={image} />
                </div>
                <div>
                    <img className="rounded-lg" src={image} />
                </div>
            </Carousel>

        </div>

                {/* Product info (Right side) */}
                <div>
                    <h1 className="text-3xl font-bold text-rose-600 mb-2">{title}</h1>
                    <p className="text-xl font-semibold mb-2">{price}</p>

                    {/* Store info */}
                    <div className="flex items-center gap-2 pb-4 border-b-2 border-gray-500 mb-2">
                    <div className="w-8 rounded-full flex items-center justify-center bg-gray-100 p-2 border border-rose-600">
                        <img className="" src="../../../../public/5.png" alt="" />
                    </div>
                    <p className="text-xl font-semibold">{sellerName}</p>
                    </div>

                    {/* Description */}
                    <p className="mb-3">{description}</p>
                    

                    <div className="flex gap-5">
                   <button onClick={() => handleAddToCart(_id)} className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-red-500 to-red-800 rounded-md w-full text-center flex items-center gap-3">Add To Cart <MdAddShoppingCart></MdAddShoppingCart></button>
                  <Link onClick={() => handleAddToWishlist(_id)} className="text-gray-500 font-semibold px-4 py-2 bg-[#F6F7F7] border border-[#d3d3d4] hover:bg-gradient-to-r from-red-500 to-red-800 hover:text-white transition duration-300 rounded-md w-full text-center flex items-center gap-3">Add To Wishlist <IoHeartSharp></IoHeartSharp></Link>
                   </div>
                </div>
            </div>
            {/* <Toaster position="top-center" reverseOrder={false} /> */}
            <Toaster />
        </div>
    );
};

export default ProductDetails;