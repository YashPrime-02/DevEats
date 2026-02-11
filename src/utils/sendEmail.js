const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_APP_PASSWORD,
  },
});

async function sendOtpEmail(to, otp) {
  const mailOptions = {
    from: `DevEats Support <${process.env.SMTP_EMAIL}>`,
    to,
    subject: "DevEats OTP - Reset Password",
    html: `
      <div style="font-family: Arial; padding: 12px;">
        <h2>DevEats Password Reset</h2>
        <p>Your OTP is:</p>
        <h1 style="letter-spacing: 4px;">${otp}</h1>
        <p>This OTP is valid for <b>10 minutes</b>.</p>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = { sendOtpEmail };
