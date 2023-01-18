import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useState } from 'react'


export default function Cart(props) {
    const [cartState, setCartState] = useState(false)

    const handleClick = () => {
        setCartState(cartState => !cartState)
    }

  return (
    <div className='flex'>
        <AiOutlineShoppingCart className='w-[30px] h-[30px] cursor-pointer m d-block b-10 relative'/>
        {cartState && (<div className='cart--box absolute right-20 top-[4.75rem] bg-white shadow-lg h-[80vh] w-80 text-black'>
            <div className='mt-5 ml-2'>
                <p>Products</p>
                <div className='flex '>
                    <img src={props.img} className='w-[80px] h-[80px]' />
                    <div className=' self-center'>
                        <p className='pr-8'>{props.name}</p>
                        <div className='flex text-center self-center'>
                        <button className='pr-5'>+</button>
                        <p  className='pr-5'>1</p>
                        <button>-</button>
                    </div>
                    </div>
                        <p className='self-center'>300$</p> 
                    
                </div>
            </div>

            <hr className='w-3/4 m-auto'/>
        </div>)}
    </div>
  )
}
