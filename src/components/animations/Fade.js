import React from "react";
import { useState } from "react";

import { Transition } from "react-transition-group";

const duration = 500;

const defaultStyle = {
  transition: `fadeIn ${duration}ms ease-in both`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export const Fade = () => {
  const [inProp, setInProp] = useState(false);

  return (
    <div>
      <Transition in={inProp} timeout={duration}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            I'm a fade Transition!
          </div>
        )}
      </Transition>
      <button onClick={() => setInProp((prevInProp) => !prevInProp)}>
        Click to Enter
      </button>
    </div>
  );
};
