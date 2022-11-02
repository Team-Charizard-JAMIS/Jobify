import { Request, Response, NextFunction } from 'express';
import db from '../models/SQLModel';

interface InterviewType {
  create: (req: Request, res: Response, next: NextFunction) => void;
  read: (req: Request, res: Response, next: NextFunction) => void;
}

const interviewController: InterviewType = {
  create: async (req, res, next) => {
    try {
      //fields to deconstruct from req.body
      console.log('hello')
      const { appName } = req.body

      // //get id instead of 42 from cookies/session
      const queryString = `INSERT INTO Interviews ( interviewname, interviewdate, user_id ) VALUES ('${appName}', '${new Date().toISOString().slice(0, 10)}', 1)`; //make sure result is true/false

      db.query(queryString)
        .then((results: any) => {
          console.log('results', results)
          res.locals.interviews = results
          return next();
        })

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

      const queryString = `SELECT * FROM Interviews`;
      // const queryString = `SELECT * FROM Interviews WHERE user_id = ${id}`;
      const result = await db.query(queryString)
      console.log('result', result.rows)
      res.locals.interviews = result.rows
      return next()
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
