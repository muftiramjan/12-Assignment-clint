import axios from "axios";

const axiosPublic=axios.create({
    baseURL: 'https://12-assinmet-sarver.vercel.app'
});

const UseAxiosPublik = () => {
   return axiosPublic
};

export default UseAxiosPublik;