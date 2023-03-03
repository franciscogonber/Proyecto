const Usuario = require('../models/users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET_KEY

module.exports = {

    registraUsuario: async (req, res) =>{
        try{
            const nuevoUsuario = await Usuario.create(req.body)
            const userToken = jwt.sign({_id:nuevoUsuario._id}, SECRET)
            res.status(201).cookie('userToken', userToken, {httpOnly:true, expires:new Date(Date.now() + 90000)})
            .json({successMessage:"Usuario registrado ", user:nuevoUsuario})
        }catch(error){
            res.status(401).json(error)
        }
    },
    loginUsuario: async(req, res) =>{
        const usuario = await Usuario.findOne({email:req.body.email})
        console.log (usuario)
        if(!usuario){
            res.status(400).json({error:"Email/Password no valido"})
        }
        try {
            const passwordValida = await bcrypt.compare(req.body.password, usuario.password)
            if (!passwordValida){
                res.status(400).json({error:"Password no valido"})
            }else { 
                const userToken = jwt.sign({_id:usuario._id}, SECRET)
                res.status(201).cookie('userToken', userToken, {httpOnly:true, expires:new Date(Date.now()+9000)}).json({successMessage: "Usuario logeado", user:usuario})
    
            }
        }catch(error){
            res.status(400).json({error:"Email/Password no valido"})
        }    
},
logOutUser:(req, res) => {
    res.clearCookie('userToken')
    res.json({success:'Usuario desconectado'})
}
}