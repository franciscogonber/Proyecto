import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';

const Productos = () => {

    const [lista, setLista] = useState([]);

    const [{ basket }, dispatch] = useStateValue();
    useEffect(() => {
        axios.get('http://localhost:8000/api/productos',{withCredentials:true}) // conectar fron con back ---los nombres de los parametros deben estar iguales a los nombre  en el modelo
            .then(respuesta => {
                setLista(respuesta.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])// cuando esta vacia [] se ejecuta solo una vez
    const eliminarAutor = (id) => {
        axios.delete("http://localhost:8000/api/productos/delete/" + id)
            .then(res => {
                removeFromDOM(id);
            })
    }
    const removeFromDOM = (id) => {
        setLista(lista.filter(item => item._id !== id));
    }
    const addToBasket = (id, nombre, descripcion, foto, precio) => {
        dispatch({
            type: actionTypes.ADD_TO_BASKET,
            item: {
                _id: id,
                nombre: nombre,
                descripcion: descripcion,
                foto: foto,
                precio: precio
            }
        })
    }


    return (
        <>

            <div className='container mt-5' >
                <div className="row " >
                    {lista && lista.map((item, index) => {
                        return (

                            <div className="col-sm-3 card h-30 p-1"  >
                                <div key={index} className="card">
                                    <img className="card-img-top" src={item.foto} alt="" style={{ maxHeight: '200px' }} />
                                    <div className="card-body" style={{ maxHeight: '300px', minHeight: '300px' }}>
                                        <h5 className="card-title">{item.nombre}</h5>
                                        <p className="card-text" style={{ maxHeight: '145px', minHeight: '145px' }} >{item.descripcion}</p>
                                        <button onClick={() => addToBasket(item._id, item.nombre, item.descripcion, item.foto, item.precio)} type="submit" className="btn btn-primary">Agregar al carrito</button>
                                        {/* <a  className="btn btn-primary" id={item._id} onClick={addToBasket(this.id)}>Agregar al carrito</a> */}
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Productos
