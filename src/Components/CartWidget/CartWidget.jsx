import React from 'react';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/CarritoContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

export const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    return (
        <>
            <Link className='nav-link' to={"/cart"}>
                <button className="btn btn-dark cartWidget"><FontAwesomeIcon icon={faCartShopping} /></button>
                {getItemQuantity() > 0 && <span className='cantCarrito'>
                {getItemQuantity()}</span>}
                </Link>
        </>
    );
}
