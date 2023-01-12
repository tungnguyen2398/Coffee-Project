import React from 'react'

export default function Subscription() {
  return (
    <div className='text-center w-screen bg-[#f0e6d9]'>
        <div className='h-[350px]'>
            <div className='text-6xl cormorant pt-20'>Your favourite coffees, delivered</div>
            <div className='text-6xl cormorant mb-5'>to your door every month</div>
            <div className='mb-20'>With the subscription, enjoy your favourite coffees without having to think about it</div>
        </div>
        <div className='sub--input'>
            <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none h-[42px] ml-[645px]">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            </div>
            <input type="text" id="input-group-1" className=" border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 bg-[#F7F5F1] w-[470px] pl-10 p-2.5" placeholder="Your Email" />         
            <button className='mb-40 ml-4 bg-[#B98D58] w-[105px] h-[40px] text-white text-sm'>SIGN UP</button>
            </div>
        </div>
        <div className='flex'>
            <div>
                <img src="https://preview.codeless.co/kafe/default/wp-content/uploads/2022/06/1-1.png"/>
            </div>
            <div  className='flex'>
                <div>
                    <img src="https://preview.codeless.co/kafe/default/wp-content/uploads/elementor/thumbs/2-pqzgih54tkmv37d2ckz25rchdqrat7urxvotd5s2p8.png" />
                    <img src="https://preview.codeless.co/kafe/default/wp-content/uploads/2022/06/3.png" />
                </div>
                <div>
                    <img src="https://preview.codeless.co/kafe/default/wp-content/uploads/elementor/thumbs/4-pqzgkxhynzztejsq0n5zo51t7ynswrljm10gh652gc.png" />
                    <img src="https://preview.codeless.co/kafe/default/wp-content/uploads/2022/06/5.png" />
                </div>
            </div>
        </div>
    </div>
  )
}
