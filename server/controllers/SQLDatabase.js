const db = require('../models/SQLModel');

const jobController = {};

//Each table we established will need get and post requests

jobController.getUsersInformation = (req, res, next) => {
    //collect just the basic user information from Users

    //req.query or req.body
    const { username, password } = req.body;


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

    const { username, password } = req.body;

const queryString = `SELECT * FROM Users INNER JOIN Applications ON Users.user_id = Applications.user_id WHERE username='${username}' AND password='${password}'`;

const result = await db.query(queryString)
.then(response => {
    res.locals.Applications = response
    return next();
})
.catch((err)=> next({log: `jobController.getApplications: ERROR: ${err}`, message: {err: "Error occurred in jobController.getApplications"}}))

}

jobController.getInterviews = (req, res, next) => {

    const { username, password } = req.body;

const queryString = `SELECT * FROM Users INNER JOIN Interviews ON Users.user_id = Interviews.user_id WHERE username='${username}' AND password='${password}'`;

const result = db.query(queryString)
.then(response => {
    res.locals.Interviews = response
    return next();
})

.catch((err) => next({log: `jobController.getInterviews: ERROR: ${err}`,
message: {err: "Error occurred in jobController.getInterviews"}}))
}

jobController.getOffers = (req, res, next) => {

    const { username, password } = req.body;

const queryString = `SELECT * FROM Users INNER JOIN Offers ON Users.user_id = Offers.user_id WHERE username='${username}' AND password='${password}'`;

const result = db.query(queryString)
.then(response => {
    res.locals.Offers = response;
    return next();
})
.catch((err) => next({log : `jobController.getOffers: ERROR: ${err}`, message: {err: "Error occurred in jobController.getOffers"}}))

}

jobController.getAllInfo = async (req, res, next) => {

    const { username, password } = req.body;

    const queryString = `SELECT * FROM Users INNER JOIN Applications ON Users.user_id = Applications.user_id INNER JOIN Interviews ON Users.user_id=Interviews.user_id INNER JOIN Offers ON Users.user_id = Offers.user_id WHERE username='${username}' AND password='${password}'`;

    const result = await db.query(queryString)
    .then(response => {
        res.locals.Info = response;
        return next();
    })
    .catch((err)=>  next({log : `jobController.getAllInfo: ERROR: ${err}`, message: {err: "Error occurred in jobController.getAllInfo"}}))

}

jobController.postNewUser = (req, res, next) => {

    const { username, password } = req.body;

    const queryString = `INSERT INTO Users(username, password) VALUES('${req.body.username}', '${req.body.password}')`

    db.query(queryString)
.then((results) => {
    console.log('postNewUser results,', results)
    return next();
})
.catch(err => next({log : `jobController.postNewUser err ${JSON.stringify(err)}`, message : 'Error'}))

}    

jobController.postApplication = (req, res, next) => {

    const { username, password } = req.body;

    const queryString = `INSERT INTO Applications (appName, appDate, user_id) VALUES ('${req.body.appName}', '${req.body.appDate}', (SELECT user_id FROM Users WHERE username='${username}' AND password='${password}'))`;

db.query(query)
.then((results)=>{
    console.log('postApplication results', results);
    return next();
})
.catch(err => next({log : `jobController.postApplication err ${JSON.stringify(err)}`, message : 'Error'}))

}

jobController.postInterview = (req, res, next) => {

    const { username, password } = req.body;

    //goal: find a way to insert into another table based on the username and password of Users
    const queryString = `INSERT INTO Interviews (interviewName, interviewDate, user_id) VALUES ('${req.body.interviewName}', '${req.body.interviewDate}', (SELECT user_id FROM Users WHERE username='${username}' AND password='${password}'))`;

    db.query(queryString)
    .then((results)=> {
        console.log('postInterview results,', results)
        return next();
        })
    .catch(err =>  next({log : `jobController.postInterview err ${JSON.stringify(err)}`, message : 'Error'}))
    
}

jobController.postOffer = (req, res, next) => {

    const { username, password } = req.body;

    const queryString = `INSERT INTO Offers (offerName, offerDate, user_id) VALUES ('${req.body.offerName}', '${req.body.offerDate}', (SELECT user_id FROM Users WHERE username='${username}' AND password='${password}'))`;

    db.query(queryString)
    .then((results)=> {
        console.log('postOffer results,', results)
        return next();
        })
    .catch((err => next({log : `jobController.postOffer err ${JSON.stringify(err)}`, message : 'Error'})))


}

//CREATE TABLE Offers (user_id SERIAL, offerID INT, offerName VARCHAR(50), offerDate DATE, result BOOL)

module.exports = jobController;