import React from "react"
import ProductItem from "./ProductItem"

export default function Product() {
    return (
        <div className="product h-[1200px] w-screen">
            <div className="product--top text-center w-screen pt-20 mt-10">
                <p className="mb-10">Check out our selection of featured coffees and products</p>
                <h1 className="text-6xl cormorant">Here you can buy our featured products</h1>
                <img src="https://preview.codeless.co/kafe/default/wp-content/plugins/cowidgets-kafe//assets/images/shape.png" alt="" className="ml-[53.125rem] mt-10"/>
            </div>
            <div className="ml-[415px] w-[1150px] flex">
                <div>
                    <ProductItem 
                        name="Caramel Macchiato"
                        price="£8.00"
                        img="https://preview.codeless.co/kafe/default/wp-content/uploads/2022/06/Img-2.png"
                    />
                    <ProductItem 
                        name="Mocha"
                        price="£8.00"
                        img="https://preview.codeless.co/kafe/default/wp-content/uploads/2022/06/Img-3.png"
                    />
                </div>
                <div>

                    <ProductItem 
                        name="French Vanilla"
                        price="£8.00"
                        img="https://preview.codeless.co/kafe/default/wp-content/uploads/2022/06/Img-4.png"
                    />
                    <ProductItem 
                        name="Latte"
                        price="£8.00"
                        img="https://preview.codeless.co/kafe/default/wp-content/uploads/2022/06/Img-5.png"
                    />
                </div>
                <div>

                    <ProductItem 
                        name="Caramel Latte"
                        price="£8.00"
                        img="https://preview.codeless.co/kafe/default/wp-content/uploads/2022/06/Img-6.png"
                    />
                    <ProductItem 
                        name="Americano"
                        price="£8.00"
                        img="https://preview.codeless.co/kafe/default/wp-content/uploads/2022/06/Img-7.png"
                    />
                </div>
                
            </div>
        </div>
    )
    
}