import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";



const Order = ({order, refetch,id}) => {
    const {_id,name,imageUrl,category,price,madeBy,count,foodOrigin,date,email,buyerName,quantity} = order
    const [totalCount, setTotalCount] = useState(1)
    const [totalQuantity, setTotalQuantity] = useState(quantity -1)
    const [totalPrice, setTotalPrice] = useState(price)
    const [grandTotalCount, setGrandTotalCount] = useState(count+1)





    const handleIncrement = () =>{
        if(totalCount < quantity){
            setTotalCount(totalCount + 1)
            setTotalQuantity(totalQuantity - 1)
            setTotalPrice((totalPrice + price))
            setGrandTotalCount(grandTotalCount + 1)
        }
    }

    const handleDecrement= () =>{
        if(totalCount > 1){
            setTotalCount(totalCount - 1)
            setTotalQuantity(totalQuantity + 1)
            setTotalPrice((totalPrice - price))
            setGrandTotalCount(grandTotalCount - 1)
        }
    }


    const handleDelete = () =>{
        axios.delete(`https://foodi-restaurant-server-2.onrender.com/ordersFoods?id=${_id}`)
        .then(res => {
            if(res.data.acknowledged == true){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Delete ${name}`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                refetch()
            }
        })
        
    }

    const handleConform = (conform) =>{
        const updateFoodData = {
            totalQuantity,
            grandTotalCount,
            status:conform,
            totalCount,
            totalPrice
        }
        const orderConform = {
            name,
            imageUrl,
            category,
            totalPrice,
            madeBy,
            totalCount,
            foodOrigin,
            date,
            email,
            buyerName,
            status:conform,
        }

        axios.put(`https://foodi-restaurant-server-2.onrender.com/allFoods?id=${id}`, updateFoodData)
        .then(res =>{
         console.log(res)
        })
        axios.post(`https://foodi-restaurant-server-2.onrender.com/conformOrder?id=${id}`, orderConform)
        .then(res =>{
            if(res?.data?.acknowledged==true){
                Swal.fire({
                    title: "successfully order conform",
                    text: "You clicked the button!",
                    icon: "success"
                  });
            }
        })

        axios.delete(`https://foodi-restaurant-server-2.onrender.com/ordersFoods?id=${_id}`)
        .then(res => {
            if(res.data.acknowledged == true){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `conform successfully ${name}`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                refetch()
            }
        })
         
     } 


    return (
        <tr>
            <td>
            <div className="flex items-center gap-3">
                <div className="avatar">
                <div className="mask mask-squircle w-20 h-20">
                    <img src={imageUrl} alt="Avatar Tailwind CSS Component" />
                </div>
                </div>
                <div>
                </div>
            </div>
            </td>
            <td>
                <p>{name}</p>
            </td>
            <td>{category}</td>
            <td>{buyerName}</td>
            <td>{email}</td>
            <td>{foodOrigin}</td>
            <td>
                <p>{totalQuantity}</p>
            </td>
            <td>${(parseFloat(totalPrice)).toFixed(2)}</td>
            <td>
                <div className="flex gap-3 items-center">
                    <button onClick={handleIncrement} className="btn bg-primary-bg text-neutral-50 hover:text-neutral-950"><FaPlus className="hover:cursor-pointer"/></button>
                    <p className="text-xl font-semibold text-neutral-950">{totalCount}</p>
                    <button onClick={handleDecrement} className="btn bg-primary-bg text-neutral-50 hover:text-neutral-950"><FaMinus className="hover:cursor-pointer" /></button>
                </div>
            </td>
            
            <td>
            <button className="btn btn-ghost btn-xs" onClick={handleDelete}>delete</button>
            </td>
            <td>
            <button className="btn btn-ghost btn-xs" onClick={() =>handleConform('conform')}>Conform Order</button>
            </td>
        </tr>
    );
};



export default Order;