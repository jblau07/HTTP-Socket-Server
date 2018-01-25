const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');
  socket.on('end', () => {
    console.log('Client disconnected');
  })

  socket.on('data', (chunk) => {
    let dataArr = parseData(chunk)
    let firstLine = dataArr[0].split(" ");
    //console.log(firstLine);
    let reqMethod = firstLine[0];
    console.log(reqMethod);
    let reqAddress = firstLine[1];
    console.log(reqAddress);
    let reqHttp = firstLine[2];
    console.log(reqHttp);

    if (reqMethod === 'GET'){
      switch (reqAddress) {
        
      }
    }
    //let header = 


    // let reqMethod = dataArr[0];
    // let reqAddress = dataArr[1];
   // let reqHTTP = dataArr[2].split('\');
    //console.log(dataArr);
   
  })
});

//process.stdin.pipe(server);

server.listen(8080, 'localhost',() => {
  console.log('server bound');
});

let parseData = (data) => {
  return data.toString().split('\r\n');
 };