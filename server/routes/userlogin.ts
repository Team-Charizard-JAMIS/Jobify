import express from 'express'
// const express = require('express');

import cookieParser from 'cookie-parser'
import userController from '../controllers/userController';

const router = express.Router();

router.get('/', userController.read, (req, res) => {
    res.status(200).json(res.locals.offers);
})

router.post('/', userController.create, (req, res) => {
    res.status(200).json(res.locals.offers);
})

//api router 404 handler
router.use((req, res) => {
    console.log(`server/routes/example.js: handler not found for request ${req.method} ${req.url}`);
    res
      .status(404)
      .json({
        message: `API handler for ${req.method} ${req.url} not found`,
      });
  });
  

module.exports = router;