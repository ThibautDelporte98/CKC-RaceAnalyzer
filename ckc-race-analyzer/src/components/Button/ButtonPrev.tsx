import React, { forwardRef } from 'react';

interface ButtonPrevProps {
  disabled?: boolean;
  onClick?: () => void; // make it optional
}

const ButtonPrev = forwardRef<HTMLButtonElement, ButtonPrevProps>(
  ({ disabled = false, onClick }, ref) => {
    return (
      <button
        ref={ref}
        className="button-prev flex-row-align"
        onClick={onClick}
        disabled={disabled}
      >
        <span className="tag-sign-prev"></span>
      </button>
    );
  }
);

ButtonPrev.displayName = 'ButtonPrev';

export default ButtonPrev;
