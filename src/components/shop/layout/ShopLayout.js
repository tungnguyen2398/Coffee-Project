import React from 'react'
import shopData from '../data/shopData'
import { Link, } from 'react-router-dom'

export default function ShopLayout() {
  const drinkfiller = shopData.filter(drink => drink.category === "drink")
  const foodfiller = shopData.filter(food => food.category === "food")

    const drink = drinkfiller.map(item => {
        return (
          <Link to={`drinks/${item.id}`}  key={item.name}>
            <p className="pb-6 cursor-pointer d-inline w-32">{item.name}</p>
          </Link>
        )
      })
      const food = foodfiller.map(item => {
        return (
          <Link to={`food/${item.id}`}  key={item.name}>
            <p className="pb-6 cursor-pointer d-inline w-32">{item.name}</p>
          </Link>
        )
      })

  return (
    <div className='pt-10 flex'>
      <div className='pl-32 w-[250px]'>
        <div className='text-lg font-bold pb-6'>Drinks</div>
          {drink}
        <div className='text-lg font-bold pb-6'>Food</div>
        {food}
      </div>
    </div>
  )
}
