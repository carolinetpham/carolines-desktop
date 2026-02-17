import React from "react";

type DialogProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
};

export const Dialog: React.FC<DialogProps> = ({ open = true, children }) => {
  return open ? <div className="dialog-root">{children}</div> : null;
};

type DialogContentProps = React.HTMLAttributes<HTMLDivElement> & {
  onInteractOutside?: (event: Event) => void;
  onEscapeKeyDown?: (event: Event) => void;
};

export const DialogContent: React.FC<DialogContentProps> = ({
  children,
  ...props
}) => {
  return (
    <div className="dialog-content" {...props}>
      {children}
    </div>
  );
};
