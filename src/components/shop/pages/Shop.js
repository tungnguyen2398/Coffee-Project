import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import ShopLayout from '../layout/ShopLayout'
import ShopIndex from './ShopIndex'

export default function Shop() {
  
const [dataState, setDataState] = useState({})
  return (
    <div className='flex'>
      <ShopLayout />
      <div className="mt-16">
          <Outlet />
      </div>
    </div>
  )
}
