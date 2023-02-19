import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import React from 'react';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar nombre={"Huellitas"}/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
