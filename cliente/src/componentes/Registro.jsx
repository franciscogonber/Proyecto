import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Registro = () => {

    const [nombre,setNombre] = useState('')
    const [apellido,setApellido] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [errores, setErrores] = useState([]);
    const navigate = useNavigate()

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/registrar', {
            nombre, apellido, email, password, confirmPassword
        }, {withCredentials:true})
        .then((res)=>{
            console.log(res)
            navigate('/products')
        }).catch((err)=>{
            setErrores(err.response.data.errors)
            console.log(err)
        })
    }
  return (
    <div>
        <form onSubmit={submitHandler} className='col-6 mx-auto'>
            <label htmlFor=""  className='form-label'>Nombre:</label>
            <input type="text" className='form-control' onChange={(e)=>setNombre(e.target.value)}/>
            {errores.nombre ? <p className='text-danger'>{errores.nombre.message}</p> : null}

            <label htmlFor=""  className='form-label'>Apellido:</label>
            <input type="text" className='form-control' onChange={(e)=>setApellido(e.target.value)}/>
            {errores.apellido ? <p className='text-danger'>{errores.apellido.message}</p> : null}

            <label htmlFor="" className='form-label'>Email:</label>
            <input type="text" className='form-control'onChange={(e)=>setEmail(e.target.value)}/>   
            {errores.email ? <p className='text-danger'>{errores.email.message}</p> : null}

            <label htmlFor="" className='form-label'> Password</label>
            <input type="password" className='form-control'onChange={(e)=>setPassword(e.target.value)}/>
            {errores.password ? <p className='text-danger'>{errores.password.message}</p> : null}

            <label htmlFor="" className='form-label'> Confirm Password</label>
            <input type="password" className='form-control'onChange={(e)=>setConfirmPassword(e.target.value)}/>
            <button className='btn btn-primary mt-3'> Registrate</button>
        </form>
    </div>
  )
}

export default Registro