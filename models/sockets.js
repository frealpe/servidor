
class Sockets{

    constructor(io){
        this.io=io;
        this.socketEvents();
       //clientes = {}


    }

    socketEvents(){
        //On coneccion
        this.io.on('connection', (socket)=>{
           //Escuhar el evento
           socket.on('mss', (data)=>{
            console.log(data);
            this.io.emit('msf',data);
           });

        });

    }

}

module.exports = Sockets;