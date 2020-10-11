const mysql = require("mysql");
const conect = require("../Config/Connect");

const metodoget=(req,res)=>{
    /*res.send("GET facturas")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "SELECT f.id,DATE_FORMAT(f.creado, '%d/%m/%Y') as creado,SUM(pf.subtotal) AS total,e.nombre AS empleado,f.estado FROM facturas AS f JOIN productos_facturas AS pf ON f.id=pf.factura_id JOIN productos AS p ON p.id=pf.producto_id JOIN empleados AS e ON e.id=f.empleado_id where f.cliente_id = ? group by f.id,f.creado,e.nombre, f.estado",
      [req.params.id],
      function (error, results, fields) {
        if (error) throw error;
        res.json(results); 
         }
    );
}

const metodoget2=(req,res)=>{
   /* res.send("GET facturas2")*/
   var body = req.body;
   var connection = mysql.createConnection(conect.Connect);
     connection.connect();
     connection.query(
     "SELECT * FROM facturas WHERE empleado_id= ?",
     [req.params.id],
     function (error, results, fields) {
       if (error) throw error;
       res.json(results); 
        }
   );
 }

const metodoget3=(req,res)=>{
    /*res.send("GET facturas3")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "SELECT * FROM facturas WHERE id= ?",
      [req.params.id],
      function (error, results, fields) {
        if (error) throw error;
        res.json(results); 
         }
    );
  }

const metodopost=(req,res)=>{
   /* res.send("POST facturas")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "INSERT INTO facturas (cliente_id,empleado_id,creado,estado) VALUES (?,?,CURDATE(),?)",
      [body.nombre,body.direccion,body.nit,body.creado_por],
      function (error, results, fields) {
        if (error) throw error;
        res.json({ Mensaje: "Se creo la factura" }); 
         }
    );
} 
const metodoput=(req,res)=>{
   /* res.send("PUT facturas")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "UPDATE facturas SET cliente_id=?,empleado_id=? WHERE id= ? ",
      [body.nombre,body.direccion,body.nit,req.params.id],
      function (error, results, fields) {
        if (error) throw error;
        res.json({ Mensaje: "Se actualizo la factura" }); 
         }
    );
} 
const metodopatch=(req,res)=>{
  /*  res.send("PATCH facturas")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "UPDATE facturas SET estado=? WHERE id= ?",
     [ body.estado,req.params.id],
      function (error, results, fields) {
        if (error) throw error;
        res.json({ Mensaje: "Se actualizo la factura" }); 
         }
    );
} 
const metododelete=(req,res)=>{
   /* res.send("DELETE facturas")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "UPDATE facturas SET estado='ANULADA' WHERE id= ?",
      [req.params.id],
      function (error, results, fields) {
        if (error) throw error;
        res.json({ Mensaje: "Se borro la factura"}); 
         }
    );
} 

module.exports={metodoget,metodoget2,metodoget3,metodopost,metodoput,metodopatch,metododelete}