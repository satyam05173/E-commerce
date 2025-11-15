import React from 'react'
import Title from '../Component/Title'
import { assets } from '../assets/assets'
import Newsletter from '../Component/Newsletter'

const Contact = () => {
  return (
    <div>

<div className='text-2xl text-center pt-10 border-t'>
<Title text1={'CONTACT'} text2={'US'}/>
    </div>

    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
    <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />

    <div className='flex flex-col justify-center  items-start gap-6'>
      <p  className=' font-semibold text-xl text-gray-600'>Our Store</p>
      <p className='  text-gray-500'>54709 Willims Station <br /> Suite 350,Washington,USA</p>
      <p className='  text-gray-500'>Tel: (415) 555-0143 <br /> Email:admin@nexus.com </p>
      <p  className=' font-semibold text-xl text-gray-600'>Careers at Shopnexus</p>
      <p className='  text-gray-500'>Learn more about our teams and job opening</p>
      <button className=' border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500  text-gray-500'>Explore Jobs</button>
   
    </div>
    </div>


<Newsletter/>
    </div>
  )
}

export default Contact