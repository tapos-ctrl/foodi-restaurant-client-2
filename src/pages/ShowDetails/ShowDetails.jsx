import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hock/useAuth";
import Swal from "sweetalert2";




const ShowDetails = () => {

    const [food , setFood] = useState()
    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    const {users} = useAuth()



    const navigate = useNavigate()
    const location = useLocation()


    const User = users?.email


    useEffect(() =>{
        setLoading(true)
        axios.get(`https://foodi-restaurant-server-2.onrender.com/details?id=${id}&email=${User}` )
        .then(res => {
            setFood(res?.data)
            setLoading(false)
        })
    },[])




    const handleOrder = (id) =>{
        if(food.quantity == 0){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "food is not available",
              });
              navigate('/allFood')
              return
             
        }
        if(!users?.email){
            
           return navigate('/login')
        }
        
        const foodData = {
            id:id,
            name:food.name,
            imageUrl:food.imageUrl,
            category:food.category,
            price:food.price,
            madeBy:food.madeBy,
            count:food.count,
            foodOrigin:food.foodOrigin,
            date: Date(),
            quantity:food.quantity,
            email: users.email,
            buyerName: users.displayName,
            status:food.status
        }
        setLoading(true)
        axios.post(`https://foodi-restaurant-server-2.onrender.com/order?id=${id}`,foodData  )
        .then(res => {

            if(res?.data?.acknowledged == true ){
                Swal.fire({
                    title: "Add to Order",
                    text: "You clicked the button!",
                    icon: "success"
                });
                navigate(`/order/${id}`)
            }else{
                Swal.fire({
                    title: "Food Order match",
                    text: "You clicked the button!",
                    icon: "successfully"
                });
                navigate(`/order/${id}`)
            }
            setLoading(false)
        })
        
        
    }


    if(loading){

        return <div className="h-screen w-full flex justify-center text-primary-bg"><span className="loading loading-spinner loading-lg px-10"></span></div>
    }

    return (
        <div>
            <div className="card card-compact shadow-2xl w-1/2 p-10 mx-auto mt-10 mb-28">
                <figure><img src={food?.imageUrl} alt="Shoes" className=" object-cover "/></figure>
                <div className="card-body">
                    <h2 className="card-title">{food?.name}</h2>
                    <p>{food?.shortDescription}</p>
                    <p className="font-medium"><span className="font-bold">Category:</span>{food?.category}</p>
                    <p className="font-medium"><span className="font-bold">Category:</span>{food?.madeBy}</p>
                    <p className="font-medium"><span className="font-bold">Category:</span>{food?.foodOrigin}</p>
                    <p className="font-medium"><span className="font-bold">Price:$</span>{food?.price}</p>
                    <p className="font-medium"><span className="font-bold">Quantity:</span>{food?.quantity == 0? 'not available': food?.quantity}</p>                                   
                    <div className="card-actions justify-end">
                        <button onClick={() =>handleOrder(food._id)} className="btn bg-primary-bg normal-case text-[#fff] hover:text-neutral-950 w-full">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;