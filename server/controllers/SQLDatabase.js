const db = require('../models/SQLModel');

const jobController = {};

//Each table we established will need get and post requests

jobController.getUsersInformation = (req, res, next) => {
    //collect just the basic user information from Users
const queryString = `SELECT user_id, username, password FROM USERS WHERE username=${req.body.username} AND password=${req.body.password}`;

db.query(queryString)
.then((results => {
    console.log(results);
    res.locals.userInfo = results;
    return next();
}))
.catch((err) => next({log: `jobController.getUsersInformation err: ${JSON.stringify(err)}`, message: 'Error'}))
}

jobController.getApplications = (req, res, next) => {

}

jobController.getInterview = (req, res, next) => {

}

jobController.getOffers = (req, res, next) => {

}


jobController.postNewUser = (req, res, next) => {
const queryString = `INSERT INTO Users(username, password) VALUES(${req.body.username}, ${req.body.password})`
db.query(queryString)
.then((results) => console.log(results))
.catch(err => next({log : `jobController.postNewUser err ${JSON.stringify(err)}`, message : 'Error'}))
}    

jobController.postApplication = (req, res, next) => {

}

jobController.postInterview = (req, res, next) => {

}

jobController.postOffer = (req, res, next) => {

}

module.exports = jobController;