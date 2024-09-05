require("dotenv").config();

const nodemailer = require("nodemailer");

const html = `
          <h1>Hey!</h1>
          <p>Mehul this side :)</p>

`;

const emails = [
  "kushanushka06@gmail.com",
  "mehulkumar086@gmail.com, ak7766@srmist.edu.in, mk3416@srmist.edu.in",
];

async function main() {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const info = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: emails,
    subject: "Nodemailer Test",
    text: "Hello",
    html: html,
  });

  console.log("Message sent: ", info.messageId);
}

main().catch((e) => console.log(e));
