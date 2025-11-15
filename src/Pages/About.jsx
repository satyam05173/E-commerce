import React from 'react'
import Title from '../Component/Title'
import { assets } from '../assets/assets'
import Newsletter from '../Component/Newsletter'

const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
<Title text1={'ABOUT'} text2={'US'}/>
    </div>

    <div className='my-10 flex flex-col md:flex-row gap-16'>
    <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />

    <div className=' flex flex-col justify-center  md:w-2/4 gap-6 text-gray-500'>
   <p> Welcome to ShopNexus Clothing, where fashion meets comfort, quality, and affordability. We are your go-to online destination for the latest trends and timeless wardrobe essentials. At ShopNexus Clothing, we believe that style should be accessible to everyone, and our goal is to provide you with an exceptional shopping experience, no matter your budget or fashion preference.</p>
   <p>  At ShopNexus Clothing, we’re committed to helping you express yourself through your clothing. We aim to deliver not only stylish and high-quality apparel but also outstanding customer service. If you ever have any questions or need assistance, our friendly support team is here to help you.

Thank you for choosing ShopNexus Clothing, where we believe every day is an opportunity to look and feel your best. Happy shopping!</p>
    </div>
    </div>



    <div className='text-xl  py-4 '>
<Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>

    <div className='flex flex-col md:flex-row text-sm  mb-20 '>
    <div className='border px-10 md:px-16  py-8 sm:py-20 flex flex-col gap-5 '>
<b>Quality Assurance:</b>
<p className='text-gray-600'>We ensure every item meets the highest standards of quality, from fabric to finishing, so you can trust your clothing to be both stylish and durable.</p>
    </div>

    <div className='border px-10 md:px-16  py-8 sm:py-20 flex flex-col gap-5 '>
<b>Convenience:</b>
<p className='text-gray-600'>Shop effortlessly with our easy-to-navigate website, secure payment options, and fast shipping, making your shopping experience seamless and stress-free.</p>
    </div>

    <div className='border px-10 md:px-16  py-8 sm:py-20 flex flex-col gap-5 '>
<b>Exceptional Customer Service:</b>
<p className='text-gray-600'>Our dedicated team is here to provide personalized support, ensuring that all your questions and concerns are addressed promptly and with care.</p>
    </div>
    </div>

    <Newsletter/>

    </div>
  )
}

export default About