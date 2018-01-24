# HTTP Socket Server

## Basic http server accepting socket connections via net.Server

### Resources

[HTTP Slides](http://slides.com/theremix/http)

[NodeJS Streams](http://slides.com/theremix/nodejs-streams)

[Events and Emitters](http://slides.com/theremix/events-and-emitters)

[NodeJS net module](https://nodejs.org/api/net.html)

[HTTP 1.1 Header Spec](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)

### Goals

The main server file is `server.js`. Additional **javascript** files may also be created.

1. Create a socket server to accept TCP connections
1. The server will listen on port **8080**
1. Transmit 'standard' HTTP Headers to the client
1. Transmit a hardcoded, in-memory html body for each route
1. Terminate the connection
1. If the path is not found in your routes, return a **404** status code and output some `text/html` content

_note, all data must be stored in memory, that is, in javascript only. external modules may be used through revealing module pattern._

**HTTP Headers**

1. The correct status code should be sent
1. Date : The current timestamp should be sent in RFC1123 format
1. Server : The name of your custom http server

### Testing

run your server with _nodemon_

`nodemon server.js`

Test with curl, postman, and Google Chrome

#### HTTP Headers

To view response headers, with your server running: