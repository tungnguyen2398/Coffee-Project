import {React, useContext, useState,useEffect} from 'react'
import { Cart } from '../Context';
import {BsFillTrashFill} from "react-icons/bs"

export default function SingleCartItem() {
    const {cart, setCart} = useContext(Cart)


    const [price, setPrice] = useState(0)

    const handlePrice = () => {
      let total = 0
      cart.map(item => {
        total += item.quantity * item.price
      })
      setPrice(total)
    }
    const handleRemove = (id) => {
      const arr = cart.filter((item) => item.id !== id)
      setCart(arr);
    }

    useEffect(() => {
      handlePrice()
    })

    const handleChange = (item, d) => {
      let ind = -1
      cart.forEach((data, index) => {
        if (data.id === item.id)
        ind = index
      });
      const tempArr = cart
      tempArr[ind].quantity += d

      if(tempArr[ind].quantity === 0)
      return
      setCart([...tempArr])
    }

    const items = cart.map(item => {
        return (
            <div key={item.id}>
              <div className="flex my-5">
                <img src={item.img} className="w-[120px] h-[120px] mr-4 ml-5"/>
                <div className='self-center'>
                  <p className='w-[200px] mr-28 mb-2'>{item.name}</p>
                </div>
                <div className='flex ml-72 mr-44 w-[100px]'>
                  {(item.quantity) === 1 ? <button className='w-5 max-h-5'></button> : <button className='w-5 max-h-5 bg-gray-200 self-center text-center pb-1' onClick={() => {handleChange(item, -1)}}>-</button>}
                  <p className='self-center px-2'>{item.quantity}</p>
                  <button className='w-5 max-h-5 bg-gray-200 self-center text-center pb-1' onClick={() => {handleChange(item, +1)}}>+</button>
                </div>
                <p className='self-center ml-3'>$ {item.price}</p>
                <BsFillTrashFill className='self-center ml-32 cursor-pointer' onClick={() => {handleRemove(item.id)}}/>
              </div>
                <hr className='w-full'/>
            </div>
        )
    });
  return (
    <div>
      <div>{items}</div>
      {cart.length === 0 ? "" : <div className='text-right mr-72 mt-10'>
                <span className='mr-10'>Total Price</span>
                <span>$ {price}</span>
      </div>}
      
    </div>
  )
}
