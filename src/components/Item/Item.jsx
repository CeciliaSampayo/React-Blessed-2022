import { Link } from 'react-router-dom';
import { useDarkModeContext } from '../../context/DarkModeContext';
const Item = ({producto}) => {
    const {darkMode} = useDarkModeContext();
    return (
            <div className={`card ${darkMode ? 'cardProductoDark' : 'cardProducto'}`}>
            <img src={producto.img} className="card-img-top imagenCard" alt="..." />
                <div className={`card-body ${darkMode ? 'cardBodyDark' : 'cardBody'}`}>
                    <h4 className="card-title">{`${producto.nombre}`}</h4>
                    <p className="card-title">Informacion: {`${producto.informacion}`}</p>
                    <p className="card-title">Precio: $ {new Intl.NumberFormat('de-DE').format(producto.precio)}</p>
                    <button><Link className='nav-link botonProductos' to={`/producto/${producto.id}`}>Ver Producto</Link></button>
                </div>
            </div>
    );
}

export default Item;