import toast, { Toaster } from "react-hot-toast";
import useHero from "../../../Hooks/useHero";
import Header from "./Header";
import UpdateHero from "./UpdateHero";

// const imgApiKey = '763882e480dd8ab664d9058115562cab';

// // Construct the API URL using the key
// const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgApiKey}`;
const HeroSection = () => {
    const [heroSection] = useHero();


    const handleUpdateHero = (e, _id) => {
        e.preventDefault();
        
        const subtitle = e.target.subtitle.value;
        const title = e.target.title.value;
        const description = e.target.description.value;
        const currentPrice = e.target.currentPrice.value;
        const image = e.target.image.value;

        const allData = {subtitle, title, description,image, currentPrice};
        console.log(allData);

        const toastId = toast.loading("Updating...")
        fetch(`http://localhost:5000/heroSection/${_id}`, {
            method: "PUT",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(allData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                toast.success('Assignment Submited Successfully.', { id: toastId})
                }
        })
    }
  
    return (
        <div>
            <Header></Header>

            <UpdateHero></UpdateHero>
            
            
           {/* <div className="relative">
                <div className="absolute">
                    <img className="" src="/public/1.jpg" alt="" />
                </div>
                <div className="absolute inset-0 bg-black opacity-60 h-full"></div>
                <div className="relative z-10">
                    <p className="text-lg">Buy Today</p>
                    <h1 className="text-3xl font-bold">Buy New product today</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero dolores id porro fugiat aut quae mollitia, rerum necessitatibus, tenetur soluta voluptas. Error sapiente nisi, omnis repellat totam excepturi eaque.</p>
                    <p className="text-xl">$300</p>
                    <button className="bg-rose-600 hover:bg-rose-700 transition duration-300 p-2 rounded-md text-white">Buy Now</button>
                </div>
           </div> */}

           <div className="grid grid-cols-2 gap-10">
           {
            heroSection.map(heroItem => <div key={heroItem._id}>
<div className="w-full rounded-3xl">
           <div className="relative w-full rounded-3xl">
    <img src={heroItem.image} className="rounded-3xl" />
       <div className="absolute top-2 right-6 text-white z-10">
        {/* <Link to={`/updateHero/${heroItem._id}`} className="text-white bg-rose-600 p-2 rounded-lg">Update Content</Link> */}

        <div className="px-3 py-3 flex justify-center">
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-red-500 to-red-800 rounded-md w-full text-center" onClick={() => document.getElementById(`my_modal_${heroItem._id}`).showModal()}>Update Content</button>
<dialog id={`my_modal_${heroItem._id}`} className="modal">
  <div className="modal-box bg-gray-200">
    <h3 className="font-bold text-lg text-gray-600 mb-6">Update Hero Section Details</h3>
   <form onSubmit={(e) => handleUpdateHero(e, heroItem._id)}>
    <div className='grid grid-cols-1 gap-5'>
    <div className="relative h-11 w-full">
          <input required
            type="text"
            className="bg-gray-300 peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 focus:border-2 focus:border-rose-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-600"
            placeholder=" "
            name='subtitle'
          />
          <label className="text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-rose-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-rose-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-rose-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-rose-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Subtitle
          </label>
        </div>
    <div className="relative h-11 w-full">
          <input required
            type="text"
            className="bg-gray-300 peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 focus:border-2 focus:border-rose-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-600"
            placeholder=" "
            name='title'
          />
          <label className="text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-rose-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-rose-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-rose-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-rose-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Title
          </label>
        </div>
    <div className="relative h-11 w-full">
          <input required
            type="text"
            className="bg-gray-300 peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 focus:border-2 focus:border-rose-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-600"
            placeholder=" "
            name='currentPrice'
          />
          <label className="text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-rose-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-rose-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-rose-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-rose-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Price
          </label>
        </div>
    <div className="relative h-11 w-full">
          <input required
            type="text"
            className="bg-gray-300 peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 focus:border-2 focus:border-rose-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-600"
            placeholder=" "
            name='image'
          />
          <label className="text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-rose-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-rose-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-rose-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-rose-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Image URL
          </label>
        </div>
    </div>

      <div className="relative h-32 w-full mt-7">
        <input required
          type="text"
          className="bg-gray-300 peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-rose-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-600"
          placeholder=" "
          name='description'
        />
        <label className="text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-rose-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-rose-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-rose-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-rose-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Description
        </label>
      </div>
       <div className='flex flex-row-reverse items-center gap-9'>
       <button className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-red-500 to-red-800 rounded-md w-full text-center mt-5">Save Changes</button>

<div className="modal-action">
<form method="dialog" className='flex gap-10 w-full'>
{/* if there is a button in form, it will close the modal */}
<button className="text-gray-500 border border-gray-600 font-semibold px-4 py-2 rounded-md w-full text-center">Cancel</button>
</form>
</div>
       </div>
   </form>

    <div className="modal-action hidden">
      <form method="dialog" className='flex gap-10 w-full'>
        {/* if there is a button in form, it will close the modal */}
        <button className="text-gray-500 font-semibold px-4 py-2 rounded-md w-full text-center">Cancel</button>
      </form>
    </div>

  </div>
</dialog>
                         </div>





       </div>



    <div className="rounded-3xl absolute top-0 bottom-0 flex items-center px-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="space-y-3">
          <p className="text-lg text-white">{heroItem.subtitle}</p>
          <h1 className="text-4xl font-bold textwhite text-white">{heroItem.title}</h1>
          <p className="text-white">{heroItem.description}</p>
          <p className="text-xl text-white">${heroItem.currentPrice}</p>
          <button className="bg-rose-600 hover:bg-rose-700 transition duration-300 p-2 rounded-md text-white">Buy Now</button>
          </div>
    </div>
  </div>
           </div>
            </div>)
           }
           </div>

           <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </div>
    );
};

export default HeroSection;