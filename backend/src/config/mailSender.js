const nodemailer = require('nodemailer');

const mailSender = async (email, title, body) => {
  try {
    //create transporter
    const transporter = await nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });
    // info
    let info = await transporter.mailSender({
      from: `studynotion`,
      to: `${email}`,
      subject: '`${title}',
      html: `${body}`,
    });

    console.log(info);
    return info;
  } catch (error) {
    console.log(error);
  }
};

module.exports = mailSender;
