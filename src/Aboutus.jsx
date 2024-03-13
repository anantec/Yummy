import React from 'react'

const Aboutus = () => {
  return (
    <>
      <div className='text-gray-600 body-font w-[80%] mx-auto mt-[100px]'>
        <div className='px-[16px]'>
            <h2 className='mb-8 leading-relaxed text-[20px]'>
                Driving the force of <span className='text-[#fbc531]'>assortement</span>
            </h2>
            <p className='mb-8 leading-relaxed text-[20px]'>
                For over a decade now, we've been empowering our customers in discovering new tastes and experiences across countries. By putting together meticolous information for our customers, we ebnable them to make an informed choice.  
            </p>
        </div>
        <div className='container mx-auto flex px-5  py-24  md:flex-row flex-col items-center'>
            <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                <h2 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
                    Who are we?
                </h2>
                <p className='mb-8 leading-relaxed'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ut explicabo debitis atque ea esse excepturi, nemo, officia sit quisquam cum a nihil modi illo rem inventore porro molestias amet?
                    Fugit, deserunt ipsa rem soluta unde id optio sunt velit labore tempora et autem suscipit, ullam rerum non facilis est doloribus doloremque provident! Voluptatum, ea doloribus obcaecati cumque vitae reprehenderit?
                    Repellendus rem, beatae quas amet nam odit quos eveniet provident iste sint unde iusto deserunt asperiores rerum. Dicta quam deleniti architecto commodi, deserunt repudiandae reiciendis neque, numquam sequi labore voluptates.
                    Sunt nostrum aut, velit rem dolores vitae iste sapiente, porro molestiae possimus, maiores fugit a exercitationem? Aperiam molestias optio non dolor vero, dignissimos voluptas recusandae accusamus voluptates, ducimus magnam aspernatur?
                    Enim numquam laboriosam velit distinctio ratione quos nisi. Dicta, earum? Labore cupiditate aperiam impedit asperiores, id ut adipisci illum incidunt hic repudiandae similique minima architecto corrupti velit dolorum explicabo repellendus.
                    Iste expedita eum porro. Et quasi expedita totam porro, eaque natus perferendis magni nemo eveniet deserunt officiis aut! Vel dolorem magnam vero a temporibus quos voluptatum blanditiis, exercitationem laboriosam iste.
                   
                   
                </p>
            </div>
            <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                <img className='object-cover object-center rounded'
                src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp" alt="hero" />
            </div>
        </div>
      </div>
    </>
    )
}

export default Aboutus;