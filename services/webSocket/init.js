const Websocket =  require("ws");

function init(server){
    const wss = new Websocket.Server({ server });
    wss.on("connection",(socket)=>{
        console.log("connected");
        socket.on("close",()=>{
            console.log("disconnected");
        });
        socket.on("message", (message)=>{
            console.log(message);
        });
        socket.send("hello");
    });
    console.log('webSocket service ready');
}
module.exports = init;