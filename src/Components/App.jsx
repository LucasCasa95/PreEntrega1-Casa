import './App.css';
import { Navbar } from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer'; 
import React from 'react';

function App() {
  return (
    <>
    <Navbar nombre={"Huellitas"}/>
    <ItemListContainer greeting={"Productos"}/>
    </>
  );
}

export default App;
