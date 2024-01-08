import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllProducts = () => {
    const axiosPublic = useAxiosPublic();
    const {refetch, isPending:isLoading, data: allProducts = []} = useQuery({
        queryKey: ['allProducts'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allProducts');
            return res.data;
        }
    })
    return [allProducts, isLoading, refetch];
};

export default useAllProducts;