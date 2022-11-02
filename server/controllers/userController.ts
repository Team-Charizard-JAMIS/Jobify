import { Request, Response, NextFunction } from 'express';
import db from '../models/SQLModel';

interface UserType {
    create: (req: Request, res: Response, next: NextFunction) => void;
    read: (req: Request, res: Response, next: NextFunction) => void; 
}

const userController : UserType = {
    read : async (req,res,next) => {
        try{

            const { username , password} = req.body

            const queryString = `SELECT username, password FROM Users WHERE username='${username}' AND password='${password}'`;
        
            db.query(queryString)
            .then((result: any) => {
            console.log(result.rows);
            // if(result > 0)
            res.locals.userExist = result.rows;
            return next();
        })
        } catch {
            return next({
                log: null,
                status: 401,
                message: 'Sign-in did not work, no user account by that name and/or password'
              })
        }
    },
        create: async (req, res, next) => {
        try {

            const { username, password } = req.body;

            const queryString = `INSERT INTO Users (username, password) VALUES ('${username}' , '${password}')`;

        } catch {
            return next({
                log: null,
                status: 401,
                message: 'Sign-up did not work, invalid username/password'
            })
        }
    }
}

export default userController;

// const userCreation: UserType = {
//     create: async (req, res, next) => {
//         try {
            
//             const { username, password } = req.body;

//             const queryString = `INSERT INTO Users (username, password) VALUES ('${username}' , '${password}')`;

//         } catch {
//             return next({
//                 log: null,
//                 status: 401,
//                 message: 'Sign-up did not work, invalid username/password'
//             })
//         }
//     }
// }
