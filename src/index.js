const email = require('./email');
const bodyParser = require('body-parser')
const express = require('express');
const app = express();
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


app.listen(4500, () => {
    console.log(`app listening at http://localhost:4500`)
})
