require("dotenv").config();

const nodemailer = require("nodemailer");

const html = `
          <h1>Hey!</h1>
          <p>Mehul this side :)</p>
          <img src="cid: "unique27.info"  width="400" />

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
    attachments: [
      {
        filename: "1.jpeg",
        path: process.env.USER_IMG1,
        cid: "unique27.info",
      },
      {
        filename: "2.jpg",
        path: process.env.USER_IMG2,
      },
    ],
  });

  console.log("Message sent: ", info.messageId);
  console.log(info.accepted);
  console.log(info.rejected);
}

main().catch((e) => console.log(e));
