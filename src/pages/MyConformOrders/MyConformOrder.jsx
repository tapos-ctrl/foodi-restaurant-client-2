import axios from "axios";
import { FaMinus, FaPlus } from "react-icons/fa";
import useConformOrder from "../../hock/useConformOrder";
import Swal from "sweetalert2";
import { useState } from "react";

const MyConformOrder = ({order}) => {

    const {_id,name,imageUrl,category,price,madeBy,count,foodOrigin,date,email,buyerName,quantity,totalPrice,totalCount} = order

    const {refetch} = useConformOrder()

    const [loading, setLoading] = useState(false)



    const handleDelete = () =>{
        setLoading(true)
        axios.delete(`https://foodi-restaurant-server-2.onrender.com/conformOrder?id=${_id}`)
        .then(res => {
            if(res.data.acknowledged == true){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `cancel successfully ${name}`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                refetch()
                setLoading(false)
            }
        })
        
    }

    if(loading){

        return <div className="h-screen w-full flex justify-center text-primary-bg"><span className="loading loading-spinner loading-lg px-10"></span></div>
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
            <td>{buyerName}</td>
            <td>{email}</td>
            <td>{totalCount}</td>
            <td>
                <div className="flex gap-3 items-center">
                    <p className="text-xl font-semibold text-neutral-950">{totalPrice}</p>
                </div>
            </td>
            <td>{date}</td>
            <td>
            <button className="btn btn-ghost btn-xs" onClick={handleDelete}>Cancel</button>
            </td>
            <td>
            <p className=" text-primary-bg btn-xs font-semibold" onClick={() =>handleConform('conform')}>Pending</p>
            </td>
        </tr>
    );
};

export default MyConformOrder;