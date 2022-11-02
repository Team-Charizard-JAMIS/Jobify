const Router = require('express');
const jwt = require('jsonwebtoken');
const {OAuth2Client} = require('google-auth-library');
const loginController = require('../controllers/loginController');


const router = Router();

router.use((req, res, next) => {
  console.log(`server/routes/oauth.ts: received request ${req.method} ${req.url}`);
  next();
});

router.get('/', loginController.verifyToken, (req, res) => {
  console.log(`server/routes/oauth.ts.router.get('/'): received request ${req.method} ${req.url}`);
  res.status(200).json({message: 'oauth online and verification passed'});
});

router.post('/', loginController.googleOauth, loginController.createToken, loginController.verifyToken, (req, res) => {
  // here do a check if user exists or not. if exists and token is valid, create JWT token to check each page
    // if user does not exist, create that user in DB and then create jwt token?

  res.status(200).json({ message: 'Oauth for google is working' });
});

// router.use('/example', example);

router.use((req, res) => {
  console.log(`server/routes/oauth.ts: handler not found for request ${req.method} ${req.url}`);
  res
    .status(404)
    .json({
      message: `API handler for ${req.method} ${req.url} not found`,
    });
});

module.exports = router;
