import express from "express";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prismaFeedbacks";
import { NodemailerService } from "./services/nodemailer/NodemailerService";
import { SubmitFeedbackService } from "./services/SubmitFeedback";

export const Router = express.Router();

Router.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbackRepository = new PrismaFeedbacksRepository();

  const nodemailerService = new NodemailerService();

  const submitFeedbackService = new SubmitFeedbackService(
    prismaFeedbackRepository,
    nodemailerService
  );

  await submitFeedbackService.handle({ type, comment, screenshot });

  return res.status(201).send("Dados enviados!");
});
