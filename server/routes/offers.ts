import express from 'express';
import cookieParser from 'cookie-parser'
import offerController from '../controllers/offerController';

const router = express.Router();
// router.use(cookieParser());

router.get('/', offerController.read, (req, res) => {
  res.status(200).json(res.locals.offers);
}
);

router.post('/', offerController.create, (req, res) => {
  res.status(200).json(res.locals.offer);
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

export default router;
