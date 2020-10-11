const mysql = require("mysql");
const conect = require("../Config/Connect");
const metodoget=(req,res)=>{
    /*res.send("GET Productos_factura")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "SELECT pf.id,p.nombre,pf.cantidad,pf.subtotal,pf.creado_por FROM facturas AS f JOIN productos_facturas AS pf ON f.id=pf.factura_id JOIN productos AS p ON p.id=pf.producto_id WHERE f.id= ?",
      [req.params.id],
      function (error, results, fields) {
        if (error) throw error;
        res.json(results); 
         }
    );
} 

 
const metodopost=(req,res)=>{
   /* res.send("POST Productos_factura")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "INSERT INTO productos_facturas (producto_id,factura_id,cantidad,subtotal,creado_por) VALUES (?,?,?,?,?)",
      [body.nombre,body.direccion,body.nit,body.creado_por],
      function (error, results, fields) {
        if (error) throw error;
        res.json({ Mensaje: "Se creo un producto en la factura" }); 
         }
    );
} 

const metododelete=(req,res)=>{
  /*  res.send("DELETE Productos_factura")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "DELETE FROM productos_facturas WHERE id= ?",
      [req.params.id],
      function (error, results, fields) {
        if (error) throw error;
        res.json({ Mensaje: "Se borro el producto de la factura"}); 
         }
    );
} 

module.exports={metodoget,metodopost,metododelete}