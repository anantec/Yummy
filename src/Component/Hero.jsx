import React, { useEffect, useState } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Hero = () => {
    const imgData=[
        {
            url:' https://res.cloudinary.com/ehizeex-shop/image/upload/v16726720/NetflixApp/burger_emxbtv.jpg'
        },
        {
            url:' https://res.cloudinary.com/ehizeex-shop/image/upload/v167267245/NetflixApp/pizza_osjb4f.jpg'
        },
        {
            url:' https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg'
        }
    ];

    const [slider, setSlider]= useState(0);
     
    const handldeMinus= ()=>{
        setSlider(slider==0?imgData.length-1:slider-1)
    };
    const handldeplus= ()=>{
        setSlider(slider==imgData.length-1?0:slider+1)
    };

    useEffect(()=>{
      const sliderClear = setInterval(()=>{
        handldeplus();
    },2000)

        return()=> clearInterval(sliderClear)
    },[slider]);
  return (
   <>
   <div className='mt-[100px]'>
      <div className='w-[90%] mx-auto h-[80vh] my-5 relative'>
           {
               imgData.map((item,i)=>(
                   <div key={i} className={`${slider===i? "block" : "hidden"}`}>
                       <img src={item.url} alt='' className='w-full h-[80vh] rounded-2xl object-cover'/>
       
                   </div>
               ))
           }
           <div className='w-full mx-auto h-[80vh] bg-black absolute top-0 left-0 opacity-50 rounded-2xl'></div>
           <div className='absolute w-full flex justify-center text-[20px] md:text-[30px] mx-auto  top-[50%] text-center text-white'>
           <p className=''>Welcome to the world of Tasty and Fresh Food</p>
           </div>
   
          <div className='flex justify-between w-full px-5 absolute top-[50%] text-white '>
          <FaChevronLeft size={40} onClick={handldeMinus} className='cursor-pointer'/>
          <FaChevronRight size={40} onClick={handldeplus} className='cursor-pointer'/>
          </div>
       </div>
   </div>
   </>
  )
}

export default Hero