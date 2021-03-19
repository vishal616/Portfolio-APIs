const email = require('./email');
const bodyParser = require('body-parser')
const express = require('express');
const cors = require('cors');
const app = express();

let port = process.env.PORT || 3000;

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());
app.use(cors());

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
