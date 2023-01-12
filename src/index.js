import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Shop from './components/shop/pages/Shop';
import ShopIndex from './components/shop/pages/ShopIndex';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Content from './components/shop/pages/Content';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />}>
            <Route path='shop' element={<Shop />}>
                <Route index element={<ShopIndex />}/>
                <Route path='drinks/:itemId' element={<Content />}/>
                <Route path='food/:itemId' element={<Content />}/>
            </Route>   
        </Route>
    </Routes>
    </BrowserRouter>
);
