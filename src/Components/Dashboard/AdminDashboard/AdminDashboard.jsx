import { GoHome } from "react-icons/go";
import { TbNewSection } from "react-icons/tb";
import { IoBagAddOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdOutlineManageHistory } from "react-icons/md";
import { Link, NavLink, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div>
            <div className='flex'>
                <div className='w-64 p-10 flex flex-col gap-7 bg-gray-50 h-screen text-lg border-r flex-none'>
                    <Link to={"/"} className='text-gray-500 font-semibold hover:text-rose-600 transition duration-300 flex items-center gap-3'><GoHome></GoHome> Home</Link>
                    <NavLink to={"/dashboard/herosection"} className='text-gray-500 font-semibold hover:text-rose-600 transition duration-300 flex items-center gap-3'><TbNewSection></TbNewSection> Add Sections</NavLink>
                    <NavLink to={"/dashboard/addProduct"} className='text-gray-500 font-semibold hover:text-rose-600 transition duration-300 flex items-center gap-3'><IoBagAddOutline></IoBagAddOutline> Add Product</NavLink>
                    <NavLink to={"/"} className='text-gray-500 font-semibold hover:text-rose-600 transition duration-300 flex items-center gap-3'><MdOutlineManageAccounts></MdOutlineManageAccounts> Manage Users</NavLink>
                    <NavLink to={"/dashboard/manageProducts"} className='text-gray-500 font-semibold hover:text-rose-600 transition duration-300 flex items-center gap-3'><MdOutlineManageHistory></MdOutlineManageHistory> Manage Products</NavLink>
                </div>

                <div className='p-5 flex-auto overflow-y-auto'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;