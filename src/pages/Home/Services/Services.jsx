import { BsCartCheckFill } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";



const Services = () => {
    return (
        <div className="py-20 pt-40">
            <h1 className="text-center text-5xl font-bold"><span className="text-primary-bg">Our Story </span>& Services</h1>
            <div className="lg:flex w-full justify-between items-center py-20">
                <div className="lg:w-1/2 lg:text-start text-center">
                    <h1 className="text-5xl font-bold text-neutral-950 py-6">Our Culinary Journey<br/> And Services</h1>
                    <p className="pb-6">Rooted in passion, we curate unforgettable dining <br/>experiences and offer exceptional services, <br/>blending culinary artistry with warm hospitality.</p>
                    <button className="btn bg-primary-bg px-10 rounded-full text-neutral-50">Explore</button>
                </div>
                <div className="grid grid-cols-2 lg:w-1/2 gap-6 justify-self-center">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="flex justify-center">
                        <BsCartCheckFill className="flex justify-center text-8xl text-primary-bg" />
                        </div>
                        <div className="">
                            <h1 className="text-center text-2xl font-semibold text-primary-bg mt-6">Online Ordering</h1>
                            <p className="text-center my-4 font-semibold text-base pb-4">Explore menu & order <br/>with ease using our<br/> Online Ordering</p>
                        </div>
                    
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="flex justify-center">
                        <CiDeliveryTruck className="flex justify-center text-8xl text-primary-bg" />
                        </div>
                        <div>
                        <h1 className="text-center text-2xl font-semibold text-primary-bg mt-6">Fast delivery</h1>
                            <p className="text-center my-4 font-semibold text-base pb-4">We deliver your order<br></br> promptly to your door</p>
                        </div>
                        
                    </div>
                </div>                
            </div>
        </div>
    );
};

export default Services;