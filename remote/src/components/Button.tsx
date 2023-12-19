import { Button } from 'antd';
import React, { useState } from "react";

type ButtonProps = {
  text?: string;
};

const ButtonF: React.FC<ButtonProps> = ({ text }) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    const event = new CustomEvent("DONKEY_KONG", {
      detail: { count: counter + 1 },
    });
    window.dispatchEvent(event);
    setCounter(counter + 1);
  };

  return (
    <Button onClick={handleClick}>
      {text || 'test'} - Counter: {counter}
    </Button>
  );
};

export default ButtonF;
