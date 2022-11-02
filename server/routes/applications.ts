// import express from 'express'
const express = require('express');
// import cookieParser from 'cookie-parser'
import applicationController from '../controllers/applicationsController';

const router = express.Router()
// router.use(cookieParser());

router.get('/', applicationController.getApps, (req: any, res: any) => {
  res.status(200).json(res.locals.applications)
});

router.post('/', applicationController.create, (req: any, res: any, next: any) => {
  res.status(200).json(res.locals.applications)
});

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
