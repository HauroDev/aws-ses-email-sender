const { sendMail } = require("./sendEmail");
require("dotenv").config();

sendMail(process.env.EMAIL_1, process.env.EMAIL_2, "Hola", "Hola señor")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

sendMail(process.env.EMAIL_2, process.env.EMAIL_1, "Hola", "Hola señor")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
