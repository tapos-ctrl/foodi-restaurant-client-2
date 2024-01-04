
import axios from "axios";
import { useParams } from "react-router-dom";
import useAuth from "../../hock/useAuth";
import Order from "./Order";
import { useQuery } from "@tanstack/react-query";






const Orders = () => {
    const {id} = useParams() 
    const {users} = useAuth()
    const User = users.email;


    const { isPending, isError, data, error,isFetching , refetch, isLoading} = useQuery({
        queryKey: ['foods',],
        queryFn: async () => await axios.get(`https://foodi-restaurant-server-2.onrender.com/ordersFoods?email=${users.email}`)
        
      })


    if(isLoading){
        return <div className="h-screen w-full flex justify-center text-primary-bg"><span className="loading loading-spinner loading-lg px-10"></span></div>
    }








    return (
        <div>
            <div className="overflow-x-auto h-screen">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Add Name</th>
                        <th>Add email</th>
                        <th>Food Origin</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Add Quantity</th>
                        <th>Delete Item</th>
                        <th>Conform Order</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    {
                        data?.data?.map(order => <Order order={order} refetch={refetch} key={order._id} id={data.data[0].id} ></Order>)
                    }
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;