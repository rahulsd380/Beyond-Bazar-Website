import { useState } from "react";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import useWishlist from "../Hooks/useWishlist";
import { MdAddShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";


const Wishlist = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const [wishlist] = useWishlist();
    console.log(wishlist);
    return (
        <div>
            <button onClick={toggleDrawer}>
            <div>
            <FaRegHeart className="text-3xl dark:text-gray-50 dark:hover:text-rose-400"></FaRegHeart>
            <div className="bg-rose-600 text-white h-3 w-3 rounded-full flex justify-center items-center p-2 text-xs relative bottom-9 left-5">
            <p>{wishlist.length}</p>
            </div>
          </div>
            </button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className=''
            >
                <div className="p-3">
                    <h1 className="text-xl font-semibold border-b-2 pb-2 mb-5">Product on your wishlist</h1>

                    {
                        wishlist.map(item => 
                            <div key={item._id} className="flex justify-between items-center pb-3 border-rose-300 border-b mb-1">
                    <div className="flex gap-3 items-center">
                    <div className="w-16 rounded-md">
                        <img className="rounded-md" src={item.image} alt="" />
                    </div>
                    <div>
                    <h1 className="text-sm font-semibold">{item.title}</h1>
                    <p className="text-xs">{item.price}</p>
                    </div>
                    </div>
                    <button data-tip="Add to cart" className="text-rose-600 border border-rose-600 rounded-md font-semibold p-2 text-center flex items-center gap-3 tooltip"> <MdAddShoppingCart></MdAddShoppingCart></button>
                    </div>
                            )
                    }
                </div>
            </Drawer>
        </div>
    );
};

export default Wishlist;