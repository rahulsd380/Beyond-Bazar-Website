import { Link } from "react-router-dom";
import Header from "./Header";
import { IoBagAddOutline } from "react-icons/io5";


const AddProduct = () => {
    const handleAddNewproduct = (e) => {
        e.preventDefault();
        const productImage = e.target.productImage.value;
        const productTitle = e.target.productTitle.value;
        const productPrice = e.target.productPrice.value;
        const productCategory = e.target.productCategory.value;
        const productDescription = e.target.productDescription.value;
        const productInfo = {productImage, productTitle, productPrice, productCategory, productDescription}
        console.log(productInfo);
    }
    return (
        <div>
            <Header></Header>
            <div>
                <div className="flex items-center gap-2 mb-7 text-gray-500">
                <IoBagAddOutline className="text-3xl"></IoBagAddOutline>
                <h1 className="text-2xl font-bold">Add A New Product</h1>
                </div>
                <form onSubmit={handleAddNewproduct}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center border bg-gray-50 p-3 rounded-lg">
                    {/* Image input section */}
                <div>
                    <input name="productImage" type="file" className="file-input file-input-bordered file-input-error w-full max-w-xs" />
                </div>

                {/* Text Information Section */}
                <div className="">
                    
                        <input name="productTitle" type="text" placeholder="Product Title" className="rounded-md border border-rose-300  bg-white h-11 px-3 text-sm focus:outline-none focus:border-rose-600 transition duration-300 ease-in-out w-full hover:border-rose-300 mb-5" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        <input name="productPrice" type="text" placeholder="Product Price" className="rounded-md border border-rose-300  bg-white h-12 px-3 text-sm focus:outline-none focus:border-rose-600 transition duration-300 ease-in-out w-full hover:border-rose-300" />
                        <select name="productCategory" className="rounded-md border border-rose-300  bg-white p-3 text-sm focus:outline-none focus:border-rose-600 transition duration-300 ease-in-out w-full hover:border-rose-300">
                            <option disabled selected>Select Cetegory</option>
                            <option value="featured">Featured</option>
                            <option value="cloths">Cloths</option>
                            <option value="vegetable">Vegetable</option>
                            <option value="grocery">Grocery</option>
                        </select>
                    </div>

                    <textarea placeholder="Product Description" className="rounded-md border border-rose-300  bg-white p-3 text-sm focus:outline-none focus:border-rose-600 transition duration-300 ease-in-out w-full hover:border-rose-300" name="productDescription" id="" cols="30" rows="10"></textarea>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <Link to={"/"}>
                    <button className="text-gray-500 bg-white font-semibold px-4 py-2 border-2 rounded-md w-full text-center">Cancel</button></Link>

                    <button className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-red-500 to-red-800 rounded-md w-full text-center">Add New</button>
                    </div>
                </div>
                </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;