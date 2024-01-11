import './Footer.css'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
  FaCcPaypal,
  FaCcStripe,
  FaCcVisa,
  FaCcApplePay,
  FaCcMastercard,
  FaCcAmazonPay,
} from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { AiFillApple } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className=''>
      <div className="bg px-8 py-5 flex justify-between items-center rounded-t-full">
        <h1 className="font-semibold text-3xl text-white">Let's Get Started Today And Find Whatever You Want.</h1>
        <Link className="text-gray-600 w-60 font-semibold px-2 py-2 rounded-md text-center bg-gradient-to-r from-rose-100 to-teal-100">Get Started</Link>
      </div>
      </div>

      <div className="relative">
      <img
        src="../../../public/bg.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-950 to-blue-950 opacity-50"></div>
      <div className="relative z-10">
        <footer className="footer p-10 text-base-content">
          <aside>
            <img className="w-28" src="/src/assets/images/logo.png" alt="" />
            <p className="text-white font-semibold">
              <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent font-bold text-4xl ">
                Beyond Bazar
              </span>
              <br />
              Find what you need.
            </p>
          </aside>
          <nav className="text-white">
            <header className="footer-title">About</header>
            <a className="link link-hover mb-2">Home</a>
            <a className="link link-hover mb-2">Service</a>
            <a className="link link-hover mb-2">Contact</a>
            <a className="link link-hover mb-2">Jobs</a>
          </nav>
          <nav className="text-white">
            <header className="footer-title">Usefull Links</header>
            <a className="link link-hover mb-2">Blog</a>
            <a className="link link-hover mb-2">About us</a>
            <a className="link link-hover mb-2">refund policy</a>
            <a className="link link-hover mb-2">Terms & conditions</a>
            <a className="link link-hover">Privacy policy</a>
          </nav>
          <nav className="text-white">
            <header className="footer-title">Legal</header>
            <a className="link link-hover mb-2">Terms of use</a>
            <a className="link link-hover mb-2">Privacy policy</a>
            <a className="link link-hover mb-2">Cookie policy</a>
          </nav>
          <nav className="text-white">
            <header className="footer-title">Newsletter</header>
            <a className="link link-hover">Sign up for our newsletter</a>
            <input
              className="border border-gray-500 bg-gray-500 p-2 mb-2 rounded-md w-full text-sm focus:outline-none focus:border-blue-400 transition duration-300 ease-in-out hover:border-blue-600"
              type="text"
              name="password"
              placeholder="Enter your email"
            />
            <button className="bg-gradient-to-r from-red-500 to-red-800 font-semibold p-2 rounded-md text-white w-full mb-3">
              SUBSCRIBE
            </button>
          </nav>
        </footer>
        <hr />
        <br />
        <div className="grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-3">
          <div className="flex gap-6 justify-center mt-4">
            <p className="text-white text-xl font-semibold">Follow us :</p>
            <button className="w-9 h-9 rounded-full bg-blue-700 text-white flex justify-center items-center transform duration-300 hover:bg-blue-500 ">
              <FaFacebookF></FaFacebookF>
            </button>
            <button className="w-9 h-9 rounded-full bg-blue-500 text-white flex justify-center items-center transform duration-300 hover:bg-blue-700 ">
              <FaTwitter></FaTwitter>
            </button>
            <button className="w-9 h-9 rounded-full bg-blue-800 text-white flex justify-center items-center transform duration-300 hover:bg-blue-600 ">
              <FaLinkedinIn></FaLinkedinIn>
            </button>
            <button className="w-9 h-9 rounded-full bg-red-500 text-white flex justify-center items-center transform duration-300 hover:bg-red-700 ">
              <FaGooglePlusG></FaGooglePlusG>
            </button>
          </div>

          <div className="flex justify-center gap-5">
            <Link className="bg-gray-500 p-2 rounded-md flex items-center gap-2 text-white">
              <BiLogoPlayStore className="text-4xl"></BiLogoPlayStore>
              <div>
                <p className="text-xs">Download It From</p>
                <h1 className="font-bold text-xs">Play Store</h1>
              </div>
            </Link>
            <Link className="bg-gray-500 p-2 rounded-md flex items-center gap-2 text-white">
              <AiFillApple className="text-4xl"></AiFillApple>
              <div>
                <p className="text-xs">Download It From</p>
                <h1 className="font-bold text-xs">App Store</h1>
              </div>
            </Link>
          </div>

          <div className="flex justify-center gap-3 items-center text-white text-5xl">
            <Link>
              <FaCcPaypal></FaCcPaypal>
            </Link>
            <Link>
              <FaCcStripe></FaCcStripe>
            </Link>
            <Link>
              <FaCcVisa></FaCcVisa>
            </Link>
            <Link>
              <FaCcApplePay></FaCcApplePay>
            </Link>
            <Link>
              <FaCcMastercard></FaCcMastercard>
            </Link>
            <Link>
              <FaCcAmazonPay></FaCcAmazonPay>
            </Link>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <p className="text-gray-400 text-sm text-center font-semibold">
          Powered By <span className="text-rose-500">Rahul Sutradhar</span>{" "}
          Beyond Bazar ltd © 2024
        </p>
        <br />
        {/* <img src="/src/assets/images/1.png" alt="" /> */}
      </div>
    </div>
    </div>
  );
};

export default Footer;
