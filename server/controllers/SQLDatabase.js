const db = require('../models/SQLModel');

const jobController = {};

//Each table we established will need get and post requests

jobController.getUsersInformation = (req, res, next) => {
    //collect just the basic user information from Users

    const { username, password } = req.query;


const queryString = `SELECT user_id, username, password FROM USERS WHERE username=${username} AND password=${password}`;

db.query(queryString)
.then((results => {
    console.log(results);
    res.locals.userInfo = results.rows;
    return next();
}))
.catch((err) => next({log: `jobController.getUsersInformation err: ${JSON.stringify(err)}`, message: 'Error'}))
}

jobController.getApplications = async (req, res, next) => {

    const { username, password } = req.query;

const queryString = `SELECT * FROM Users INNER JOIN Applications ON Users.user_id = Applications.user_id WHERE username='${username}' AND password='${password}'`;
}

jobController.getInterviews = (req, res, next) => {

    const { username, password } = req.query;

const queryString = `SELECT * FROM Users INNER JOIN Interviews ON Users.user_id = Interviews.user_id WHERE username='${username}' AND password='${password}'`;

const result= await db.query(queryString)
.then(response => res.locals.Interviews = response)
.catch((err) => next({log: `jobController.getInterviews: ERROR: ${err}`,
message: {err: "Error occurred in jobController.getInterviews"}}))
}

jobController.getOffers = (req, res, next) => {

    const { username, password } = req.query;

const queryString = `SELECT * FROM Users INNER JOIN Offers ON Users.user_id = Offers.user_id WHERE username='${username}' AND password='${password}'`;
}

jobController.getAllInfo = async (req, res, next) => {

    const { username, password } = req.query;

    const queryString = `SELECT * FROM Users INNER JOIN Applications ON Users.user_id = Applications.user_id INNER JOIN Interviews ON Users.user_id=Interviews.user_id INNER JOIN Offers ON Users.user_id = Offers.user_id WHERE username='${username}' AND password='${password}'`;

    const result = await db.query(queryString);


}

jobController.postNewUser = (req, res, next) => {
const queryString = `INSERT INTO Users(username, password) VALUES(${req.body.username}, ${req.body.password})`
db.query(queryString)
.then((results) => console.log(results))
.catch(err => next({log : `jobController.postNewUser err ${JSON.stringify(err)}`, message : 'Error'}))
}    

jobController.postApplication = (req, res, next) => {
const queryString = `INSERT INTO  Applications (appName, appDate, user_id) VALUES (${req.body.appName}, ${req.body.appDate}, ${req.body.user_id})`;

db.query(query)
.then((results)=>)

}

jobController.postInterview = (req, res, next) => {
const queryString = `INSERT INTO Interviews (interviewName, interviewDate, user_id) VALUES (${req.body.interviewName}, ${req.body.interviewDate}, ${req.body.user_id})`;
}

jobController.postOffer = (req, res, next) => {
const queryString = `INSERT INTO Offers (offerName, offerDate, user_id) VALUES (${req.body.offerName}, ${req.body.offerDate}, ${req.body.user_id})`;
}

module.exports = jobController;