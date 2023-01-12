import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, getDocs, getDoc, collection, doc, updateDoc, deleteDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "process.env.API_KEY",
  authDomain: "blessed-react-2022.firebaseapp.com",
  projectId: "blessed-react-2022",
  storageBucket: "blessed-react-2022.appspot.com",
  messagingSenderId: "853240824489",
  appId: "1:853240824489:web:02de328f08dfb9ed7f1fb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async(prod) => {
        await addDoc(collection(db,"productos"), {
            nombre: prod.nombre,
            informacion: prod.informacion,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.stock,
            img: prod.stock


        })
    })
}
const getProductos = async() => {
    const productos = await getDocs(collection(db,"productos"))
    const items = productos.docs.map(prod =>{
        return {...prod.data(), id: prod.id}
    })
    return items
}

const getProducto = async(id) => {
const productos = await getDoc(doc(db,"productos", id))
const item = {...productos.data(), id:productos.id}
return item
}


const updateProducto = async (id, info) => {
    const estado = await updateDoc(doc(db,"productos", id), info)
    return estado
}

const deleteProducto = async(id) =>{
    const estado = await deleteDoc(doc(db, "productos", id))
    return estado
}

const createOrdenCompra = async (cliente, preTotal, fecha ) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"),{
        nombreCompleto: cliente.nombreCompleto,
        dni: cliente.DNI,
        celular: cliente.celular,
        direccion: cliente.direccion,
        email: cliente.email,
        fecha: fecha,
        precioTotal: preTotal
    })

    return ordenCompra
}

const getOrdenCompra =  async (id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    const item = {...ordenCompra.data(), id: ordenCompra.id}
    return item
}

export {cargarBDD, getProductos,getProducto,updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra}