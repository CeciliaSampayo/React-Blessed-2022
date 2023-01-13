import { Link } from 'react-router-dom';
const Categorias = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <button className="botonesNavBar"><Link className='nav-link' to={"/categoria/collares"}>Collares</Link></button>
            <button className="botonesNavBar"><Link className='nav-link' to={"/categoria/anillos"}>Anillos</Link></button>
            <button className="botonesNavBar"><Link className='nav-link' to={"/categoria/pulseras"}>Pulseras</Link></button>
            <button className="botonesNavBar"><Link className='nav-link' to={"/categoria/aros"}>Aros</Link></button>
            </div>
        </div>
    );
}

export default Categorias;