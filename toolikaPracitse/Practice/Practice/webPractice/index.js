const http = require('http') ;
const WebSocketServer = require('websocket').server
 const httpserver = http.createServer((req, res)=> {

console.log('http req', req)
})
const websocket = new WebSocketServer({
    'httpServer' : httpserver
})
websocket.on('request', (request)=> {
const connection = request.accept(null, request.origin)
connection.on('open', (p)=> console.log('open'))
connection.on('message', (m)=> console.log(m))
connection.send('Hello');
})

 httpserver.listen(8080, ()=> console.log('My server is listening'))