import app from "./app.js"; //importa desde app sus funciones
import database from "./database.js"; //importamos desde database sus funciones
//import "./databes"//ejecuta las funciones de database sin nececidad de llamarlas por consola
import {PORT} from"./config"

app.listen(PORT);//*escucha lo que pase en el puesto 3000
console.log("Server om port", PORT);//* imprime en consola lo que pasa enel puerto 3000
//console.log(database); //muestra en consola que el servidor esta conectado
