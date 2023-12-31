import { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import useCart from "../Hooks/useCart";
import { Link } from "react-router-dom";
import { IoArrowUndoSharp, IoSearchOutline } from "react-icons/io5";
import Navbar from "../Navbar/Navbar";

const Cart = () => {
  const [cart] = useCart();
  console.log(cart);

  const [quantity, setQuantity] = useState(1);
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity(quantity - 1);
  };
  return (
    <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
      <div className="flex items-center justify-between py-7">
        <div className="flex items-center gap-5">
          <div className="w-1 h-8 bg-rose-600"></div>
          <h1 className="text-gray-500 text-3xl font-bold">Your Bag-</h1>
        </div>
        <Link
          to={"/allProducts"}
          className="text-blue-500 font-semibold flex items-center gap-2 hover:underline"
        >
          <IoArrowUndoSharp></IoArrowUndoSharp> Continue Shopping
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="overflow-x-auto col-span-2">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-rose-600 text-white">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>SL.</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            {cart.map((item, index) => (
              <tbody key={item._id}>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <p>{index + 1}</p>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.title}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-5">
                      <p>{quantity}</p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={handleDecreaseQuantity}
                          className="border border-rose-600 px-2 py-1 rounded-lg text-gray-500 hover:text-rose-600 font-semibold"
                        >
                          -
                        </button>
                        <button
                          onClick={handleIncreaseQuantity}
                          className="bg-rose-600 border border-rose-600 px-2 py-1 rounded-lg text-white font-semibold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>{item.price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs flex items-center gap-3">
                      Delete{" "}
                      <FaDeleteLeft className="text-rose-600 text-xl"></FaDeleteLeft>
                    </button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        <div className="bg-gray-50 p-5 rounded-md">
          <h1 className="text-2xl font-semibold text-gray-400 mb-3">Summery</h1>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-full flex">
              <input
                className="border border-rose-300  bg-white h-12 px-3 text-sm focus:outline-none focus:border-rose-600 transition duration-300 ease-in-out w-full hover:border-rose-300"
                type="text"
                placeholder="Enter cupon code...    "
              />
              <button className="w-full font-semibold rounded-r-lg text-white bg-rose-600 transition duration-300">
                Apply Cupon
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-500 font-semibold">Subtotal</p>
            <p className="text-gray-500">$299</p>
          </div>

          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-500 font-semibold">Discount</p>
            <p className="text-gray-500">- $299</p>
          </div>

          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-500 font-semibold">Shipping</p>
            <p className="text-gray-500">$5</p>
          </div>

          <hr />

          <div className="flex items-center justify-between bg-rose-600 p-2 rounded-md text-white mb-2">
            <p className="font-semibold">Total</p>
            <p className="">$300</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
