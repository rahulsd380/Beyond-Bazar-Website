import { GoHome } from "react-icons/go";
import { TbNewSection } from "react-icons/tb";
import { IoBagAddOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdOutlineManageHistory } from "react-icons/md";
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

const AdminDashboard = () => {
    return (
        <div>
            <Helmet>
        <title>Admin Dashboard | Beyond Bazar</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <div className='flex'>
                <div className='w-64 px-7 flex flex-col gap-7 bg-gray-800 h-screen text-lg border-r flex-none sticky top-0'>
                    <img className="w-24" src="/src/assets/images/logo.png" alt="" />
                    <Link to={"/"} className='text-gray-300 font-semibold hover:text-rose-500 transition duration-300 flex items-center gap-3'><GoHome></GoHome> Home</Link>
                    <Link to={"/dashboard/dashboardHome"} className='text-gray-300 font-semibold hover:text-rose-500 transition duration-300 flex items-center gap-3'><MdDashboard></MdDashboard> Dashboard</Link>
                    <NavLink to={"/dashboard/herosection"} className='text-gray-300 font-semibold hover:text-rose-500 transition duration-300 flex items-center gap-3'><TbNewSection></TbNewSection> Add Sections</NavLink>
                    <NavLink to={"/dashboard/addProduct"} className='text-gray-300 font-semibold hover:text-rose-500 transition duration-300 flex items-center gap-3'><IoBagAddOutline></IoBagAddOutline> Add Product</NavLink>
                    <NavLink to={"/dashboard/allUser"} className='text-gray-300 font-semibold hover:text-rose-500 transition duration-300 flex items-center gap-3'><MdOutlineManageAccounts></MdOutlineManageAccounts> Manage Users</NavLink>
                    <NavLink to={"/dashboard/allSellers"} className='text-gray-300 font-semibold hover:text-rose-500 transition duration-300 flex items-center gap-3'><MdOutlineManageAccounts></MdOutlineManageAccounts> Manage Sellers</NavLink>
                    <NavLink to={"/dashboard/manageShops"} className='text-gray-300 font-semibold hover:text-rose-500 transition duration-300 flex items-center gap-3'><MdOutlineManageAccounts></MdOutlineManageAccounts> Manage Shops</NavLink>
                    <NavLink to={"/dashboard/manageProducts"} className='text-gray-300 font-semibold hover:text-rose-500 transition duration-300 flex items-center gap-3'><MdOutlineManageHistory></MdOutlineManageHistory> Manage Products</NavLink>
                </div>

                <div className='p-5 flex-auto overflow-y-auto'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;