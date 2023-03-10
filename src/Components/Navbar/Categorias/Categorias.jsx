import React from "react";
import { Link } from "react-router-dom";

export const Categorias = React.memo(() => {
    return (
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><button className="btn btn-dark">Mascotas</button></a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={'/category/1'}>Perros</Link></li>
            <li><Link className="dropdown-item" to={'/category/2'}>Gatos</Link></li>
            <li><Link className="dropdown-item" to={'/category/3'}>Aves</Link></li>
          </ul>
        </li>
    );
})
