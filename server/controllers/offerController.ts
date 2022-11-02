import { Request, Response, NextFunction } from 'express';
// import jobController, { getOffers } from './SQLDatabase';
import db from '../models/SQLModel';

interface OfferType {
  create: (req: Request, res: Response, next: NextFunction) => void;
  read: (req: Request, res: Response, next: NextFunction) => void;
}

// CREATE TABLE Offers(user_id INT, offerID SERIAL, offerName VARCHAR(50), offerDate DATE, result BOOLEAN)

const offerController: OfferType = {
  create: async (req: any, res: any, next: any) => {
    try {
      //fields to deconstruct from req.body
      const { interviewName } = req.body


      //get id instead of 42 from cookies/session
      const queryString = `INSERT INTO Offers (user_id, offername, offerdate, result) VALUES (42, '${interviewName}', '${new Date().toISOString().slice(0, 10)}', ${true})`; //make sure result is true/false

      db.query(queryString)
        .then((results: any) => {
          res.locals.offers = results
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
  read: async (req: any, res: any, next: any) => {
    try {
      // const id = res.locals.id || 1
      //select * from
      //where id = id

      const queryString = `SELECT * FROM Offers`;
      // const queryString = `SELECT * FROM Interviews WHERE user_id = ${id}`;
      const result = await db.query(queryString)
      console.log('result', result.rows)
      res.locals.offers = result.rows
      return next()
    } catch {
      return next({
        log: null,
        status: 401,
        message: 'Read did not work'
      })
    }
    //   try {
    //     const id = res.locals.id || 1
    //     //select * from
    //     //where id = id

    //     const queryString = `SELECT * FROM OFFERS WHERE user_id = ${id}`;

    //   } catch {
    //     return next({
    //       log: null,
    //       status: 401,
    //       message: 'Read did not work'
    //     })
    //   }
  }
};


export default offerController;
