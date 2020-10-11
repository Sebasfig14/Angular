const mysql = require("mysql");
const conect = require("../Config/Connect");

const metodoget=(req,res)=>{
    /*res.send("GET clientes")*/
         var body = req.body;
        var connection = mysql.createConnection(conect.Connect);
          connection.connect();
          connection.query(
          "SELECT * FROM clientes",
          
          function (error, results, fields) {
            if (error) throw error;
            res.json(results); 
             }
        );
    }
    

const metodoget2=(req,res)=>{
   /* res.send("GET clientes2")*/
    
        var body = req.body;
        var connection = mysql.createConnection(conect.Connect);
          connection.connect();
          connection.query(
          "SELECT * FROM clientes WHERE id= ?",
          [req.params.id],
          function (error, results, fields) {
            if (error) throw error;
            res.json(results); 
             }
        );
      }
    

const metodopost=(req,res)=>{
    /*res.send("POST clientes")*/
    
         var body = req.body;
         var connection = mysql.createConnection(conect.Connect);
           connection.connect();
           connection.query(
           "INSERT INTO clientes (nombre,direccion,nit,creado_por) VALUES (?,?,?,?)",
           [body.nombre,body.direccion,body.nit,body.creado_por],
           function (error, results, fields) {
             if (error) throw error;
             res.json({ Mensaje: "Se creo un cliente" }); 
              }
         );
     }

const metodoput=(req,res)=>{
    /*res.send("PUT clientes")*/
    
         var body = req.body;
         var connection = mysql.createConnection(conect.Connect);
           connection.connect();
           connection.query(
           "UPDATE clientes SET nombre=?,direccion=?,nit=? WHERE id= ?",
           [body.nombre,body.direccion,body.nit,req.params.id],
           function (error, results, fields) {
             if (error) throw error;
             res.json({ Mensaje: "Se actualizo el cliente" }); 
              }
         );
     }
     

const metododelete=(req,res)=>{
    /*res.send("DELETE clientes")*/
    
        var body = req.body;
        var connection = mysql.createConnection(conect.Connect);
          connection.connect();
          connection.query(
          "DELETE FROM clientes WHERE id= ?",
          [req.params.id],
          function (error, results, fields) {
            if (error) throw error;
            res.json({ Mensaje: "Se borro el cliente"}); 
             }
        );
    }
    


module.exports={metodoget,metodoget2,metodopost,metodoput,metododelete}