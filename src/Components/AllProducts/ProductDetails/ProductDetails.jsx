import { useLoaderData } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Navbar from "../../Navbar/Navbar";
import useAxiosPublic from "./../../Hooks/useAxiosPublic";
import { Toaster, toast } from "sonner";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { TbCurrencyTaka } from "react-icons/tb";
import ReactStars from "react-rating-stars-component";
import { CiCalendarDate } from "react-icons/ci";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
  FaPlus,
} from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { BiSolidCart } from "react-icons/bi";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const allProductDetails = useLoaderData();
  const {
    _id,
    image,
    title,
    description,
    price,
    sellerName,
    date,
    reviews,
    status,
    quantity,
  } = allProductDetails;

  const handleAddToCart = (item) => {
    const cartItem = {
      email: user?.email,
      productId: _id,
      title: title,
      image: image,
      description: description,
      price: price,
      status: status,
      reviews: reviews,
    };
    // const toastId = toast.loading("Adding to cart...");
    axiosPublic.post("cart", cartItem).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        const promise = new Promise((resolve) =>
          setTimeout(() => resolve({ name: title }), 2000)
        );
        toast.promise(promise, {
          loading: "Loading...",
          success: (data) => {
            return `${data.name} has been added to cart`;
          },
          error: "Error",
        });
      }
    });
  };

  const handleAddToWishlist = (item) => {
    const wishlistItem = {
      email: user?.email,
      productId: _id,
      title: title,
      image: image,
      description: description,
      price: price,
      status: status,
      reviews: reviews,
    };

    axiosPublic
      .post("wishlist", wishlistItem)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          const promise = new Promise((resolve) =>
            setTimeout(() => resolve({ name: title }), 2000)
          );
          toast.promise(promise, {
            loading: "Loading...",
            success: (data) => {
              return `${data.name} has been added to wishlist`;
            },
            error: "Error",
          });
        }
      })
      .catch((error) => {
        console.error("Error adding to wishlist:", error);
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>Beyond Bazar | {title}</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
        <div className="flex justify-center">
          <Carousel width={300} autoPlay>
            <div className="">
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
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-semibold text-rose-600">{title}</h1>
            <div className="bg-[#14B52633] px-2 py-[2px] rounded">
              <p className="text-[#2C742F]">In Stock</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-2">
            <div className="flex gap-2 items-center">
              <ReactStars
                edit={false}
                size={18}
                value={4}
                activeColor="#FF8A00"
              />
              <p className="text-[#666] text-[14px] font-lato font-normal">
                4 Reviews
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <p className="text-[#1A1A1A] text-[14px] font-lato font-normal flex items-center gap-2">
                <CiCalendarDate className="text-xl text-[#c26903]" /> Posted
                Date :
              </p>
              <p className="text-[#666] text-[14px] font-lato font-normal">
                {date}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 border-b border-[#E6E6E6] pb-3 mb-3">
            <p className="text-[24px] font-semibold flex items-center text-[#EA4B48]">
              <TbCurrencyTaka></TbCurrencyTaka> {price}
            </p>

            <p className="text-md font-semibold text-gray-400 line-through flex items-center">
              <TbCurrencyTaka></TbCurrencyTaka> {300}
            </p>

            <div className="bg-rose-200 px-2 py-[1px] rounded">
              <p className="text-md font-semibold text-[#EA4B48]">5% off</p>
            </div>
          </div>

          <div className="flex justify-between items-center mb-3">
            {/* Brand info */}
            <div className="flex items-center gap-2">
              <div className="rounded flex items-center justify-center bg-white border w-12 p-2">
                <img className="" src="../../../../public/5.png" alt="" />
              </div>
              <p className="text-[14px] text-[#1A1A1A]">Rahul Store</p>
            </div>

            {/* Brand info */}
            <div className="flex items-center gap-2">
              <p className="text-[14px] text-[#1A1A1A]">Brand:</p>
              <div className="rounded flex items-center justify-center bg-white border w-12 p-2">
                <img className="" src="../../../../public/5.png" alt="" />
              </div>
            </div>

            <div className="flex gap-1 justify-center items-center">
              <p className="text-[14px] text-[#1A1A1A]">Follow us:</p>
              <button className="w-9 h-9 rounded-full hover:bg-rose-600 hover:text-white flex justify-center items-center transform duration-300">
                <FaFacebookF></FaFacebookF>
              </button>
              <button className="w-9 h-9 rounded-full hover:bg-rose-600 hover:text-white flex justify-center items-center transform duration-300">
                <FaTwitter></FaTwitter>
              </button>
              <button className="w-9 h-9 rounded-full hover:bg-rose-600 hover:text-white flex justify-center items-center transform duration-300">
                <FaLinkedinIn></FaLinkedinIn>
              </button>
              <button className="w-9 h-9 rounded-full hover:bg-rose-600 hover:text-white flex justify-center items-center transform duration-300">
                <FaGooglePlusG></FaGooglePlusG>
              </button>
            </div>
          </div>

          {/* Description */}
          {/* <p className="mb-3 font-lato text-[14px] text-[#808080]">{description}</p> */}
          <p className="mb-3 font-lato text-[14px] text-[#808080] text-justify border-b border-[#E6E6E6] pb-3">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec,
            ultrices et ipsum. Nulla varius magna a consequat pulvinar.{" "}
          </p>

          <div className="w-full flex justify-between items-center border-b border-[#E6E6E6] pb-3 mb-3">
            <div className="bg-white border border-[#E6E6E6] p-2 rounded-3xl flex items-center justify-between w-[17%]">
              <div className="bg-[#F2F2F2] w-7 h-7 rounded-full flex justify-center items-center">
                <FaMinus className="text-gray-500" />
              </div>
              <p className="font-lato font-normal">7</p>
              <div className="bg-[#F2F2F2] w-7 h-7 rounded-full flex justify-center items-center">
                <FaPlus className="text-gray-500" />
              </div>
            </div>

            <button
              onClick={() => handleAddToCart(_id)}
              className="rounded-3xl flex items-center justify-center bg-rose-600 text-white p-3 w-[70%]"
            >
              <p className="flex items-center gap-2 justify-center">
                Add To Cart <BiSolidCart />
              </p>
            </button>

            <button
              onClick={() => handleAddToWishlist(_id)}
              className="bg-white hover:bg-rose-600 hover:text-white transition duration-300 border border-[#E6E6E6] p-2 rounded-3xl flex items-center justify-between"
            >
              <FaRegHeart className="text-[26px]" />
            </button>
          </div>

          <div className="">
            <p className="text-[14px] text-[#1A1A1A] flex items-center gap-1 mb-1">
              Category :{" "}
              <span className="text-[14px] text-[#808080]">Smart Watch</span>
            </p>

            <p className="text-[14px] text-[#1A1A1A] flex items-center gap-1">
              Tags :{" "}
              <span className="text-[14px] text-[#808080]">
                Smart Watch || Apple Watch
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      <Toaster />
    </div>
  );
};

export default ProductDetails;
