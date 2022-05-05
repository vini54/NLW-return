import { useState } from "react";
import { CameraBtn } from "./CameraBtn";
import styles from "./styles.module.css";

interface FormProps {
  setFeedBackSent: (value: boolean) => void;
}

export const WidgetForm = ({ setFeedBackSent }: FormProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [coment, setComent] = useState("");

  return (
    <form className={styles.wrapper} onSubmit={(e) => e.preventDefault()}>
      <textarea
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        rows={6}
        onChange={(e) => setComent(e.target.value)}
      />

      <div className={styles.actions}>
        <CameraBtn screenshot={screenshot} setScreenshot={setScreenshot} />

        <button
          onClick={() => setFeedBackSent(true)}
          disabled={coment.length === 0}
          className={styles.actionsSubmit}
        >
          Enviar feedback
        </button>
      </div>
    </form>
  );
};
