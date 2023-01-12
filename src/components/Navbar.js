import React from "react"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';


export default function Navbar(){
    return (
        <nav className="flex justify-around w-screen text-base">
            <div className="nav--left flex">
                <Link to="/">
                    <img src="https://preview.codeless.co/kafe/default/wp-content/uploads/2022/06/logo-white.svg" className="cursor-pointer"/>
                </Link>        
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>   
                <li>Menu</li>   
                <li><Link to="shop">Shop</Link></li>   
                <li>Contact</li>   
            </ul>
            <div className="nav--right flex">
                <AiOutlineShoppingCart className="icon mx-3"/>
                <FiUser className="icon"/>
            </div>
        </nav>
    )
}