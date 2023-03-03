const ControladorProductos = require ("../controllers/productos.controller");
const {authenticate} = require ("../config/jwt.config")

module.exports = app => {
    app.get('/api/productos',authenticate, ControladorProductos.obtenerTodos);
    app.get("/api/productos/:id", authenticate, ControladorProductos.obtenerUno);
    app.post("/api/productos/new",ControladorProductos.crear);
    app.put("/api/productos/:id/edit",authenticate, ControladorProductos.actualizar);
    app.delete("/api/productos/delete/:id",authenticate, ControladorProductos.eliminar);
} 