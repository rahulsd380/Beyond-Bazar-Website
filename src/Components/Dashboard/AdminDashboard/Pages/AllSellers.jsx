import Header from "./Header";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { MdPhoneCallback } from "react-icons/md";
import { IoIosReturnRight } from "react-icons/io";
import { FaUsersLine } from "react-icons/fa6";
import { FaShop } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AllSellers = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex items-center gap-2 mb-7 text-gray-500">
                <FaUsersLine className="text-2xl"></FaUsersLine>
                <h1 className="text-2xl font-bold">All Sellers</h1>
                </div>
      
      <div className="grid grid-cols-4 gap-8">

        
      <div className="border border-gray-300 bg-[#fbfbfc] rounded-lg relative">

        <img src="/public/3.jpg" className="w-full h-[110px]" alt="" />



        <div className="avatar flex justify-center items-center mb-2 absolute top-16 left-[60px]">
    <div className="w-28 h-28 rounded-full">
      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>

        <h1 className="text-lg font-bold text-rose-600 text-center mt-[70px]">
          Rahul Sutradhar
        </h1>
        <Link className="text-gray-500 text-sm flex items-center gap-2 justify-center mb-1 transform transition-transform duration-300 hover:-translate-y-1">
        <FaShop></FaShop> Big Bazar
        </Link>


        <Link className="text-gray-500 text-sm flex items-center gap-2 justify-center mb-3 transform transition-transform duration-300 hover:-translate-y-1">
          <MdOutlineMailOutline></MdOutlineMailOutline> rahulsd380@gmail.com <IoIosReturnRight></IoIosReturnRight>
        </Link>

        <div className="px-2 pb-3">
        <div className="bg-rose-600 text-white px-4 py-1 rounded-md flex justify-between items-center">
          <button className="flex items-center gap-3 transform transition-transform duration-300 hover:-translate-y-1">
            <BiMessageDetail></BiMessageDetail> Message
          </button>
          <div className="w-0.5 h-9 bg-gray-300"></div>

          <button className="flex items-center gap-3 transform transition-transform duration-300 hover:-translate-y-1">
      <MdPhoneCallback />
      Call
    </button>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AllSellers;
