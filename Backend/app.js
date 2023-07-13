const express =require('express')
const mysql= require('mysql2')
const cors = require("cors");
require('express-async-errors')
const db= require('./Config/DB')
const employeeRoutes=require("./Controllers/employeeController")
const{ errorHandler}=require('./Middlewares/errorHandler')



const app = express()
app.use(errorHandler)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/employee',employeeRoutes)





//create employee table  
app.get('/createemployeetable',(req,res)=>{
    let sql= 'CREATE TABLE employees(id int AUTO_INCREMENT, Full_Name VARCHAR(50), Email VARCHAR(50),Age INT, Country VARCHAR(50), PRIMARY KEY (id))';
    db.query(sql,(err,result)=>{
        if(err)throw err;
        console.log(result)
        res.send('Employee table created')
    })

})

//@method post 
//post new employee

db.query("SELECT 1").then(()=>{console.log("database connected")}).catch(err=>console.log(err))

app.listen('3000',()=>{console.log("Server started on port 3000")})