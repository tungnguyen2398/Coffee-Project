import React from 'react'
import { BsFacebook } from "react-icons/bs"
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai"

export default function Footer() {
  return (
    <div className='w-screen h-[600px]  bg-[#2B1A14] text-white'>
        <div className='pt-32 flex'>
            <div className='ml-96 mr-32'>
                <img src="https://preview.codeless.co/kafe/default/wp-content/uploads/2022/06/logo-white.svg " />
                <div className='flex mt-12'>
                    <BsFacebook className='footer--icon w-[36px] h-[36px] mr-1' />
                    <AiFillTwitterCircle className='footer--icon w-[40px] h-[40px]' />
                    <AiOutlineInstagram className='footer--icon w-[40px] h-[40px]' />
                </div>
            </div>
            <div className=' mr-32'>
                <div className='text-4xl cormorant'>Company</div>       
                <div className='mb-6 mt-12 brown cursor-pointer'>OUR COMPANY</div>
                <div className='mb-6 brown cursor-pointer'>OUR COFFEE</div>
                <div className='mb-6 brown cursor-pointer'>OUR COFFEE STORES</div>
                <div className=' brown cursor-pointer'>STORIES & NEWS</div>
            </div>
            <div className=' mr-32'>
                <div className='text-4xl cormorant'>Services</div>
                <div className='mb-6 mt-12 brown cursor-pointer'>BREWING GUIDE</div>
                <div className='mb-6 brown cursor-pointer'>MENU</div>
                <div className='mb-6 brown cursor-pointer'>COFFEE SHOP</div>
                <div className=' brown cursor-pointer'>RESERVATIONS</div>
            </div>
            <div className=' mr-32'>
                <div className='text-4xl cormorant'>Contact</div>
                <div className='mb-6 mt-12 brown'>CONTACT US</div>
                <div className='mb-6 gray'>1000 S Eighth Ave, New York 0019</div>
                <div className='mb-6 gray'>Phone (646) 652-9813</div>
                <div className='brown cursor-pointer'>info@Kafe.com</div>
            </div>
        </div>
            <hr className='gray w-3/4 m-auto mt-20'/>
            <div className='footer--text text-center mt-10'>
                <span>© 2023 Kafe Theme. All rights reserved.</span>
                <span className='ml-5 brown hover'>Privacy Policy</span>
                <span className='mx-2'>|</span>
                <span className=' brown hover'>Terms of Use</span>
            </div>
    </div>
  )
}
