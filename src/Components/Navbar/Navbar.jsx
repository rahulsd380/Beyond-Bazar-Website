import 'regenerator-runtime/runtime';
import { Link } from "react-router-dom";
import Drawer from "../Drawer/Drawer";
import { IoHomeSharp, IoSearchOutline } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { AuthContext } from "../AuthProvider/AuthProvider";
// import ThemeToggle from "../Toggle/Toggle";
import {motion} from "framer-motion";
import useCart from "../Hooks/useCart";
import Wishlist from "../Wishlist/Wishlist";
// import { Dropdown2 } from "../Dropdown2/Dropdown2";
import { HiOutlineMicrophone } from "react-icons/hi";
import { BiMicrophoneOff } from "react-icons/bi";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
// import './Navbar.css'

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [cart] = useCart();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout().then((result) => {
      console.log(result);
    });
  };

  function onTap(event, info) {
    console.log(info.point.x, info.point.y)
  }


  // Voice typing functionality
  const {
    transcript,
    listening,
    // resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  useEffect(() => {
    const inputField = document.getElementById('searchInputField');
    if (inputField) {
      inputField.value = transcript;
    }
  }, [transcript]);

  // Total price of cart items
  const totalPrice = cart.reduce((total, item) => total + item.price, 0)



  return (
    <div className="max-w-custom px-5">
      <div className='w-full'>
        {/* Top part */}
      <div className="hidden md:flex md:justify-between items-center border-b py-3 w-full">
        <div className="flex gap-4">
          <Link className="text-gray-500 hover:text-rose-600 transition duration-300 text-sm dark:text-gray-50 dark:hover:text-rose-400 3xl:text-xl" >
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
          {/* <ThemeToggle></ThemeToggle> */}
          <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="synthwave" />
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
        </div>
      </div>


      {/* Second Part */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Drawer></Drawer>
          <motion.img initial={{y:-300}} animate={{y:0}} transition={{ duration: 0.8, type:'spring' }}  className="w-24" src="/src/assets/images/logo.png" alt="" />
          <Link to={"/"} className="hidden bg-gradient-to-r from-red-500 to-red-800 text-white p-2 rounded-md md:flex justify-center items-center w-10 text-xl">
            <IoHomeSharp></IoHomeSharp>
          </Link>
        </div>

        <div className="w-1/2 flex">
          <input
          id="searchInputField"
            className="rounded-md border border-rose-300  bg-white h-12 px-3 text-sm focus:outline-none focus:border-rose-600 transition duration-300 ease-in-out w-full hover:border-rose-300"
            type="text"
            placeholder="Find Item"
          />
          <div className="-ml-20 flex items-center gap-3">
          {
            listening? 
            <BiMicrophoneOff onClick={SpeechRecognition.stopListening} className="text-2xl text-rose-600 cursor-pointer tooltip" data-tip="Stop"></BiMicrophoneOff> :
            <HiOutlineMicrophone onClick={SpeechRecognition.startListening} className="text-2xl cursor-pointer tooltip" data-tip="Start"></HiOutlineMicrophone>
            
          }
          <button>
            <IoSearchOutline className="text-3xl font-bold hover:text-rose-600 transition duration-300"></IoSearchOutline>
          </button>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-7">

          {/* Dropdown content */}
        <div
      className="relative inline-block"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <button
        className="flex gap-3 items-center rounded-md hover:text-rose-600 transition duration-300 dark:text-gray-50 dark:hover:text-rose-400"
        onClick={toggleDropdown}
      >
        <h1 className="font-semibold">My Account</h1>
        <button className="text-sm">
          <FaArrowDown />
        </button>
      </button>
      {isDropdownOpen && (
        <div
          className="absolute  py-2 w-60 bg-white border shadow-lg z-10 rounded-md"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          {user ? (
            <div className="flex flex-col">
              <Link
                to={"/"}
                className="px-4 py-2 hover:bg-gray-100 hover:text-rose-600 transition duration-300 font-semibold"
              >
                Profile
              </Link>
              <Link
                to={"/dashboard/dashboardHome"}
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
                <motion.button onTap={onTap} whileTap={{ scale: 0.8 }}>Sign up</motion.button>
              </Link>
              <Link
                to={"/login"}
                className="px-4 py-2 hover:bg-gray-100 hover:text-rose-600 transition duration-300 font-semibold"
              >
                <motion.button onTap={onTap} whileTap={{ scale: 0.8 }}>Log in</motion.button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
    {/* <Dropdown2></Dropdown2> */}




          <Wishlist></Wishlist>

          <div className="flex items-center gap-4">
            <Link to={"/cart"}>
              <IoCartOutline className="text-4xl dark:text-gray-50 dark:hover:text-rose-400"></IoCartOutline>
              <div className="bg-rose-600 text-white h-3 w-3 rounded-full flex justify-center items-center p-2 text-xs relative bottom-10 left-6">
              <p>{cart.length}</p>
              </div>
            </Link>

            <div className="-mt-6">
              <p className="text-gray-500 dark:text-gray-200">{cart.length} Items</p>
              <p className="font-bold dark:text-gray-50">${totalPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
