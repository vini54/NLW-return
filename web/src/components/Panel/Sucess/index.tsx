import styles from "./styles.module.css";
import sucessIcon from "assets/Success.svg";

interface SucessProps {
  setFeedBack: (value: null) => void;
  setFeedBackSent: (value: boolean) => void;
}

export const Sucess = ({ setFeedBack, setFeedBackSent }: SucessProps) => {
  const handleReset = () => {
    setFeedBack(null);
    setFeedBackSent(false);
  };

  return (
    <div className={styles.wrapper}>
      <img src={sucessIcon} alt="sucess Icon" />

      <h3>Agradecemos o feedback!</h3>

      <button onClick={() => handleReset()}>Quero enviar outro</button>
    </div>
  );
};
