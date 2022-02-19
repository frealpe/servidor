const express   = require('express');
//const dotenv    = require('dotenv');
const http      = require('http');
const socketio  = require('socket.io');
const path      = require('path');
const Sockets   = require('./sockets');

class Server{

    constructor(){

        this.app  = express();
        this.port = process.env.PORT;
//        this.port = 8080;        
        //Configuracion del Sockte server
        this.server = http.createServer(this.app);
        this.io = socketio(this.server,{

            /*Configuaraciones de los sockets*/ 

        });
        }

        middlewares(){
        //Desplegar el directorio Público
        this.app.use(express.static(path.resolve(__dirname,'../public')))
        } 
        
        configurarSockets(){

            new Sockets(this.io);
        }

        execute() {
            //Inicializar middlewares
            this.middlewares();
            //Inicializar sockets

            this.configurarSockets();

            this.server.listen(this.port,()=>{
                console.log('Servidor Corriendo',this.port);
            });        
        }
    }
module.exports= Server;