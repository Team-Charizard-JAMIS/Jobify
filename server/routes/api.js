const Router = require('express');
const jwt = require('jsonwebtoken');
const {OAuth2Client} = require('google-auth-library');
const example = require('./example');

const client = new OAuth2Client('1079971895229-v12dtpclssbub49pombpe4nibp8h82g6.apps.googleusercontent.com');


const router = Router();

router.use((req, res, next) => {
  console.log(`server/routes/api.js: received request ${req.method} ${req.url}`);
  next();
});

router.get('/', (req, res) => {
  console.log(`server/routes/api.js.router.get('/'): received request ${req.method} ${req.url}`);
  res.status(200).json({message: 'api router online'});
});

router.post('/', (req,res) => {
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: req.body.credential,
      audience: '1079971895229-v12dtpclssbub49pombpe4nibp8h82g6.apps.googleusercontent.com',  // Specify the CLIENT_ID of the app that accesses the backend
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    console.log(userid, payload);
  }
  verify().catch(console.error);

  res.status(200).json({message: 'Oauth for google is working'});
})

router.use('/example', example);

router.use((req, res) => {
  console.log(`server/routes/api.js: handler not found for request ${req.method} ${req.url}`);
  res
    .status(404)
    .json({
      message: `API handler for ${req.method} ${req.url} not found`,
    });
});

module.exports = router;
