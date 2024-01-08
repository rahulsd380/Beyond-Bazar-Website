import { IoMdNotificationsOutline } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { FaAnglesRight } from "react-icons/fa6";

const Header = () => {
    return (
        <div>
            
            <div className="space-y-7 pb-8">
            <div className="flex justify-between">
            <div className="flex items-center">
            <input type="text" placeholder="Find Anything..." className="px-2 h-10 rounded-l-md border-y border-l border-gray-400" />
            <div className="border border-gray-400 px-2 h-10 rounded-r-md flex justify-center items-center">
            <FaAnglesRight className="text-rose-600 text-3xl"></FaAnglesRight>
            </div>
            </div>


    <div className="flex items-center gap-5">
        <GoQuestion className="text-2xl"></GoQuestion>
        <IoMdNotificationsOutline className="text-3xl"></IoMdNotificationsOutline>
        <div className="w-0.5 bg-gray-300 h-8"></div>
        {/* user icon */}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    </div>


  </div>

  <div className="bg-gray-50 p-3 rounded-2xl">
        <div className="max-w-2xl">
        <h1 className="text-gray-500 text-2xl font-bold mb-1"><span span className="text-rose-600">Good Morning,</span> Rahul Sutradhar</h1>
        <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et pariatur minus est incidunt accusamus, earum placeat explicabo natus similique impedit.</p>
        </div>
  </div>
            </div>
        </div>
    );
};

export default Header;