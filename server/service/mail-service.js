const { createTransport } = require('nodemailer')

class MailService {
  constructor() {
    this.transporter = createTransport({
      host: process.env.SMPT_HOST,
      port: process.env.SMPT_PORT,
      secure: true,
      auth: {
        user: process.env.SMPT_USER,
        pass: process.env.SMPT_PASSWORD,
      },
    })
  }

  async sendActiationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMPT_USER,
      to,
      subject: 'Aктивація акаунта на ' + process.env.SERVER_URL,
      text: '',
      html: `
              <div> 
              <h1>Активація акаунта</h1>
              <a href='${link}'>${link} </a>
              </div>
           `,
    })
  }
}

module.exports = new MailService()
