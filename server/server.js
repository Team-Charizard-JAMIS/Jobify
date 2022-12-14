const express = require('express');
const path = require('path');
const api = require('./routes/api');
const oAuth = require('./routes/oauth')


const applications = require('./routes/applications');
const interviews = require('./routes/interviews');
const offers = require('./routes/offers');

const PORT = process.env.EXPRESS_PORT || 3000;
const app = express();

const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log all rquests as we build
app.use((req, res, next) => {
  console.log(`server/app.js: received request ${req.method} ${req.url}`);
  next();
});

// Serve the client build
app.use('/build', express.static(path.resolve(__dirname, '../build')));

// Handle API calls via application router
app.use('/applications', applications);

// Handle API calls via interviews router
app.use('/interviews', interviews);

// Handle API calls via offers router
app.use('/offers', offers);

// Handle initial oAuth call to register or login user 
app.use('/oauth', oAuth);

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/', 'index.html'));
});

// Default 404 handler
app.use((req, res) => {
  console.log(`server/app.js: handler not found for request ${req.method} ${req.url}`);
  res
    .status(404)
    .send(
      'Page not found'
    );
});

// Global error handler
app.use((err, req, res, next) => {
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
