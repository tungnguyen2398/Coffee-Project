import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useState } from 'react'
import { Cart } from '../Context'
import { Link } from 'react-router-dom'


export default function Basket() {

    const context = useContext(Cart)
    console.log(context.cart);


  return (
    <div className='flex'>
        <Link to="/cart">
            <AiOutlineShoppingCart className='w-[30px] h-[30px] cursor-pointer m d-block b-10 relative' />
        </Link>
        ({context.cart.length})
    </div>
  )
}
