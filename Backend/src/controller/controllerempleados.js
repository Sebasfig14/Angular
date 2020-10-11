
const mysql = require("mysql");
const conect = require("../Config/Connect");

const metodoget=(req,res)=>{
   /* res.send("GET empleados")*/
        var body = req.body;
        var connection = mysql.createConnection(conect.Connect);
          connection.connect();
          connection.query(
          "SELECT * FROM empleados",
          
          function (error, results, fields) {
            if (error) throw error;
            res.json(results); 
             }
        );
    }
 
const metodoget2=(req,res)=>{
   /* res.send("GET empleados2")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "SELECT * FROM empleados WHERE id= ?",
      [req.params.id],
      function (error, results, fields) {
        if (error) throw error;
        res.json(results); 
         }
    );
  }
 
const metodopost=(req,res)=>{
    /*res.send("POST empleados")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "INSERT INTO empleados (nombre,codigo,salario,creado_por) VALUES (?,?,?,?)",
      [body.nombre,body.direccion,body.nit,body.creado_por],
      function (error, results, fields) {
        if (error) throw error;
        res.json({ Mensaje: "Se creo un empleado" }); 
         }
    );
}

 
const metodoput=(req,res)=>{
   /* res.send("PUT empleados")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "UPDATE empleados SET nombre=?,direccion=?,nit=? WHERE id= ?",
      [body.nombre,body.direccion,body.nit,req.params.id],
      function (error, results, fields) {
        if (error) throw error;
        res.json({ Mensaje: "Se actualizo el empleado" }); 
         }
    );
}

 
const metododelete=(req,res)=>{
    /*res.send("DELETE empleados")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "DELETE FROM empleados WHERE id= ?",
      [req.params.id],
      function (error, results, fields) {
        if (error) throw error;
        res.json({ Mensaje: "Se borro el empleado"}); 
         }
    );
}


module.exports={metodoget,metodoget2,metodopost,metodoput,metododelete}