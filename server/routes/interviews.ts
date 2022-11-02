import express from 'express'
import cookieParser from 'cookie-parser'
import interviewController from '../controllers/interviewController';

const router = express.Router();
// router.use(cookieParser());



router.get('/', interviewController.read, (req, res) => {
  res.status(200).json(res.locals.interviews);
}
);

router.post('/', interviewController.create, (req, res, next) => {
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

module.exports = router;
