import React from 'react';

const Testimonials = () => {
    return (
        <div className='mt-20 '>
            <h1 className='text-center text-4xl font-bold text-neutral-950'>Testimonials</h1>
            <div className=' lg:flex justify-evenly items-center'>
            <div className='relative'>
                <img src="https://i.ibb.co/3sfY5mk/pngwing-2-1.png" className='w-full my-10 lg:my-0' alt="" />
                <span className='absolute right-0 lg:-right-16 text-neutral-950 bg-neutral-200  px-7 py-3 text-xl font-semibold  -bottom-5 rounded-bl-full rounded-tr-full'>Our Best Chef 😁</span>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-5xl font-bold text-neutral-950'>What Our Customers<br/> Say About Us</h1>
                <p className='text-2xl'>“I had the pleasure of dining at Foodi last night, and <br/> I'm still raving about the experience! The attention to<br/> detail in presentation and service was impeccable”</p>

            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                    <div className="w-12">
                    <img src="https://i.ibb.co/wYhxTC1/wepik-export-20240101094953n-Ra-F.png" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12">
                    <img src="https://i.ibb.co/bmhttP4/wepik-export-20240101095928-S5-Mr.png" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12">
                    <img src="https://i.ibb.co/QfDXG2t/wepik-export-20240101095547x-P7-V.png" />
                    </div>
                </div>
                <div className="avatar placeholder">
                    <div className="w-12 bg-neutral text-neutral-content">
                    <span>+99</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Testimonials;