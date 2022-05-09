import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Princiapl from '../paginas/Principal';
import App from '../../App';

const Rutas = () => {
    return ( <BrowserRouter>
        <Routes>
            <Route path="/" element={<Princiapl/>}></Route>
            <Route path="/app" element={<App/>}></Route>
        </Routes>
    </BrowserRouter>  );
}
 
export default Rutas;