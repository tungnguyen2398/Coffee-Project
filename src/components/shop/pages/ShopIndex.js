import React from 'react'
import shopData from '../data/shopData'
import { Link } from 'react-router-dom'
import Cart from '../../Cart'

export default function ShopIndex() {
    const drinkfiller = shopData.filter(drink => drink.category === "drink")
    const foodfiller = shopData.filter(food => food.category === "food")

    const drink = drinkfiller.map(item => {
        return(
            <div className='w-1/2' key={item.name}>
                <Link to={`drinks/${item.id}`}  className='flex'>
                    <img src={item.img} className=""/>
                    <p className='self-center'>{item.name}</p>
                </Link>
            </div>
        )
    })

    const food = foodfiller.map(item => {
        return (
            <div className='w-1/2' key={item.name}>
                <Link to={`food/${item.id}`}  className='flex'>
                    <img src={item.img} className=""/>
                    <p className='self-center'>{item.name}</p>
                </Link>
            </div>
        )
    })
  return (
    <div className='w-3/4 flex'>
        <div className='ml-32'>
            <p className='text-2xl font-bold mb-12'>Shop</p>
            <div>
                <p className='text-2xl font-bold'>Drinks</p>
                <hr className='w-3/4'/>
                <div className='flex w-3/4 flex-wrap'>
                    {drink}
                </div>
                <p className='text-2xl font-bold'>Food</p>
                <hr className='w-3/4'/>
                <div className='flex w-3/4 flex-wrap'>
                    {food}
                </div>           
            </div>
        </div>
    </div>
  )
}
