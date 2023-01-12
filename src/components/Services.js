import React from "react"

export default function Services(){
    return (
        <div className="h-[800px] w-screen services">
            <div className="text-center pt-20">
                <p className="brown text-lg">From floral and bright to bold and smooth coffee flavors</p>
                <p className="py-8 text-7xl font-normal cormorant">Providing unique coffee experiences</p>
            </div>
            <div>
                <div  className="grid--parent max-h-96">
                        <div className="div1 h-[130px] w-[210px] text-right ml-16">
                        <h3 className="cormorant font-bold text-xl">Coffee Shop</h3>
                        <p className="gray">Our coffees are carefully selected for quality, flavor, and social impact</p>
                        </div>
                        <div className="div2 h-[130px] w-[210px] text-right ml-16">
                        <h3 className="cormorant font-bold text-xl">Coffe Machine</h3>
                        <p className="gray">Our coffees are carefully selected for quality, flavor, and social impact</p>
                        </div >
                        <div className="div3 h-[130px] w-[210px] text-right ml-16">
                        <h3 className="cormorant font-bold text-xl">High Quality</h3>
                        <p className="gray">Our coffees are carefully selected for quality, flavor, and social impact</p>
                        </div>                   
                    <div className="div4 mr-8">
                        <img src="https://i.imgur.com/xzlkoa4.png"/>
                    </div>
                    <div className="div5 h-[130px] w-[210px] text-left">
                        <h3 className="cormorant font-bold text-xl">The Perfect Cup</h3>
                        <p className="gray">Our coffees are carefully selected for quality, flavor, and social impact</p>
                    </div>
                    <div className="div6 h-[130px] w-[210px] text-left">
                        <h3 className="cormorant font-bold text-xl">Barista Coffee</h3>
                        <p className="gray">Our coffees are carefully selected for quality, flavor, and social impact</p>
                    </div>
                    <div className="div7 h-[130px] w-[210px] text-left">
                        <h3 className="cormorant font-bold text-xl">Supreme Beans</h3>
                        <p className="gray">Our coffees are carefully selected for quality, flavor, and social impact</p>
                    </div>
                </div>
            </div>
        </div>
    )
}