import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from '../context/DarkModeContext';
import { ToastContainer} from 'react-toastify';

import { Navbar } from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/Cart';


function App() {
  return (
    <>
    <BrowserRouter>
    <DarkModeProvider>
    <Navbar nombre={"Huellitas"}/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <ToastContainer/>
    </DarkModeProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
