import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Cart } from '../Context'
import { Link } from 'react-router-dom'


export default function Basket() {

    const context = useContext(Cart)

  return (
    <div className='flex'>
        <Link to="/cart">
            <AiOutlineShoppingCart className='w-[30px] h-[30px] cursor-pointer m d-block b-10 relative' />
        </Link>
       {context.cart.length === 0 ? "" : context.cart.length}
    </div>
  )
}
