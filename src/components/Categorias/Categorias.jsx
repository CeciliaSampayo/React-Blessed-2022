import { Link } from 'react-router-dom';
const Categorias = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <button className="botonesNavBar"><Link className='nav-link' to={"/categoria/procesadores"}>Collares</Link></button>
            <button className="botonesNavBar"><Link className='nav-link' to={"/categoria/graficas"}>Anillos</Link></button>
            <button className="botonesNavBar"><Link className='nav-link' to={"/categoria/motherboards"}>Ver productos</Link></button>
            </div>
        </div>
    );
}

export default Categorias;