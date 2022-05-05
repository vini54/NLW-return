import { FeedbackCreateData, FeedbackRepository } from "../feedbacks";
import { prisma } from "../../prisma";

export class PrismaFeedbacksRepository implements FeedbackRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
