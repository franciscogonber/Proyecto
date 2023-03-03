import axios from 'axios';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const FormularioProducto = () => {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState(0);
    const [foto, setFoto] = useState("");
    const [errores, setErrores] = useState({});
    const inputNombre = useRef();
    const manejarSubmit = (evento) => {
        evento.preventDefault();
        axios.post("http://localhost:8000/api/productos/new",{nombre, descripcion,precio, foto }) // conectar fron con back ---los nombres de los parametros deben estar iguales a los nombre  en el modelo
            .then(respuesta => {
                console.log(respuesta);
                setNombre("");
                setDescripcion("");
                setPrecio("");
                inputNombre.current.focus();
            })
            .catch(err => {
                console.log(err);
                setErrores(err.response.data.errors); //errores del backend
                inputNombre.current.focus();
            })
    }


  return (
    <div>
      <div className='container'>
            <h1>Agregar Producto</h1>
            <Link to = {"/"}>Home</Link>
            <form onSubmit={manejarSubmit} className = "border">
                <div className="mb-3">
                    <label  className="form-label">Producto</label>
                    <input value = {nombre} ref = {inputNombre} onChange={(evento) => setNombre(evento.target.value)} type="text" className="form-control" id="nombre"/>
                    {errores.nombre ? <p className='text-danger'>{errores.nomb.message}</p>:null}

                    <label  className="form-label">Descripcion</label>
                    <input value = {descripcion} onChange={(evento) => setDescripcion(evento.target.value)} type="text" className="form-control" id="descripcion"/>
                    {errores.name ? <p className='text-danger'>{errores.name.message}</p>:null}

                    <label  className="form-label">Precio</label>
                    <input value = {precio}  onChange={(evento) => setPrecio(evento.target.value)} type="number" className="form-control" id="precio"/>
                    {errores.name ? <p className='text-danger'>{errores.name.message}</p>:null}

                    <label  className="form-label">URL Foto</label>
                    <input value = {foto}  onChange={(evento) => setFoto(evento.target.value)} type="text" className="form-control" id="foto"/>
                </div>
                <Link to={"/"} className="btn btn-primary">Cancel</Link>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default FormularioProducto
