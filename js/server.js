const net = require('net');

const {
  index,
  _404,
  helium,
  hydrogen,
  styles
} = require('./pages');

const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', (chunk) => {
    socket.write(responseHandler(chunk));
    socket.end();
    socket.on('end', () => {
      console.log('Client disconnected');
    })
  })
});

server.listen(8080, 'localhost', () => {
  console.log('server bound');
});

let responseHandler = (info) => {
  let dataArr = info.toString().split('\r\n');

  let firstLine = dataArr[0].split(" ");
  let reqMethod = firstLine[0];
  let reqURI = firstLine[1];

  let insertDate = new Date().toUTCString();
  let reqHttp = 'HTTP/1.1';
  let okStatus = '200 OK';
  let badStatus = '404 Not Found';
  let serverName = 'Justin Server';

  let headerLine1Good = reqHttp + ' ' + okStatus;
  let headerLine1Bad = reqHttp + ' ' + badStatus;
  let headerLine2 = 'Date: ' + insertDate;
  let headerLine3 = 'Server: ' + serverName;

  let goodResponseHeader = `${headerLine1Good}\n${headerLine2}\n${headerLine3}\n\n`;
  let badResponseHeader = `${headerLine1Bad}\n${headerLine2}\n${headerLine3}\n\n`;

  switch (reqURI) {
    case '/':
      return goodResponseHeader + index;
      break;
    case '/index.html':
      return goodResponseHeader + index
      break;
    case '/hydrogen.html':
      return goodResponseHeader + hydrogen
      break;
    case '/helium.html':
      return goodResponseHeader + helium;
      break;
    case '/css/styles.css':
      return goodResponseHeader + styles;
      break;
    default:
      return badResponseHeader + _404;
  }
}
// switch (reqURI) {
//   case '/':
//     socket.write(goodResponseHeader + index);
//     socket.end();
//     break;
//   case 'index':
//     socket.write(goodResponseHeader + index);
//     socket.end();
//     break;
//   case 'hydrogen':
//     socket.write(goodResponseHeader + hydrogen)
//     socket.end();
//     break;
//   case 'helium':
//     socket.write(goodResponseHeader + helium);
//     socket.end();
//     break;
//   case 'styles':
//     socket.write(goodResponseHeader + styles);
//     socket.end();
//     break;
//   default:
//     socket.write(badResponseHeader + _404);
//     socket.end();
//     break;
// }