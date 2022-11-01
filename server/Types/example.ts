// import exampleController from "../controllers/exampleController"
import { Request, Response, NextFunction } from 'express';

export interface ExampleType {
    create: (req: Request, res: Response, next: NextFunction) => void;
    read: (req: Request, res: Response, next: NextFunction) => void;
    update: (req: Request, res: Response, next: NextFunction) => void;
    delete: (req: Request, res: Response, next: NextFunction) => void;


}