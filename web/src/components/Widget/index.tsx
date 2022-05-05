import { Popover } from "@headlessui/react";
import { Panel } from "components/Panel";
import { ChatTeardropDots } from "phosphor-react";
import styles from "./styles.module.css";

export const Widget = () => {
  return (
    <Popover className={styles.wrapper}>
      <Popover.Panel>
        <Panel />
      </Popover.Panel>

      <Popover.Button className={styles.widgetButton}>
        <ChatTeardropDots size="1.5rem" color="#fff" />

        <p>Feedback</p>
      </Popover.Button>
    </Popover>
  );
};
