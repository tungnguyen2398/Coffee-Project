import React from 'react'
import Slide from "./components/Slide"
import Services from "./components/Services";
import Menu from "./components/Menu"
import Product from "./components/Product";
import Testimonial from "./components/testimonial/Testimonial";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
        <Slide />
        <Services />
        <Menu />
        <Product />
        <Subscription />
        <Testimonial />
        <Footer />
    </div>
  )
}
