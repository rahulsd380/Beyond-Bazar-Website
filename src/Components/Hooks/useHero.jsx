import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useHero = () => {
    const axiosSecure = useAxiosSecure();
    
    const { data: heroSection = [] }= useQuery({
        queryKey: ["heroSection"],
        queryFn: async () => {
            const res = await axiosSecure.get("/heroSection");
            return res.data;
        }
    })
    return [heroSection];
};

export default useHero;