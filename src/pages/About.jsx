import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
         <img src={assets.about_img} alt="" className='w-full md:max-w-[450px] text-gray-600'/>
         <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, officia hic! Omnis quia ducimus dolores nemo, earum explicabo maiores quibusdam facere! Voluptates ex asperiores voluptatum totam reprehenderit eligendi minus voluptatibus.
       </p>
       <b className='text-gray-800'>Our Mission</b>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur molestiae maiores perferendis quasi optio ad quisquam animi, beatae voluptas obcaecati sint nulla dolor veniam rerum consequuntur corrupti ipsa omnis?
       lat rem recusandae cupiditate autem suscipit aut facere ducimus quisquam alias, voluptate voluptatibus hic dolorum dolor distinctio, nulla dolores eaque iste. Explicabo distinctio beatae cupiditate tempore, eaque voluptas.</p>
         </div>
      </div>
      <div className="text-4xl py-4 ">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nobis.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nobis.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nobis.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
