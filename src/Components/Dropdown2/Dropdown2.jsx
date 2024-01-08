import { useState } from "react";
import {motion} from "framer-motion";
import { FaArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";


export const Dropdown2 = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  function onTap(event, info) {
    console.log(info.point.x, info.point.y)
  }

  return (
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
        </div>
      )}
    </div>
  );
}
