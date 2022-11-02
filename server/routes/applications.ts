// import express from 'express'
const express = require('express');
// import cookieParser from 'cookie-parser'
// import applicationController from '../controllers/applicationsController';

const router = express.Router()
// router.use(cookieParser());

// router.get('/', applicationController.getApps, (req, res) => {
router.get('/', (req: any, res: any) => {
  console.log('applicationGet route hit!')
  // res.status(200).json(res.locals.applications)
  res.status(200).json({ express: 'hello' })
});

// router.post('/', applicationController.create, (req, res, next) => {
//   res.status(200).json(res.locals.application)
// });

// api router 404 handler
// router.use((req, res) => {
//   console.log(`server/routes/example.js: handler not found for request ${req.method} ${req.url}`);
//   res
//     .status(404)
//     .json({
//       message: `API handler for ${req.method} ${req.url} not found`,
//     });
// });

module.exports = router;
