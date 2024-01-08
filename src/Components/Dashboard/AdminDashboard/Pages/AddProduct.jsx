import { Link } from "react-router-dom";
import Header from "./Header";


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
                <h1 className="text-4xl font-bold mb-7">Add A New Product</h1>
                <form onSubmit={handleAddNewproduct}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center border bg-gray-50 p-3 rounded-lg">
                    {/* Image input section */}
                <div>
                    <input name="productImage" type="file" className="file-input file-input-bordered file-input-error w-full max-w-xs" />
                </div>

                {/* Text Information Section */}
                <div className="">
                    
                        <input name="productTitle" type="text" placeholder="Product Title" className="input input-bordered w-full mb-7" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-7">
                        <input name="productPrice" type="text" placeholder="Product Price" className="input input-bordered w-full" />
                        <select  name="productCategory" className="select select-bordered w-full text-gray-400">
                            <option disabled selected>Select Cetegory</option>
                            <option value="featured">Featured</option>
                            <option value="cloths">Cloths</option>
                            <option value="vegetable">Vegetable</option>
                            <option value="grocery">Grocery</option>
                        </select>
                    </div>

                    <textarea name="productDescription" rows={"5"} className="textarea textarea-bordered w-full mb-5" placeholder="Product Description"></textarea>

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