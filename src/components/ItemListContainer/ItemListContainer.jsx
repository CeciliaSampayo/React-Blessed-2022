import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import { cargarBDD, getProductos, getProducto, updateProducto, deleteProducto } from '../../assets/firebase.js';


const ItemListContainer = () => {
    // cargarBDD();
    const [productos, setProductos] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {
        if (categoria) {
            getProductos().then(products => {
                const productList = products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === categoria);
                const cardProductos = ItemList({ productList })
                setProductos(cardProductos);
            });
        } else {
            getProductos().then(products => {
                const productList = products.filter(prod => prod.stock > 0);
                const cardProductos = ItemList({ productList })
                setProductos(cardProductos);
            });
        }
        cargarBDD().then(productos => console.log(productos))
        // getProductos().then(productos => console.logs(productos))
        //getProducto("poner id el profe lo explico en firebase 2").then(prod => {
        //prod.stock -=5
        // updateProducto(prod.id, prod).then(estado => console.log(estado))
        //})

        //deleteProducto("id sacado de firebase").then(estado => console.log(estado))


    },
        [categoria]);
    return (
        <div className='row cardProductos' >
            {productos}
        </div>
    );
}

export default ItemListContainer;