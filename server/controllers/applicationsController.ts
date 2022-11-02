import { Request, Response, NextFunction } from 'express';
import db from '../models/SQLModel';

interface ApplicationType {
  create: (req: Request, res: Response, next: NextFunction) => void;
  getApps: (req: Request, res: Response, next: NextFunction) => void;
}

const applicationController: ApplicationType = {
  create: async (req, res, next) => {
    try {
      const { appName } = req.body
      console.log(appName, 'appName checking application controller')
      const queryString = `INSERT INTO Applications (appname, appdate) VALUES ('${appName}', '${new Date().toISOString().slice(0, 10)}')`;

      const result = db.query(queryString)
        .then((results: any) => {
          res.locals.applications = results
          return next();
        })
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
