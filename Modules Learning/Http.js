const http = require('http');

const server = http.createServer((req,res) => {// constructing the request response of the http server
  if (req.url === '/') {
    res.write('Hello Sir/Maam');// res is "Hello Sir/Maam". You can run this code and after that go to your browser and open localhost:3000 and you will get this response
    res.end();
  }
  if (req.url === '/api'){
    res.write(JSON.stringify([1,2,3,4,5,6]));
    res.end;
  }
});// here sever is eventEmitter so it has all functionalities of eventEmitter

server.listen(3000);

console.log('Listening on port 3000...');// this server which is a http server will be listening on the port 3000