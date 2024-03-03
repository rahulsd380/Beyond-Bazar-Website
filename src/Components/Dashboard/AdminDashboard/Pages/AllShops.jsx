import Header from "./Header";
import { FaUsersLine } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import { TiCancel } from "react-icons/ti";
import { MdOutlineDownloadDone } from "react-icons/md";

const AllShops = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex items-center gap-2 mb-7 text-gray-500 border-b border-gray-200 pb-3">
                <FaUsersLine className="text-2xl"></FaUsersLine>
                <h1 className="text-2xl font-bold">Manage All Shop</h1>
                </div>
      
      <div className="grid grid-cols-2 gap-5">

        
      <div className="border border-gray-300 bg-[#fbfbfc] rounded-lg p-3 flex gap-5">
        <div className="avatar">
    <div className="w-16 h-16 rounded-full">
      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
        <div>
        <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-rose-600 mb-1">
           Big Bazar
        </h1>
        <p className="text-gray-500">3 miuutes ago</p>
        </div>
        <Link className="text-gray-600 text-sm flex items-center gap-2 mb-1 transform transition-transform duration-300 hover:-translate-y-1">
        <FaUserCheck></FaUserCheck>Rahul Sutradhar
        </Link>
        <p className="text-gray-500 mb-2 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam vel ipsum eum minus atque repellendus </p>
        <div className="flex items-center gap-6">

<div>
<button onClick={()=>document.getElementById('my_modal_3').showModal()} className="bg-rose-600 text-white px-4 py-1 rounded flex items-center gap-2 transform transition-transform duration-300 hover:-translate-y-1"><TiCancel></TiCancel> Decline</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    

    {/* Modal content */}
    <div>
      <div className="flex justify-between items-center mb-3">
      <p className="text-gray-500 text-lg font-semibold">Enter the rejection reason and feedback</p>
      <form method="dialog">
      <button className="absolute right-7 top-7">✕</button>
    </form>
      </div>
      <textarea placeholder="Your feedback" className="rounded-md border border-gray-400  bg-white p-3 text-sm focus:outline-none focus:border-rose-600 transition duration-300 ease-in-out w-full hover:border-rose-300 mb-3" name="" id="" cols="30" rows="10"></textarea>

      <div className="flex items-center justify-center gap-4">
      <form method="dialog">
      <button method="dialog" className="border border-gray-300 px-4 py-1 rounded flex items-center gap-2 transform transition-transform duration-300 hover:-translate-y-1"><TiCancel></TiCancel>Cancel</button>
      </form>
            <button className="bg-blue-500 text-white px-4 py-1 rounded flex items-center gap-2 transform transition-transform duration-300 hover:-translate-y-1"><MdOutlineDownloadDone></MdOutlineDownloadDone>Submit</button>
      </div>
    </div>
  </div>
</dialog>
</div>
            <button className="bg-blue-500 text-white px-4 py-1 rounded flex items-center gap-2 transform transition-transform duration-300 hover:-translate-y-1"><MdOutlineDownloadDone></MdOutlineDownloadDone> Approve</button>
        </div>
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default AllShops;