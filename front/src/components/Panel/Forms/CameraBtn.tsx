import html2canvas from "html2canvas";
import { Camera, Spinner, Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./styles.module.css";

interface CameraProps {
  screenshot: string | null;
  setScreenshot: (screenshot: string | null) => void;
}

export const CameraBtn = ({ screenshot, setScreenshot }: CameraProps) => {
  const [isLoading, setLoading] = useState(false);

  const handleScreenshot = async () => {
    setLoading(true);

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64Img = canvas.toDataURL("image/png");

    setScreenshot(base64Img);
    setLoading(false);
  };

  if (screenshot) {
    return (
      <button
        className={styles.actionsTrash}
        style={{
          backgroundImage: `url(${screenshot})`,
        }}
        onClick={() => setScreenshot(null)}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button onClick={() => handleScreenshot()} className={styles.actionsCamera}>
      {isLoading ? (
        <Spinner size={20} color="#f6f6f6" className="animate-spin" />
      ) : (
        <Camera size={20} color="#f6f6f6" />
      )}
    </button>
  );
};
