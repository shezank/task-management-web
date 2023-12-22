import axios from 'axios';

const axiosPublice = axios.create({
    baseURL: 'https://task-managment-server-gray.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublice;
};

export default useAxiosPublic;