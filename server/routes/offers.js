const Router = require('express');
const exampleController = require('../controllers/applicationsController');

const offersRouter = Router();

offersRouter.get('/', (req, res) => {
    res.status(200).json(res.locals.offers);
  }
);

offersRouter.post('/', (req, res) => {
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

module.exports = router;
