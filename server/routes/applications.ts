import express from 'express'
const applicationController = require('../controllers/applicationsController');

const router = express.Router();
const appRouter = Router();

appRouter.get('/', applicationController.getApps, (req, res) => {
  res.status(200).json(res.locals.apps)
});

appRouter.post('/', applicationController.create, (req, res, next) => {
  res.status(200).json(res.locals.app)
});

appRouter.delete('/', applicationController.delete, (req, res, next) => {
  res.status(200).json(res.locals.app);
}
);

// api router 404 handler
appRouter.use((req, res) => {
  console.log(`server/routes/example.js: handler not found for request ${req.method} ${req.url}`);
  res
    .status(404)
    .json({
      message: `API handler for ${req.method} ${req.url} not found`,
    });
});

module.exports = appRouter;
