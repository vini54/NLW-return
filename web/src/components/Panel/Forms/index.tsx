import { Spinner } from "phosphor-react";
import { FormEvent, useState } from "react";
import { api } from "services/api";
import { feedbackTypes } from "..";
import { CameraBtn } from "./CameraBtn";
import styles from "./styles.module.css";

type FeedBackType = keyof typeof feedbackTypes;

interface FormProps {
  feedBackType: FeedBackType;
  setFeedBackSent: (value: boolean) => void;
}

export const WidgetForm = ({ setFeedBackSent, feedBackType }: FormProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const handleSubmitFeedback = async () => {
    setIsSendingFeedback(true);

    await api.post("/feedbacks", {
      type: feedBackType,
      comment,
      screenshot,
    });

    setIsSendingFeedback(false);
    setFeedBackSent(true);
  };

  return (
    <form className={styles.wrapper} onSubmit={(e) => e.preventDefault()}>
      <textarea
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        rows={6}
        onChange={(e) => setComment(e.target.value)}
      />

      <div className={styles.actions}>
        <CameraBtn screenshot={screenshot} setScreenshot={setScreenshot} />

        <button
          onClick={handleSubmitFeedback}
          disabled={comment.length === 0 || isSendingFeedback === true}
          className={styles.actionsSubmit}
        >
          {isSendingFeedback ? (
            <Spinner size={20} color="#f6f6f6" className="animate-spin" />
          ) : (
            "Enviar feedback"
          )}
        </button>
      </div>
    </form>
  );
};
