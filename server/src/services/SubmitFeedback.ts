import { FeedbackRepository } from "../repositories/feedbacks";
import { MailService } from "./Mailservice";

interface FeedbackServiceRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackService {
  constructor(
    private feedbackRepository: FeedbackRepository,
    private mailService: MailService
  ) {}

  async handle(request: FeedbackServiceRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error("type is require!");
    }

    if (!comment) {
      throw new Error("comment is require!");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshot format!");
    }

    await this.feedbackRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailService.sendMail({
      subject: "Novo Feedback",
      body: [
        `<div>`,
        `<p>Tipo de Feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot ? `<img src=${screenshot} />` : null,
        `</div>`,
      ].join("\n"),
    });
  }
}
