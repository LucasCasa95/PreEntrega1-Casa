export const Categorias = () => {
    return (
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mascotas
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Perros</a></li>
            <li><a className="dropdown-item" href="#">Gatos</a></li>
            <li><a className="dropdown-item" href="#">Aves</a></li>
          </ul>
        </li>
    );
}
