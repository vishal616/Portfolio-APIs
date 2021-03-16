const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
const moment = require('moment');
dotenv.config();

let sendEmail = async function (email) {
    const today = new moment();
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.fromEmail,
            pass: process.env.fromPassword
        }
    });
    let promise = await transporter.sendMail({
        to: process.env.sendToEmail,
        subject: `Freelancing Client ${today.format('DD-MMM-YYYY')}`,
        html: `<b>
                <div style="margin-bottom: 10px">First Name: ${email.firstName}</div>
                <div style="margin-bottom: 10px">Second Name: ${email.lastName}</div>
                <div style="margin-bottom: 10px">Client Email: ${email.email}</div>
                <div style="margin-bottom: 10px">Message: ${email.message}</div>
                </b>`
    });
    console.log("Email sent");
    return promise;
}

exports.sendEmail = sendEmail;