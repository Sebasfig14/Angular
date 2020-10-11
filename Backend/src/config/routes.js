const express=require("express")
const jwt=require("jsonwebtoken")
const controlleruser=require("../controller/controlleruser")
const clientes=require("../controller/controllerclientes")
const controllerclientes = require("../controller/controllerclientes")
const controllerempleados = require("../controller/controllerempleados")
const controllerproductos = require("../controller/controllerproductos")
const controllerfacturas = require("../controller/controllerfacturas")
const controllerProductos_factura = require("../controller/controllerProductos_factura")
var routes=express.Router()
const security = (req,res,next)=>{
	let token = req.headers["access-token"]
	if(typeof token === "undefined"){
		res.send("SIN ACESSO")
	}else{
		const parts = token.split(" ")
		if(typeof parts[0] !== "undefined" && typeof parts[1] !== "undefined"){
			jwt.verify(parts[1],"claves",(err,data)=>{
				if(err){res.send("SIN ACCESO")}
				else{return next()}
			})
		}else{
			res.send("SIN ACCESO")
		}
	}

}

routes.post("/login",controlleruser.login)
routes.get("/clientes",security,controllerclientes.metodoget)
routes.get("/clientes/:id",security,controllerclientes.metodoget2)
routes.post("/clientes",security,controllerclientes.metodopost)
routes.put("/clientes/:id",security,controllerclientes.metodoput)
routes.delete("/clientes/:id",security,controllerclientes.metododelete)


routes.get("/empleados",security,controllerempleados.metodoget)
routes.get("/empleados/:id",security,controllerempleados.metodoget2)
routes.post("/empleados",security,controllerempleados.metodopost)
routes.put("/empleados/:id",security,controllerempleados.metodoput)
routes.delete("/empleados/:id",security,controllerempleados.metododelete)


routes.get("/productos",security,controllerproductos.metodoget)
routes.get("/productos/:id",security,controllerproductos.metodoget2)
routes.post("/productos",security,controllerproductos.metodopost)
routes.put("/productos/:id",security,controllerproductos.metodoput)
routes.delete("/productos/:id",security,controllerproductos.metododelete)


routes.get("/clientes/:id/facturas",security,controllerfacturas.metodoget)
routes.get("/empleados/:id/facturas",security,controllerfacturas.metodoget2)
routes.get("/facturas/:id",security,controllerfacturas.metodoget3)
routes.post("/facturas",security,controllerfacturas.metodopost)
routes.put("/facturas/:id",security,controllerfacturas.metodoput)
routes.patch("/facturas/:id",security,controllerfacturas.metodopatch)
routes.delete("/facturas/:id",security,controllerfacturas.metododelete)


routes.get("/facturas/:id/productos",security,controllerProductos_factura.metodoget)
routes.post("/facturas/:id/detalle",security,controllerProductos_factura.metodopost)
routes.delete("/facturas/:id/productos",security,controllerProductos_factura.metododelete)

module.exports={routes}
