import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useStateValue } from '../StateProvider';


const Navbar = () => {
    const [{basket}, dispatch] = useStateValue();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 navbar-fixed-top ">
            <div className="container-fluid">
                <span className='navbar-brand text-info fs-4 '><strong>Technology</strong></span>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to={'/products'} className='nav-link'>Home</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex" role="search">
                        <Link to={'/login'} className='btn btn-success me-3'>Login</Link>
                        <Link to={'/registro'} className='btn btn-primary'>Registrar</Link>
                        <a href="/compras" className='btn btn'><img src="https://cdn.icon-icons.com/icons2/1351/PNG/512/icon-shoppingcart_87973.png" width={30} /><span class="badge badge-pill badge-danger">{2}</span></a>
                    


                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar