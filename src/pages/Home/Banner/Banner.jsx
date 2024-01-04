import { Autoplay,  Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './Banner.css'
import { useState } from 'react'
import axios from 'axios'

const Banner = () => {
  const [added, setAdded] = useState(0)

  const handleAdded = () =>{
    axios.post('https://foodi-restaurant-server-2.onrender.com/products', {
      added
    })
  }




  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[ Autoplay, Navigation]}
        className='mySwiper flex'
      >
        <SwiperSlide>
          <div className=' flex flex-col-reverse lg:flex-row items-center justify-between px-20 '>
            <div className='lg:w-1/2'>
                <h1 className='text-[#000] text-4xl lg:text-6xl font-extrabold '>Dive into Delights Of Delectable <span className='text-primary-bg'>Food</span></h1>
                <p className='py-12 font-medium text-2xl text-[#4A4A4A]'>Where Each Plate Weaves a Story of <br></br>Culinary Mastery and Passionate Craftsmanship</p>
                <button className='btn rounded-full px-10 bg-primary-bg text-neutral-50 font-semibold text-xl h-16 hover:text-neutral-950'>Order Now</button>
                </div>
            <div className='lg:w-1/2'>
              <img src='https://i.ibb.co/DKhnqWb/background3.png' className='w-full' alt='' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' flex flex-col-reverse lg:flex-row items-center justify-between px-20'>
            <div className='lg:w-1/2'>
                <h1 className='text-[#000] text-4xl lg:text-6xl font-extrabold '>Dive into Delights Of Delectable <span className='text-primary-bg'>Food</span></h1>
                <p className='py-12 font-medium text-2xl text-[#4A4A4A]'>Where Each Plate Weaves a Story of <br></br>Culinary Mastery and Passionate Craftsmanship</p>
                <button className='btn rounded-full px-10 bg-primary-bg text-neutral-50 font-semibold text-xl h-16 hover:text-neutral-950'>Order Now</button>
                </div>
            <div className='lg:w-1/2 '>
              <img src='https://i.ibb.co/LxhF0nD/backgound4.png' className='w-full' alt='' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' flex flex-col-reverse lg:flex-row items-center justify-between px-20'>
            <div className='lg:w-1/2'>
                <h1 className='text-[#000] text-4xl lg:text-6xl font-extrabold '>Dive into Delights Of Delectable <span className='text-primary-bg'>Food</span></h1>
                <p className='py-12 font-medium text-2xl text-[#4A4A4A]'>Where Each Plate Weaves a Story of <br></br>Culinary Mastery and Passionate Craftsmanship</p>
                <button className='btn rounded-full px-10 bg-primary-bg text-neutral-50 font-semibold text-xl h-16 hover:text-neutral-950'>Order Now</button>
                </div>
            <div className='lg:w-1/2'>
              <img src='https://i.ibb.co/sH43g4D/background2.png' className='w-full px-10' alt='' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' flex flex-col-reverse lg:flex-row items-center justify-between px-20'>
            <div className='lg:w-1/2'>
                <h1 className='text-[#000]  text-4xl lg:text-6xl font-extrabold '>Dive into Delights Of Delectable <span className='text-primary-bg'>Food</span></h1>
                <p className='py-12 font-medium text-2xl text-[#4A4A4A]'>Where Each Plate Weaves a Story of <br></br>Culinary Mastery and Passionate Craftsmanship</p>
                <button className='btn rounded-full px-10 bg-primary-bg text-neutral-50 font-semibold text-xl h-16 hover:text-neutral-950'>Order Now</button>
                </div>
            <div className='lg:w-1/2'>
              <img src='https://i.ibb.co/b60dL2t/background1.png' className='w-full' alt='' />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Banner
