import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdHelpCircleOutline } from "react-icons/io";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GiClothes } from "react-icons/gi";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { LuSofa } from "react-icons/lu";
import { FaRegClipboard } from "react-icons/fa6";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import useHero from "./../Hooks/useHero";
import { AiOutlineLaptop } from "react-icons/ai";
import { GiBookshelf } from "react-icons/gi";
import { MdOutlineSportsGolf } from "react-icons/md";
import { MdOutlineToys } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { SiMaterialdesignicons } from "react-icons/si";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";

const Banner = () => {
  const [heroSection] = useHero();

  return (
    <div className="max-w-7xl mx-auto pt-6 pb-10">
      <div className="grid grid-cols-4 gap-10">
        <div className="hidden md:block">
          <div className="bg-rose-600 p-3 rounded-t-2xl">
            <p className="text-center text-white font-semibold flex justify-between items-center">
              All categories{" "}
              <MdOutlineArrowDropDownCircle className="text-xl font-bold"></MdOutlineArrowDropDownCircle>
            </p>
          </div>
          <div className="bg-gray-50 px-7 py-4 flex flex-col gap-4 h-auto rounded-b-xl shadow-md">
            
            <Link to={"/"} className="flex items-center gap-4 hover:text-rose-600 transition duration-300 font-semibold text-gray-500">
            <AiOutlineLaptop></AiOutlineLaptop> Electronics
            </Link>

            <Link to={"/"} className="flex items-center gap-4 hover:text-rose-600 transition duration-300 font-semibold text-gray-500">
              <GiClothes></GiClothes> Fashion
            </Link>

            <Link to={"/"} className="flex items-center gap-4 hover:text-rose-600 transition duration-300 font-semibold text-gray-500">
            <LuSofa></LuSofa> Home & Furniture
            </Link>


            <Link to={"/"} className="flex items-center gap-4 hover:text-rose-600 transition duration-300 font-semibold text-gray-500">
            <FaRegClipboard></FaRegClipboard> Beauty & Personal Care
            </Link>

            <Link to={"/"} className="flex items-center gap-4 hover:text-rose-600 transition duration-300 font-semibold text-gray-500">
            <GiBookshelf></GiBookshelf> Books, Movies & Music
            </Link>

            <Link to={"/"} className="flex items-center gap-4 hover:text-rose-600 transition duration-300 font-semibold text-gray-500">
            <MdOutlineSportsGolf></MdOutlineSportsGolf> Sports & Outdoors
            </Link>

            <Link to={"/"} className="flex items-center gap-4 hover:text-rose-600 transition duration-300 font-semibold text-gray-500">
            <MdOutlineToys></MdOutlineToys> Toys & Games
            </Link>

            <Link to={"/"} className="flex items-center gap-4 hover:text-rose-600 transition duration-300 font-semibold text-gray-500">
            <FaCarAlt></FaCarAlt> Automotive
            </Link>

            <Link to={"/"} className="flex items-center gap-4 hover:text-rose-600 transition duration-300 font-semibold text-gray-500">
            <SiMaterialdesignicons></SiMaterialdesignicons> Home Improvement
            </Link>

            <Link to={"/"} className="flex items-center gap-4 hover:text-rose-600 transition duration-300 font-semibold text-gray-500 mb-8">
            <HiMiniBuildingOffice2></HiMiniBuildingOffice2> Office Supplies
            </Link>
          </div>
        </div>

        <div className="col-span-3 w-full">
          <div className="hidden md:flex justify-between items-center mb-5 border-b pb-3">
            <div className="flex gap-16 items-center">
              <Link className="font-semibold text-gray-500 flex items-center gap-4 hover:text-rose-600 transition duration-300">
                Home
              </Link>
              <Link className="font-semibold text-gray-500 flex items-center gap-4 hover:text-rose-600 transition duration-300">
                Categories
              </Link>
              <Link className="font-semibold text-gray-500 flex items-center gap-4 hover:text-rose-600 transition duration-300">
                Blog
              </Link>
              <Link className="font-semibold text-gray-500 flex items-center gap-4 hover:text-rose-600 transition duration-300">
                Top Offer
              </Link>
              <Link className="font-semibold text-gray-500 flex items-center gap-4 hover:text-rose-600 transition duration-300">
                Contact
              </Link>
            </div>

            <Link className="font-semibold flex items-center gap-2 text-rose-600 transition duration-300  ">
              <IoMdHelpCircleOutline></IoMdHelpCircleOutline> Help Center
            </Link>
          </div>

          <div className="">
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[EffectFade, Navigation, Pagination]}
              className="mySwiper"
              grabCursor={true} // Show grab cursor when user hovers over the Swiper
            >
              <div>
                {heroSection.map((heroItem) => (
                  <SwiperSlide key={heroItem._id}>
                    <div key={heroItem._id}>
                      <div className="w-full rounded-3xl border border-rose-300">
                        <img src={heroItem.image} className="rounded-3xl" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
