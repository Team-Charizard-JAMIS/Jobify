import express from 'express'
import cookieParser from 'cookie-parser'
import applicationController from '../controllers/applicationsController';

const router = express.Router()
// router.use(cookieParser());

router.get('/', applicationController.getApps, (req, res) => {
  // res.status(200).json(res.locals.applications)
  res.json(200)
});

router.post('/', applicationController.create, (req, res, next) => {
  res.status(200).json(res.locals.application)
});

// api router 404 handler
router.use((req, res) => {
  console.log(`server/routes/example.js: handler not found for request ${req.method} ${req.url}`);
  res
    .status(404)
    .json({
      message: `API handler for ${req.method} ${req.url} not found`,
    });
});

export default router;
