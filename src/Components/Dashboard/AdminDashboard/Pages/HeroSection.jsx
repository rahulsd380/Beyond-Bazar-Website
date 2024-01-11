import toast, { Toaster } from "react-hot-toast";
import useHero from "../../../Hooks/useHero";
import Header from "./Header";
import UpdateHero from "./UpdateHero";

const HeroSection = () => {
  const [heroSection] = useHero();

  // const handleUpdateHero = (e, _id) => {
  //     e.preventDefault();

  //     const subtitle = e.target.subtitle.value;
  //     const title = e.target.title.value;
  //     const description = e.target.description.value;
  //     const currentPrice = e.target.currentPrice.value;
  //     const image = e.target.image.value;

  //     const allData = {subtitle, title, description,image, currentPrice};
  //     console.log(allData);

  //     const toastId = toast.loading("Updating...")
  //     fetch(`http://localhost:5000/heroSection/${_id}`, {
  //         method: "PUT",
  //         headers : {
  //             'content-type' : 'application/json'
  //         },
  //         body : JSON.stringify(allData)
  //     })
  //     .then(res => res.json())
  //     .then(data => {
  //         if(data.modifiedCount){
  //             toast.success('Assignment Submited Successfully.', { id: toastId})
  //             }
  //     })
  // }

  return (
    <div>
      <Header></Header>

      <UpdateHero></UpdateHero>

      <div className="grid grid-cols-2 gap-10">
        {heroSection.map((heroItem) => (
          <div key={heroItem._id}>
            <div className="w-full rounded-3xl">
              <div className="relative w-full rounded-3xl">
                <img src={heroItem.image} className="rounded-3xl" />
                <div className="absolute top-2 right-6 text-white z-10"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default HeroSection;
