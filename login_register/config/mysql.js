const mysql = require("mysql")

db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tes_db',
    multipleStatements: true
})

db.connect((err)=>{
    if(err) throw err
    else{
        console.log('Connected to database')
    }
})

module.exports = db
