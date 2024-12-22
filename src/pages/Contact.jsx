import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-18">
        <img src={assets.contact_img} alt="" className='w-full md:max-w-[480px]'/>
        <div className="flex flex-col justify-center items-start gap-6">
          <p>Our store</p>
          <p className='font-semibold text-xl text-gray-600'></p>
          <p className='text-gray-500'>54709 Willins Station <br />Suite 350, washingngton,USA</p>
          <p className=''>Tel: (415) 555-0098 <br />Email: admin@rahul25062@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Carrers ate foreever</p>
          <p className='text-gray-500'>Learn more about our Teams and job openings.</p>
          <button className='border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>

        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact
