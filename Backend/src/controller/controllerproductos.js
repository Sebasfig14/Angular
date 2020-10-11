const mysql = require("mysql");
const conect = require("../Config/Connect");

const metodoget=(req,res)=>{
   /* res.send("GET productos")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "SELECT pf.id,p.nombre,pf.cantidad,pf.subtotal,pf.creado_por FROM facturas AS f JOIN productos_facturas AS pf ON f.id=pf.factura_id JOIN productos AS p ON p.id=pf.producto_id WHERE f.id= ?",
      
      function (error, results, fields) {
        if (error) throw error;
        res.json(results); 
         }
    );
} 
const metodoget2=(req,res)=>{
   /* res.send("GET productos2")*/
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
  /*  res.send("POST productos")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "INSERT INTO productos (nombre,precio,creado_por) VALUES (?,?,?)",
      [body.nombre,body.precio,body.creado_por],
      function (error, results, fields) {
        if (error) throw error;
        res.json({ Mensaje: "Se creo un producto" }); 
         }
    );
} 
const metodoput=(req,res)=>{
   /* res.send("PUT productos")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "UPDATE productos SET nombre=?,precio=?,creado_por=? WHERE id= ?",
      [body.nombre,body.precio,body.creado_por,req.params.id],
      function (error, results, fields) {
        if (error) throw error;
        res.json({ Mensaje: "Se actualizo el producto" }); 
         }
    );
} 
const metododelete=(req,res)=>{
   /* res.send("DELETE productos")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "DELETE FROM productos WHERE id= ?",
      [req.params.id],
      function (error, results, fields) {
        if (error) throw error;
        res.json({ Mensaje: "Se borro el producto"}); 
         }
    );
} 

module.exports={metodoget,metodoget2,metodopost,metodoput,metododelete}