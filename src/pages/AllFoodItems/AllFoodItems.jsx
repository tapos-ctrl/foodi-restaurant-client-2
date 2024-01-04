import axios from "axios";
import { useEffect, useState } from "react";
import SingleFood from "./SingleFood";
import { Helmet } from "react-helmet";


const AllFoodItems = () => {
    const [allFoods, setAllFoods] = useState(null)
    const [search, setSearch] = useState('')
    const [onChangeSearch, setOnChangeSearch] = useState('')
    const [totalCountFoods, setTotalCountFood] = useState()
    const [pages, setPages] = useState(1)
    const [size, setSize] = useState(2)
    const [loading, setLoading] = useState(false)
    
    let totalPages = []


    for (let i = 1; i < totalCountFoods+1; i++) {
        totalPages.push(i)
      }



 
    const handleSearch = (e) =>{
        e.preventDefault();
        const from = e.target
        const searchVal = from.text.value
        setSearch(searchVal)
    }
  
    let filterFoods = []

    if(onChangeSearch !== ''){    
        filterFoods = allFoods.filter(filterData => filterData?.name?.includes(onChangeSearch))
        
    }





    useEffect(()=>{
        setLoading(true)
        axios.get(`https://foodi-restaurant-server-2.onrender.com/allFoods?search=${search}&pages=${pages}&size=${size}`)
        .then(res => {
            
            setAllFoods(res?.data?.result)
            setTotalCountFood(Math.ceil(res?.data?.result2/size))
            setLoading(false)
        })
    },[search,pages, size])


    const handlePrevious = () =>{
        if( pages > 1){
            setPages(pages - 1)
        }
    }
    const handleNext = () =>{
        if( totalPages.length > pages){
            setPages(pages + 1)
        }
    }

   
    if(loading){

        return <div className="h-screen w-full flex justify-center text-primary-bg"><span className="loading loading-spinner loading-lg px-10"></span></div>
    }
   
    return (
        <div className="w-full">
            <Helmet>
            <title>Foodi Restaurant | All Foods</title>
            </Helmet>
            <div className="bg-primary-bg lg:w-1/2 flex-row justify-center rounded-full mx-auto">
            <form onSubmit={handleSearch}>
            <input type="text" placeholder="Type here" onChange={(e) => setOnChangeSearch(e.target.value)}  className=" bg-transparent outline-0 p-5 px-10 w-4/5 border-0 placeholder:text-neutral-950" name="text" />
            <input type="submit" value="Search" className="btn bg-transparent border-0  w-1/5 rounded-l-none hover:bg-transparent hover:text-[#fff] text-lg "/>
            </form>
            </div>
            <div>
                <h1 className="text-center text-2xl font-bold my-9"><span className="text-primary-bg">All</span>  Food</h1>
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 py-10">
                        {
                            filterFoods.length? filterFoods?.map(foodItem => <SingleFood foodItem={foodItem} key={foodItem._id}></SingleFood>):
                            allFoods?.map(foodItem => <SingleFood foodItem={foodItem} key={foodItem._id}></SingleFood>)
                        }
                     </div>
                     <div className="flex justify-center py-6 ">
                        <button className="btn text-base" onClick={handlePrevious}>Pre</button>
                        {
                            totalPages?.map(page => <button onClick={() => setPages(page)} className={`btn text-base ${page == pages && 'active'}`} key={page}>{page}</button>)
                        }
                        <button className="btn text-base" onClick={handleNext}>Next</button>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default AllFoodItems;