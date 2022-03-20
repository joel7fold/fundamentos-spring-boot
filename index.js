const sqlite = require('sqlite3').verbose()


const query = `SELECT ArtistId as aidi, Name as Artista FROM artists LIMIT 3`;
const query3 = `SELECT * FROM customers WHERE FirstName LIKE ?`
let metodosExportados = require('./metodos')
const persona = {
    name:"joel eduardo",
    edad: 30,
    city:"pachuca hidalgo",
    caracteristicas:{
        ojos:"cafes",
        altura:"1.82",
        ocupacion:"programador en EGlobal"
    }
}
const vaginas = ["con capuchita","labios anchos","abierta","cerrada","sapo","apretadita"]

const placeholders = vaginas.map((res) => '(?)').join(',')
let query4 = `INSERT INTO lepanoche VALUES ${placeholders}`


let db = new sqlite.Database('./db/chinook.db',(error) => {
    if(error){
       return console.error(error.message)       
    }
})

db.run(query4,vaginas, (error) => {
    if(error)
        throw error
    console.log("datos ingresados correctamente")
})



db.each(`SELECT DISTINCT  descripcion as name FROM lepanoche ORDER BY name`, (error,row) => {
    if(error)
        throw error
    
    console.log(`${row.rowid} ${row.name}`)
})


db.close( (error) => {
    if(error){
        console.error('ocurrio un error al cerrar la base de datos')
    }

    console.log('close the database connection')
})



