// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import UseAxiosPublik from "./UseAxiosPublik";


const UseMenu = () => {
    const  axiosPublic= UseAxiosPublik();
const {data : menus=[],isPending: loddin,refetch} =useQuery({
    queryKey: ['menu'],
    queryFn: async() => {
        const res =await axiosPublic.get('/menu')
        return res.data;
    }
});



    return [menus, loddin,refetch]
};

export default UseMenu;