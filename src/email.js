const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();

let sendEmail = async function () {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.email,
            pass: process.env.password
        }
    });
    await transporter.sendMail({
        to: "vishal.vishalmishra.mishra2@gmail.com",
        subject: "Freelancing Client",
        text: "Hello world?",
        html: "<b>Hello world?</b>",
    });
    console.log("Email sent");
}

exports.sendEmail = sendEmail;