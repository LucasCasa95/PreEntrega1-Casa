import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

export const CartWidget = ({cantCarrito}) => {
    return (
        <>
            <Link className='nav-link' to={"/cart"}><button className="btn btn-dark"><FontAwesomeIcon icon={faCartShopping} /></button></Link>
            
            <p>{cantCarrito}</p>
        </>
    );
}
