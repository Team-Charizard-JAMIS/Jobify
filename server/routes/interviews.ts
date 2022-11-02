import express from 'express'
import interviewController from '../controllers/interviewController';

const interviewRouter = Router();


interviewRouter.get('/', interviewController.read, (req, res) => {
  res.status(200).json(res.locals.interviews);
}
);

interviewRouter.post('/', interviewController.create, (req, res, next) => {
  res.status(200).json(res.locals.interviews);
}
);

// api router 404 handler
router.use((req, res) => {
  console.log(`server/routes/example.js: handler not found for request ${req.method} ${req.url}`);
  res
    .status(404)
    .json({
      message: `API handler for ${req.method} ${req.url} not found`,
    });
});

export default interviewRouter;
