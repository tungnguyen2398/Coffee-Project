import {useContext,React, useState} from 'react'
import { Cart } from '../Context'

export default function CartMain() {
  const context = useContext(Cart)
  const [quantity, setQuantity] = useState(1)

  const items = context.cart.map(item => {
    return (
      <div>
        <div key={item.id} className="flex my-5">
          <img src={item.img} className="w-[120px] h-[120px] mr-4"/>
          <div className='self-center'>
            <p className='w-[200px] mr-28 mb-2'>{item.name}</p>
            <p>${item.price}</p>
          </div>
          <p className='ml-96 mr-64 self-center'>{quantity}</p>
          <p className='self-center'>Subtotal</p>
        </div>
          <hr className='w-full'/>
      </div>
    )
});

  return (
    <div className=' h-[80vh] w-auto mt-28 mx-60'>
      <div className='flex bg-[#FF6139] text-white w-full'>
        <p className='self-start mr-96 ml-5'>Product</p>
        <div className='flex'>
          <p className='ml-20 pr-10'></p>
          <p className='mx-56 ml-30'>Quantity</p>
          <p>Subtotal</p>
        </div>
      </div>
      <div className='item mt-5 '>
        {items}
      </div>
    </div>
  )
}
