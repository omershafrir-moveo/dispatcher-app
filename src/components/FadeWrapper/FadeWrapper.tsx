import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Wrapper } from "./FadeWrapper.styles";
import { useEffect } from "react";

const FadeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setIsVisible(false);
  }, []);

  return (
    <div>
      <CSSTransition
        in={isVisible}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <Wrapper visible={isVisible}>{children}</Wrapper>
      </CSSTransition>
    </div>
  );
};

export default FadeWrapper;
