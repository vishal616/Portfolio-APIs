const email = require('./email');
const bodyParser = require('body-parser')
const express = require('express');
const serverless = require("serverless-http");
const router = express.Router();
const app = express();

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(bodyParser.json())


router.post("/", (req, res) => {
    email.sendEmail(req.body).then(()=>{
        return res.json({
            success: 'Email has been sent successfully'
        });
    }).catch((error) => {
        return error;
    });
});


app.use(`/.netlify/functions/index`, router);

module.exports = app;
module.exports.handler = serverless(app);