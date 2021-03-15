const email = require('./email');

const express = require('express');
const app = express();
const serverless = require("serverless-http");
const router = express.Router();


router.get("/", (req, res) => {
    email.sendEmail().then(()=>{
        return res.json({
            success: 'Email has been sent successfully'
        });
    })
});


app.use(`/.netlify/functions/index`, router);

module.exports = app;
module.exports.handler = serverless(app);