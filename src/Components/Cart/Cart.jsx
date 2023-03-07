import React from 'react';
import { Link } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';

export const Cart = () => {
const carrito = [{id: 1,idCategoria: 1,cant: 10, nombre:"Pedigree adulto carne, pollo y cereales X 15kg" ,precio: 5840,stock: 50,img: "pedigre_perro_15kg.webp"},{id: 1,idCategoria: 1,cant: 13,nombre:"Pedigree adulto carne, pollo y cereales X 15kg" ,precio: 5840,stock: 50,img: "pedigre_perro_15kg.webp"},{id: 1,idCategoria: 1, cant: 6, nombre:"Pedigree adulto carne, pollo y cereales X 15kg" ,precio: 5840,stock: 50,img: "pedigre_perro_15kg.webp"}]

return(
<>
  {
    carrito.length === 0
    ?
     <>
     <h2>Carrito vacio</h2>
     <Link className='nav-link' to={"/"}><button className='btn btn-primary'>Continuar comprando</button></Link>
     </>
     :
     <div className='container cartContainer'>
      <ItemList prods={carrito} plantilla="ItemCart"/>
      <div className="divButtons">
        <p>Resumen de la compra: PrecioTotal</p>
        <button className='btn btn-danger' onClick={() => console.log("Productos eliminados")}>Vaciar Carrito</button>
        <Link className='nav-link' to={"/"}><button className='btn btn-dark'>Continuar comprando</button></Link>
        <Link className='nav-link' to={"/checkout"}><button className='btn btn-dark'>Finalizar compra</button></Link>
      </div>
     </div>
  }

</>
)

}

