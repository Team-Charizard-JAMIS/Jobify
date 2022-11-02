import express from 'express'
const interviewController = require('../controllers/interviewController');

const interviewRouter = Router();

const router = express.Router();

interviewRouter.get('/', (req, res) => {
  res.status(200).json(res.locals.interviews);
}
);

interviewRouter.post('/', (req, res, next) => {
  res.status(200).json(res.locals.interview);
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
