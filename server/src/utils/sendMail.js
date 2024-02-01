// const nodemailer = require('nodemailer');

// module.exports = async (to, name, subject, html, text) => {
//   const { AUTH_EMAIL, AUTH_PASSWORD, EMAIL_SERVICE } = process.env;

//   let transporter = nodemailer.createTransport({
//     service: EMAIL_SERVICE,
//     auth: {
//       user: AUTH_EMAIL,
//       pass: AUTH_PASSWORD,
//     },
//   });

//   const mailOptions = {
//     from: '"no-reply" <noreply@esetech.io>',
//     to: to,
//     subject: subject || 'Registration Success',
//     html:
//       html ||
//       `<body><h2>Hello ${{
//         name,
//       }}! </h2><p>We're glad to have you on board at EseTech Todo App. </p></body>`,
//   };

//   transporter.sendMail(mailOptions, (error) => {
//     if (error) {
//       res.status(400).send({ message: 'Error sending email', data: error });
//     } else {
//       res.status(200).json({ message: 'Email Sent!' });
//     }
//   });
// };
