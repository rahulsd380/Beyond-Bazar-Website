import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxiosPublic from "./../../../Hooks/useAxiosPublic";

const imgApiKey = "763882e480dd8ab664d9058115562cab";
const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgApiKey}`;

const UpdateHero = () => {
  const axiosPublic = useAxiosPublic();

  // hook form
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image : data.image[0]}
    const res = await axiosPublic.post(imgHostingApi, imageFile, {
      headers : {
        'content-type' : 'multipart/form-data'
      }
    });
    if(res.data.success){
      const info = {
        image: res.data.data.display_url
      }
      console.log(info);
      const imgRes = await axiosPublic.post('/heroSection', info);
      console.log(imgRes.data);
      if(imgRes.data.insertedId){
        reset();
      }
    }
    console.log(res.data);
  };

  return (
    <div>
      <div>
          <p className="text-red-300 pb-3">Note: The file dimensions must be 1500px * 700px</p>
        <div className="pb-7 flex justify-center">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-red-500 to-red-800 rounded-md w-full text-center"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Add New Banner
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-gray-200">
              <h3 className="font-bold text-lg text-gray-600 mb-6">
                Add A New Banner
              </h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label
                  htmlFor="uploadFile1"
                  className="bg-white text-black text-base rounded w-80 h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 mb-2 fill-black"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                      data-original="#000000"
                    />
                    <path
                      d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                      data-original="#000000"
                    />
                  </svg>
                  Upload file
                  <input
                    {...register("image")}
                    type="file"
                    id="uploadFile1"
                    className="hidden"
                  />
                  <p className="text-xs text-gray-400 mt-2">
                    PNG, JPG SVG, WEBP, and GIF are Allowed.
                  </p>
                </label>
                <div className="grid grid-cols-1 gap-5"></div>

                <div className="flex flex-row-reverse items-center gap-9">
                  <button className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-red-500 to-red-800 rounded-md w-full text-center mt-5">
                    Save Changes
                  </button>

                  <div className="modal-action">
                    <form method="dialog" className="flex gap-10 w-full">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="text-gray-500 border border-gray-600 font-semibold px-4 py-2 rounded-md w-full text-center">
                        Cancel
                      </button>
                    </form>
                  </div>
                </div>
              </form>

              <div className="modal-action hidden">
                <form method="dialog" className="flex gap-10 w-full">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="text-gray-500 font-semibold px-4 py-2 rounded-md w-full text-center">
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default UpdateHero;
