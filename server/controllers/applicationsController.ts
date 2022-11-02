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
      const { appName } = req.body

      //get id instead of 42 from cookies/session
      //dont know if this date thing will work lol -- jimmy's work lol
      const queryString = `INSERT INTO Applications (appName, appDate) VALUES ('${appName}', '${new Date().toISOString().slice(0, 10)}')`; //make sure result is true/false

      db.query(queryString)
        .then((results) => {
          res.locals.application = results
          return next();
        })
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
      const id = res.locals.id || 1
      //select * from
      //where id = id

      const queryString = `SELECT * FROM Applications WHERE user_id = ${id}`;
      db.query(queryString)
        .then((results) => {
          res.locals.application = results
          return next();
        })
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
