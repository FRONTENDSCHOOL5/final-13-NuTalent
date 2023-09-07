import { useQuery } from "@tanstack/react-query";
import { instance } from "../../util/api/axiosInstance";

const getSearchData = async (keyword) => {
    const res = await instance.get(`/user/searchuser/?keyword=${keyword}`);
    return res.data;
}

export const useGetResult = (keyword) => {
    const { data: searchedResult } = useQuery({
        queryKey: ['keyword', keyword],
        queryFn: () => getSearchData(keyword),
        placeholderData: [],
        enabled: !!keyword,
        select: (data) => data.slice(0, 100),
        staleTime: 3000,
        cacheTime: 1000,
    })
    return { searchedResult };
}