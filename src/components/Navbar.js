import React from "react"
import { Link } from 'react-router-dom';
import Cart from "./Cart";
import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function Navbar(){
    return (
        <nav className="flex justify-between sticky w-screen text-base px-24">
            <div className="nav--left flex">
                <Link to="/">
                    <img src="https://preview.codeless.co/kafe/default/wp-content/uploads/2022/06/logo-white.svg" className="cursor-pointer"/>
                </Link>        
            </div>
            <ul className="">
                <li><Link to="/">Home</Link></li>   
                <li>Menu</li>   
                <li><Link to="shop">Shop</Link></li>   
                <li>Contact</li>   
            </ul>
            <Link to="cart" className="nav--right flex">
                {/* <Cart className="l-32" />           */}
                <AiOutlineShoppingCart className="w-[30px] h-[30px]" />
            </Link>
        </nav>
    )
}