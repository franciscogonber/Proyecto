import './App.css';
import Detalle from './componentes/Detalle';
import Formulario from './componentes/Formulario';
import Lista from './componentes/Lista';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import FormularioEditar from './componentes/FormularioEditar';
import Registro from './componentes/Registro';
import Login from './componentes/Login';
import FormularioProducto from './componentes/FormularioProducto';
import Productos from './componentes/Productos';
import Navbar from './componentes/Navbar';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';
import Products from './componentes/Products';


function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
         
          <Route path='/registro' element={<Registro />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/newproduct' element={<FormularioProducto />}></Route>
          <Route path='/products' element={<Productos />}></Route>
          <Route path='/compras' element={<Products />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
