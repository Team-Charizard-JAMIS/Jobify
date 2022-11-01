const jwt = require ('jsonwebtoken');
const { createErr } = require('../utils/utils');
const {OAuth2Client} = require('google-auth-library');
const path = require('path');
const fs = require('fs');

const client = new OAuth2Client('1079971895229-v12dtpclssbub49pombpe4nibp8h82g6.apps.googleusercontent.com');
const secret = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../secrets.json'))).JWT_ACCESS_SECRET;
const loginController = {};


loginController.googleOauth = async (req, res, next) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: req.body.credential,
      audience: '1079971895229-v12dtpclssbub49pombpe4nibp8h82g6.apps.googleusercontent.com',  // Specify the CLIENT_ID of the app that accesses the backend
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    res.locals.userid = userid;
    res.locals.payload = payload;
    // if user exists, pull that user data from db, display it next page
    // else, register this user with email and name
        // db.create (username = email, no password)
    next();
  } catch (error) {
    next(error);
  }
};

loginController.createToken = async (req, res, next) => {
  try {
    const token = await jwt.sign(res.locals.payload, secret);
    res.locals.token = token;
    res.cookie('JWTtoken', token);
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

loginController.verifyToken = async (req, res, next) => {
  try {
    const decoded = await jwt.verify(req.cookies.JWTtoken, secret);
    console.log('cookie', req.cookies.JWTtoken);
    console.log('decoded test', decoded);
    res.locals.decoded = decoded;
    next();
  } catch (err) {
    return next(
      createErr({
        method: 'verify token',
        type: 'JWT token verification error',
        err,
      }),
    );
  }
};

module.exports = loginController;
