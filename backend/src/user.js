const mysql = require("mysql");
const Promise = require("bluebird");
 Promise.promisifyAll(require("mysql/lib/Connection").prototype);

 const dbinfo ={
     host : "localhost",
     user : "root",
     password : "cdac",
     database : "test",
 }

 const selectMessage = async() =>{
     const Connection = mysql.createConnection(dbinfo);
     await Connection.connectAsync();
     let sql = "select * from MESSAGE";
     let list = await Connection.queryAsync(sql);
     await Connection.endAsync();
     return list;
     
 }

 const addMessage = async(user) =>{
    const Connection = mysql.createConnection(dbinfo);
    await Connection.connectAsync();
    let sql = "insert into MESSAGE (message) values (?)";
    await Connection.queryAsync(sql,[user.message]);
    console.log("message added");
    await Connection.endAsync();
    
 }
// const user = {message : "dk2"};
// addMessage(user);
 module.exports = {selectMessage,addMessage};