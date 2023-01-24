import {useContext,React, useState} from 'react'
import { Cart } from '../Context'
import SingleCartItem from './SingleCartItem'

export default function CartMain() {


  return (
    <div className=' h-[80vh] w-auto mt-28 mx-60'>
      <div className='flex bg-[#FF6139] text-white w-full'>
        <p className='self-start mr-80 ml-5'>Product</p>
        <div className='flex'>
          <p className='ml-20 pr-10'></p>
          <p className='mx-56 ml-30'>Quantity</p>
          <p>Subtotal</p>
        </div>
      </div>
      <div className='item mt-5 '>
        <SingleCartItem />
      </div>
    </div>
  )
}
