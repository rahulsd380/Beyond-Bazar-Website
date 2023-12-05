import { FaAlignJustify } from "react-icons/fa6";


const Drawer = () => {
    return (
        <div>
            




            <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className=" drawer-button"><FaAlignJustify className="point text-2xl font-bold text-rose-600 hover:text-rose-500 transition duration-300"></FaAlignJustify></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
      
    </ul>
  </div>
</div>
        </div>
    );
};

export default Drawer;
