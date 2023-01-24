import React from "react"
import { Link } from 'react-router-dom';
import Basket from "./Basket";

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
                <li><Link to="/cart">Menu</Link></li>   
                <li><Link to="shop">Shop</Link></li>   
                <li>Contact</li>   
            </ul>
            <div className="nav--right flex">
                <Basket className="l-32" />          
            </div>
        </nav>
    )
}