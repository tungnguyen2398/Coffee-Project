import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Shop from './components/shop/pages/Shop';
import ShopIndex from './components/shop/pages/ShopIndex';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Content from './components/shop/pages/Content';
import CartMain from './components/CartMain';
import { Context } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Context>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='shop' element={<Shop />}>
                        <Route index element={<ShopIndex />} />
                        <Route path='drinks/:itemId' element={<Content />}/>
                        <Route path='food/:itemId' element={<Content />}/>
                    </Route>
                    <Route path='cart' element={<CartMain />}/>   
                </Route>
            </Routes>
        </Context>
    </BrowserRouter>
);
