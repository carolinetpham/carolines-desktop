import React from "react";
import ReactDOM from "react-dom";

type DialogProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
};

export const Dialog: React.FC<DialogProps> = ({ open = true, children }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div className="dialog-overlay">{children}</div>,
    document.body
  );
};

type DialogContentProps = React.HTMLAttributes<HTMLDivElement> & {
  onInteractOutside?: (event: Event) => void;
  onEscapeKeyDown?: (event: Event) => void;
};

export const DialogContent: React.FC<DialogContentProps> = ({
  children,
  onInteractOutside,
  onEscapeKeyDown,
  ...props
}) => {
  return (
    <div
      className="dialog-content"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onInteractOutside?.(event.nativeEvent);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          onEscapeKeyDown?.(event.nativeEvent);
        }
      }}
      tabIndex={-1}
      {...props}
    >
      {children}
    </div>
  );
};
