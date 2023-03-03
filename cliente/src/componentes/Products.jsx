import React from 'react'
import { useStateValue } from '../StateProvider';


const Products = () => {
    const [{basket}, dispatch] = useStateValue();
    console.log("Basket",basket);

  return (
    <>
    <h2>Compras</h2>
       {basket && basket.map((item) => {
                return (
                        <div className='container mt-5' >
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="card">
                                            
                                            <img className="card-img-top" src={item.foto} alt="" />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.nombre}</h5>
                                                <p className="card-text">{item.descripcion}</p>
                                                {/* <a  className="btn btn-primary" id={item._id} onClick={addToBasket(this.id)}>Agregar al carrito</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                )
            })}
    </>
  )
}

export default Products
