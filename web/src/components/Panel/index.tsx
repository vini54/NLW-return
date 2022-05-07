import { ArrowLeft, X } from "phosphor-react";
import styles from "./styles.module.css";

import BugImage from "assets/Bug.svg";
import IdeaImage from "assets/Idea.svg";
import ThoughtImage from "assets/Thought.svg";
import { Popover } from "@headlessui/react";
import { useState } from "react";
import { WidgetForm } from "./Forms";
import { Sucess } from "./Sucess";

export const feedbackTypes = {
  Bug: {
    title: "Problema",
    image: BugImage,
  },
  Idea: {
    title: "Ideia",
    image: IdeaImage,
  },
  Thought: {
    title: "Outros",
    image: ThoughtImage,
  },
};

type feedbackType = keyof typeof feedbackTypes;

export const Panel = () => {
  const [feedBackType, setFeedBack] = useState<feedbackType | null>(null);
  const [feedBackSent, setFeedBackSent] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        {feedBackType && !feedBackSent && (
          <button onClick={() => setFeedBack(null)} className={styles.headBack}>
            <ArrowLeft size={16} weight="bold" />
          </button>
        )}

        {!feedBackSent &&
          (feedBackType ? (
            <h3>
              <img src={feedbackTypes[feedBackType].image} alt="emoji" />

              <p>{feedbackTypes[feedBackType].title}</p>
            </h3>
          ) : (
            <h3>Deixe seu feedback</h3>
          ))}

        <Popover.Button className={styles.headClose}>
          <X size={16} weight="bold" />
        </Popover.Button>
      </div>

      {!feedBackType ? (
        <div className={styles.cards}>
          {Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                className={styles.cardsCard}
                key={key}
                onClick={() => setFeedBack(key as feedbackType)}
              >
                <img src={value.image} alt="emoji" />

                <p>{value.title}</p>
              </button>
            );
          })}
        </div>
      ) : feedBackSent ? (
        <Sucess setFeedBack={setFeedBack} setFeedBackSent={setFeedBackSent} />
      ) : (
        <WidgetForm
          setFeedBackSent={setFeedBackSent}
          feedBackType={feedBackType}
        />
      )}

      <div className={styles.credits}>
        <p>
          Feito com ♥ por{" "}
          <a
            href="https://github.com/vini54"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vinicius
          </a>
        </p>
      </div>
    </div>
  );
};
