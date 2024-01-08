import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../AuthProvider/AuthProvider";


const useWishlist = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()
    const { refetch, data: wishlist =[] } = useQuery({
        queryKey: ['wishlist', user?.email],
        queryFn: async () => {
         const res = await axiosSecure.get(`/wishlist?email=${user?.email}`);
        return res.data
     } 
    })
    return [wishlist, refetch]
};

export default useWishlist;