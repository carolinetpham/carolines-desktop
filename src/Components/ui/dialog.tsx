import React from "react";

type DialogProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
};

export const Dialog: React.FC<DialogProps> = ({
  open = true,
  onOpenChange,
  children,
}) => {
  if (!open) {
    return null;
  }

  return (
    <div className="dialog-root" role="dialog" aria-modal="true">
      <div
        className="dialog-overlay"
        onClick={() => onOpenChange?.(false)}
        aria-hidden="true"
      />
      {children}
    </div>
  );
};

type DialogContentProps = React.HTMLAttributes<HTMLDivElement> & {
  onInteractOutside?: (event: Event) => void;
  onEscapeKeyDown?: (event: Event) => void;
};

export const DialogContent: React.FC<DialogContentProps> = ({
  children,
  onClick,
  ...props
}) => {
  return (
    <div
      className="dialog-content"
      onClick={(event) => {
        event.stopPropagation();
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </div>
  );
};
