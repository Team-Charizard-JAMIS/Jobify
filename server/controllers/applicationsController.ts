import { Request, Response, NextFunction } from 'express';
import db from '../models/SQLModel';

interface ApplicationType {
  create: (req: Request, res: Response, next: NextFunction) => void;
  getApps: (req: Request, res: Response, next: NextFunction) => void;
}

const applicationController: ApplicationType = {
  create: async (req, res, next) => {
    try {
      //fields to deconstruct from req.body
      // const { appName } = req.body
      // console.log('applicationController');
      // //get id instead of 42 from cookies/session
      // //dont know if this date thing will work lol -- jimmy's work lol
      // const queryString = `INSERT INTO Applications (appName, appDate) VALUES ('${appName}', '${new Date().toISOString().slice(0, 10)}')`; //make sure result is true/false

      // const result = db.query(queryString)
      //   .then((results) => {
      //     res.locals.application = results
      //     return next();
      //   })
      console.log('hello')
      // const dbRes;

    } catch {
      return next({
        log: null,
        status: 401,
        message: 'Posting did not work'
      })
    }
  },
  getApps: async (req, res, next) => {
    try {
      // const id = res.locals.id || 1
      //select * from
      //where id = id
      console.log('middleware hit')

      // const queryString = `SELECT * FROM Applications WHERE user_id = ${id}`;
      // const queryString = `SELECT * FROM Applications`;

      // const result = await db.query(queryString)
      const result = await db.query(`SELECT * FROM Applications`)

      console.log('result', result)
      res.locals.applications = result.rows
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


export default applicationController;
