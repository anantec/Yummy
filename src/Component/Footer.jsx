import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='w-full bg-black text-white'>
            <div className='grid grid-col-2 md:grid-cols-4 py-10 pl-6'>
            
                <div>
                    <h2 className='font-bold mb-3 text-[20px] md:text-[30px]'>Yummy <span className='text-[#f39c12]'>Food</span></h2>
                    <p className='text-[20px] text-[gray]'>© 2023 Developed By <br/> Anant Singh Dugtal</p>
                </div>
                <div>
                    <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>Company</h2>
                    <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>About</p>
                    <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Careers</p>
                    <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Teams</p>
                    <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Swiggy One</p>
                </div>
                <div>
                    <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>Help & Support</h2>
                    <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Company</p>
                    <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Partner with Us</p>
                    <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Ride with Us</p>
                </div>
                <div>
                    <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>We deliver to:</h2>
                    <p className=' text-[15px] md:text-[20px] mb-2 text-[gray]'>Bangalore</p>
                    <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Gurgaon</p>
                    <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Delhi</p>
                    <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Mumbai</p>
                    <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Pune</p>
                </div>
            
            </div>
        </div>
    </>
  )
}

export default Footer;