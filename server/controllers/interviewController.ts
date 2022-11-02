import { Request, Response, NextFunction } from 'express';
// import db from '../models/SQLModel';

interface InterviewType {
  create: (req: Request, res: Response, next: NextFunction) => void;
  read: (req: Request, res: Response, next: NextFunction) => void;
}

const interviewController: InterviewType = {
  create: async (req, res, next) => {
    try {
      //fields to deconstruct from req.body
      console.log('hello')
      // const { interviewName, interviewDate } = req.body

      // //get id instead of 42 from cookies/session
      // const queryString = `INSERT INTO Offers ( interviewName, interviewDate ) VALUES ('${interviewName}', '${new Date().toISOString().slice(0, 10)}')`; //make sure result is true/false

      // db.query(queryString)
      //   .then((results) => {
      //     res.locals.interviews = results
      //     return next();
      //   })
      // const dbRes;

    } catch {
      return next({
        log: null,
        status: 401,
        message: 'Posting did not work'
      })
    }
  },
  read: async (req, res, next) => {
    try {
      // const id = res.locals.id || 1
      //select * from
      //where id = id

      // const queryString = `SELECT * FROM Interviews WHERE user_id = ${id}`;
      // db.query(queryString)
      //   .then((results) => {
      //     res.locals.interviews = results
      //     return next();
      //   })
      console.log('helloread')
    } catch {
      return next({
        log: null,
        status: 401,
        message: 'Read did not work'
      })
    }
  }
};


export default interviewController;
