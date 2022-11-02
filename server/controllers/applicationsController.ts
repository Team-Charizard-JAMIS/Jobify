import Application from '../models/applicationModel'
import { Request, Response, NextFunction } from 'express';

interface ApplicationType {
  create: (req: Request, res: Response, next: NextFunction) => void;
  getApps: (req: Request, res: Response, next: NextFunction) => void;
}

const applicationController: ApplicationType = {
  create: async (req, res, next) => {
    try {
      const name = req.name;
      const date = `${Date.now()}`;
      //fields to deconstruct from req.body
      const dbRes = await Application.create(req.body)
      res.locals.apps = dbRes;
      return next();
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
      const id = res.locals.id;
      //just a get request for all applications in applications table that is for the user
      const dbRes = await Application.select(req.body)
      res.locals.apps = dbRes;
      return next();
    } catch {
      return next({
        log: null,
        status: 401,
        message: 'Read did not work'
      })
    }
  }
};


module.exports = applicationController;
