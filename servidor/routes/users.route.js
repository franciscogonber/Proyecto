const ControladorUsuario = require ("../controllers/users.controller");
module.exports = app => {
   
    app.post("/api/registrar", ControladorUsuario.registraUsuario);
    app.post("/api/login", ControladorUsuario.loginUsuario);
    
}