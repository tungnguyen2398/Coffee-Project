import React from "react"

export default function ProductItem(props){
    return (
        <div className="w-[350px] h-[440px] ">
            <img src={props.img} className="ml-7 cursor-pointer" />
            <hr className="w-[300px] mb-9 ml-5"/>
            <p className="product--name text-center mb-4 cursor-pointer ">{props.name}</p>
            <p className="text-center">{props.price}</p>
        </div>
    )
}