import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAuth from './useAuth';


const useConformOrder = () => {

    const {users} = useAuth()
    const useConformOrder = useQuery({
        queryKey: ['repoData'],
        queryFn: () => axios.get(`https://foodi-restaurant-server-2.onrender.com/conformOrder?email=${users.email}`)})

        return useConformOrder
};

export default useConformOrder;