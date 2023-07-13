const mysql= require ('mysql2/promise')

const mysqlpool=mysql.createPool({
    host: 'localhost',
    user:'shant',
    password:'password666',
    database:'Ete_task'
})


module.exports =mysqlpool