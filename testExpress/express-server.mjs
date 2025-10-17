///// Here is that Common JS way of doing things express-server.js
//const express = require('express')
///// Here is the new Module JS way of doing it express-server.mjs
import express from 'express';

///// make an express app object
const app = express()
///// assign the port number to a variable
const port = 3079

///// all that's needed: route and response to send
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


// ----- Routes -----
app.get('/', (req, res) => {
  res.send(`Hello from Express and Dan on port ${port}`);
});

app.get('/time', (req, res) => {
  res.json({ now: new Date().toISOString() });
});

app.post('/echo', (req, res) => {
  // Try with: fetch('/echo',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({msg:'hi'})})
  res.status(201).json({ youSent: req.body });
});

// Catch-all 404
app.use((req, res) => {
  res.status(404).send('Route not found');
});


///// listen on port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})