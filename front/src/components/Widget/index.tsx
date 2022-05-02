import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";
import "./styles.css";

export const Widget = () => {
  return (
    <Popover className="widget">
      <Popover.Panel className="widget--panel">
        <p>Hello word</p>
      </Popover.Panel>

      <Popover.Button className="widget--button">
        <ChatTeardropDots size="1.5rem" color="#fff" />

        <p>Feedback</p>
      </Popover.Button>
    </Popover>
  );
};
