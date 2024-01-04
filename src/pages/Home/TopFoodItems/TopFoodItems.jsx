import axios from "axios";
import { useEffect, useState } from "react";
import TopFoodItem from './TopFoodItem'
import { Link } from "react-router-dom";




const TopFoodItems = () => {
    const [topSellFoods, setTopSellPoods] = useState(null)
    const [loading, setLoading] = useState(false)
    
    useEffect(() =>{
        setLoading(true)
        axios.get('https://foodi-restaurant-server-2.onrender.com/topSellFoods')
        .then(res => {
            setTopSellPoods(res.data)
            setLoading(false)
        })
    },[])
    

    if(loading){

        return <div className="h-screen w-full flex justify-center text-primary-bg"><span className="loading loading-spinner loading-lg px-10"></span></div>
    }
   

    return (
        <div className="">
            <h2 className="text-center font-bold text-3xl"><span className="text-primary-bg">Top</span> Selling</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 py-10">
            {
                topSellFoods?.map(food => <TopFoodItem food={food} key={food._id}></TopFoodItem>)
            }
        </div>
        <div className="w-full flex justify-center">
        <Link to={'/allFood'} className="btn bg-primary-bg w-36 rounded-full text-[#fff] hover:text-neutral-950" >See All</Link>
        </div>
        </div>
    );
};

export default TopFoodItems;