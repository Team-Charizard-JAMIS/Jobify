import express from 'express';
import offerController from '../controllers/offerController';

const offersRouter = Router();

offersRouter.get('/', offerController.read, (req, res) => {
  res.status(200).json(res.locals.offers);
}
);

offersRouter.post('/', offerController.create, (req, res) => {
  res.status(200).json(res.locals.offer);
}
);

// api router 404 handler
Router.use((req, res) => {
  console.log(`server/routes/example.js: handler not found for request ${req.method} ${req.url}`);
  res
    .status(404)
    .json({
      message: `API handler for ${req.method} ${req.url} not found`,
    });
});

export default offersRouter;
