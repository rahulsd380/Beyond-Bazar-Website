import { Link } from "react-router-dom";
import Drawer from "../Drawer/Drawer";
import { IoHomeSharp, IoSearchOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { AuthContext } from "../AuthProvider/AuthProvider";
import ThemeToggle from "../Toggle/Toggle";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout().then((result) => {
      console.log(result);
    });
  };
  return (
    <div className="">
        {/* Top part */}
      <div className="hidden md:flex md:justify-between items-center border-b py-3 px-10">
        <div className="flex gap-4">
          <Link className="text-gray-500 hover:text-rose-600 transition duration-300 text-sm dark:text-gray-50 dark:hover:text-rose-400">
            About Us
          </Link>
          <Link className="text-gray-500 hover:text-rose-600 transition duration-300 text-sm dark:text-gray-50 dark:hover:text-rose-400">
            My Account
          </Link>
          <Link className="text-gray-500 hover:text-rose-600 transition duration-300 text-sm dark:text-gray-50 dark:hover:text-rose-400">
            Order Tracking
          </Link>
          <Link className="text-gray-500 hover:text-rose-600 transition duration-300 text-sm dark:text-gray-50 dark:hover:text-rose-400">
            Wishlist
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          <p className="text-sm border-r border-r-rose-400 px-3">
            <span className="text-gray-500 dark:text-gray-300">Need help? Call us:</span>{" "}
            <span className="font-semibold dark:text-gray-50">01608249337</span>{" "}
            <span className="text-gray-500 dark:text-gray-300">or email:</span>{" "}
            <span className="font-semibold dark:text-gray-50">rahulsd380@gmail.com</span>
          </p>
          <div className="flex gap-4 items-center text-sm">
            <select name="" id="">
              <option value="eng">Eng</option>
              <option value="ban">Ban</option>
              <option value="chi">Chi</option>
            </select>
            <select name="" id="">
              <option value="usd">USD</option>
              <option value="EUR">EUR</option>
              <option value="tk">TK</option>
            </select>
          </div>
          <ThemeToggle></ThemeToggle>
        </div>
      </div>


      {/* Second Part */}
      <div className="flex justify-around items-center">
        <div className="flex items-center gap-8">
          <Drawer></Drawer>
          <img className="w-24" src="/src/assets/images/logo.png" alt="" />
          <Link to={"/"} className="hidden bg-gradient-to-r from-red-500 to-red-800 text-white p-2 rounded-md md:flex justify-center items-center w-10 text-xl">
            <IoHomeSharp></IoHomeSharp>
          </Link>
        </div>

        <div className="w-1/2 flex">
          <input
            className="rounded-md border border-rose-300  bg-white h-12 px-3 text-sm focus:outline-none focus:border-rose-600 transition duration-300 ease-in-out w-full hover:border-rose-300"
            type="text"
            placeholder="Find Item"
          />
          <button>
            <IoSearchOutline className="-ml-10 text-3xl font-bold hover:text-rose-600 transition duration-300"></IoSearchOutline>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-7">
          <div className="relative inline-block">
            <button
              className="flex gap-3 items-center rounded-md hover:text-rose-600 transition duration-300 dark:text-gray-50 dark:hover:text-rose-400"
              onClick={toggleDropdown}
            >
              <h1 className="font-semibold">My Account</h1>
              <button className="text-sm">
                <FaArrowDown></FaArrowDown>
              </button>
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 py-2 w-60 bg-white border shadow-lg z-10 rounded-md">
                {user ? (
                  <div className="flex flex-col">
                    <Link
                      to={"/"}
                      className="px-4 py-2 hover:bg-gray-100 hover:text-rose-600 transition duration-300 font-semibold"
                    >
                      Profile
                    </Link>
                    <Link
                      to={"/"}
                      className="px-4 py-2 hover:bg-gray-100 hover:text-rose-600 transition duration-300 font-semibold"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 hover:bg-gray-100 hover:text-rose-600 transition duration-300 font-semibold text-left"
                    >
                      Log out
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <Link
                      to={"/signup"}
                      className="px-4 py-2 hover:bg-gray-100 hover:text-rose-600 transition duration-300 font-semibold"
                    >
                      Sign up
                    </Link>
                    <Link
                      to={"/login"}
                      className="px-4 py-2 hover:bg-gray-100 hover:text-rose-600 transition duration-300 font-semibold"
                    >
                      Log in
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          <div>
            <FaRegHeart className="text-3xl dark:text-gray-50 dark:hover:text-rose-400"></FaRegHeart>
            <div className="bg-rose-600 text-white h-3 w-3 rounded-full flex justify-center items-center p-2 text-xs relative bottom-9 left-5">
              <p>0</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div>
              <IoCartOutline className="text-4xl dark:text-gray-50 dark:hover:text-rose-400"></IoCartOutline>
              <div className="bg-rose-600 text-white h-3 w-3 rounded-full flex justify-center items-center p-2 text-xs relative bottom-10 left-6">
                <p>0</p>
              </div>
            </div>

            <div className="-mt-6">
              <p className="text-gray-500 dark:text-gray-200">0 Items</p>
              <p className="font-bold dark:text-gray-50">$66.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
