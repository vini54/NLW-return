import { SubmitFeedbackService } from "./SubmitFeedback";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackService(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.handle({
        type: "BUG",
        comment: "random coment",
        screenshot: "data:image/png;base64,fjkafjldj",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit a feedback without a type", async () => {
    await expect(
      submitFeedback.handle({
        type: "",
        comment: "random coment",
        screenshot: "data:image/png;base64,fjkafjldj",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback without a comment", async () => {
    await expect(
      submitFeedback.handle({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,fjkafjldj",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback with an invalid screenshot", async () => {
    await expect(
      submitFeedback.handle({
        type: "BUG",
        comment: "random comment",
        screenshot: "image/png",
      })
    ).rejects.toThrow();
  });
});
