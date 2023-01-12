import React from 'react'
import { Outlet } from 'react-router-dom'
import ShopLayout from '../layout/ShopLayout'
export default function Shop() {

  return (
    <div className='flex'>
      <ShopLayout />
      <div className="mt-16">
        <Outlet />
      </div>
    </div>
  )
}
