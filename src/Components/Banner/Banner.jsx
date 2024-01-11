import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdHelpCircleOutline } from "react-icons/io";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GiClothes } from "react-icons/gi";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import useHero from "./../Hooks/useHero";

const Banner = () => {
  const [heroSection] = useHero();

  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="grid grid-cols-4 gap-10">
        <div className="hidden md:block">
          <div className="bg-rose-600 p-3 rounded-t-2xl">
            <p className="text-center text-white font-semibold flex justify-between items-center">
              All categories{" "}
              <MdOutlineArrowDropDownCircle className="text-xl font-bold"></MdOutlineArrowDropDownCircle>
            </p>
          </div>
          <div className="bg-gray-50 px-7 py-4 flex flex-col gap-6 h-screen rounded-b-xl shadow-md">
            <Link className="flex items-center gap-4 hover:text-rose-600 transition duration-300">
              <GiClothes></GiClothes> Home
            </Link>
            <Link>Home</Link>
            <Link>Home</Link>
            <Link>Home</Link>
            <Link>Home</Link>
            <Link>Home</Link>
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
