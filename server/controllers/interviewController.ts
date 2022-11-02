import Interview from '../models/interviewModel'
import { Request, Response, NextFunction } from 'express';

interface InterviewType {
  create: (req: Request, res: Response, next: NextFunction) => void;
  read: (req: Request, res: Response, next: NextFunction) => void;
}

const interviewController: InterviewType = {
  create: async (req, res, next) => {
    try {
      //fields to deconstruct from req.body
      // Interview.create(req.body)
      //insert into 
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
      const id = req.params.id
      //select * from
      //where id = id
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
