// const express = require('express');
// import express, { NextFunction, Request, Response } from 'express';
const express = require('express');
const path = require('path');
const oAuth = require('./routes/oauth')

const cors = require('cors')

const applications = require('./routes/applications.ts');
const interviews = require('./routes/interviews');
const offers = require('./routes/offers');

// const https = require('https')
// const bodyParser = require('body-parser')

const PORT = 3000;
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));

// Log all rquests as we build
app.use((req: any, res: any, next: any) => {
  console.log(`server/app.js: received request ${req.method} ${req.url}`);
  next();
});

// Serve the client build
app.use('/', express.static(path.resolve(__dirname, '/client/public')));

// Handle API calls via application router
app.use('/api/applications', applications);

// Handle API calls via interviews router
app.use('/api/interviews', interviews);

// Handle API calls via offers router
app.use('/api/offers', offers);

// Handle initial oAuth call to register or login user 
app.use('/oauth', oAuth);

// Serve index.html
app.get('/api', (req: any, res: any) => {
  res.sendFile(path.resolve(__dirname, '../public/', 'index.html'));
});

// Default 404 handler
app.use((req: any, res: any) => {
  console.log(`server/app.js: handler not found for request ${req.method} ${req.url}`);
  res
    .status(404)
    .send(
      'Page not found'
    );
});

// Global error handler
app.use((err: any, req: any, res: any, next: any) => {
  const defaultErr = {
    message: { err: 'An error occurred' },
    log: 'Express error handler caught unknown middleware error',
    status: 400,
  };
  const errObj = Object.assign(defaultErr, err);
  console.log('ErrorObject Log: ', errObj.log);
  res.status(errObj.status).send(errObj.message);
});

// Fire it up
app.listen(PORT, () => {
  console.log(`Express Node server listening on ${PORT}`);
});



// app.get('/api', (req, res) => {
//   res.send({ express: 'UPDATED' });
// });