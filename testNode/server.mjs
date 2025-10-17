// server.mjs
///// MJS is the extension for Module JS (Node can tell it's a module, not Common JS)
///// tells Node to interpret the file as an ES Module, which supports import/export (new syntax)
///// Note the named import in braces {} because we're importing a specific function (node:http has many fns)
import { createServer } from 'node:http';

///// instantiate a new server: takes a callback - send request and response as args
///// the function returns an object of type server with methods like .writeHead() and .end()
// const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World!\n');
// });

///// MIDDLEWARE is stuff that happens between request and response.
const server = createServer((req, res) => {
  // Simple router by hand:
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("Here's some text.\n") // write some text to the stream
    res.end('Hello from \nNode core HTTP'); // send the final piece and close
    // res.end() // or just close
  } else if (req.url === '/time') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ now: new Date().toISOString() }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

// starts a simple http server locally on port 3000
///// '127.0.0.1' is 'localhost'; 3000 is the port
server.listen(3000, '127.0.0.1', () => {
  ///// look to the NODE environment (server) to see the log; not the BROWSER (client)
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`

