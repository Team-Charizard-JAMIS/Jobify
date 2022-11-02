const { Pool } = require('pg');

const PG_URI = 'postgres://jycbtjhp:WgsDFWRPcgMciwbAoAdjO8lNEacKauFG@heffalump.db.elephantsql.com/jycbtjhp';

// CREATE TABLE Users(user_id SERIAL PRIMARY KEY, username VARCHAR(50), password VARCHAR(50))
//CREATE TABLE Applications(application_id SERIAL, appName VARCHAR(50), appDate DATE, user_id INT)
// CREATE TABLE Interviews(interview_id SERIAL, interviewName VARCHAR(50), interviewDate DATE, user_id INT, FOREIGN KEY(user_id) REFERENCES Users(user_id))
// CREATE TABLE Offers (offer_id SERIAL, offerName VARCHAR(50), offerDate DATE, user_id INT, FOREIGN KEY (user_id) REFERENCES Users(user_id))

const pool = new Pool({
    connectionString: PG_URI
})

// await client.connect()

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
}