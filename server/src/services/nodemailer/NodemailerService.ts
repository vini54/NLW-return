import { MailService, SendMailData } from "../Mailservice";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c8cdf85009b76e",
    pass: "e4d41c88e7387b",
  },
});

export class NodemailerService implements MailService {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "vini workspace <vinioli544@gmail.com>",
      to: "Vinicius Oliveira <viniciusdev727@gmail.com>",
      subject,
      html: body,
    });
  }
}
