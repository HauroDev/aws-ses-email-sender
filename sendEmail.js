const aws = require("@aws-sdk/client-ses");
const nodemailer = require("nodemailer");

require("dotenv").config();

const SES_CONFIG = {
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
};

const AWS_SES = new aws.SES(SES_CONFIG);

function createTransporter(fromEmail) {
  return nodemailer.createTransport(
    {
      SES: { ses: AWS_SES, aws },
    },
    {
      from: fromEmail,
    }
  );
}

function sendMail(fromEmail, recipientEmail, subject, body) {
  const transporter = createTransporter(fromEmail);

  const mailOptions = {
    to: recipientEmail,
    subject: subject,
    text: body,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = {
  sendMail,
};
