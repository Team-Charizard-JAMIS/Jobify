const { Pool } = require('pg');

const PG_URI = 'postgres://jycbtjhp:WgsDFWRPcgMciwbAoAdjO8lNEacKauFG@heffalump.db.elephantsql.com/jycbtjhp';

// CREATE TABLE Users(user_id SERIAL PRIMARY KEY, username VARCHAR(50), password VARCHAR(50))
// CREATE TABLE Applications(application_id SERIAL, appName VARCHAR(50) NOT NULL, appDate DATE, user_id INT FOREGIN KEY REFERENCES Users(user_id))
// CREATE TABLE Interviews(interview_id SERIAL, interviewName VARCHAR(100) NOT NULL, interviewDate DATE, user_id INT FOREIGN KEY REFERENCES Users(user_id))
// CREATE TABLE Offers(offer_id SERIAL, offerName VARCHAR(50), offerDate DATE, user_id INT FOREIGN KEY REFERENCES Users(user_id))


const pool = new Pool({
    connectionString: 'postgres://jycbtjhp:WgsDFWRPcgMciwbAoAdjO8lNEacKauFG@heffalump.db.elephantsql.com/jycbtjhp',
})

await client.connect()

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
}