const email = require('./email');
const bodyParser = require('body-parser')
const express = require('express');
const app = express();

let port = process.env.port || 4500;

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(bodyParser.json())

app.post("/sendEmail", (req, res) => {
    email.sendEmail(req.body).then(()=>{
        return res.json({
            success: 'Email has been sent successfully'
        });
    }).catch((error) => {
        return res.json({
            error: error
        });
    });
});


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})
