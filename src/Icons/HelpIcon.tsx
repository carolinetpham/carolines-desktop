import { useState } from "react";
import { Dialog, DialogContent } from "../Components/ui/dialog";
import { Button } from "../Components/ui/button";
import { getLucideIcon } from "../lib/lucide";
import "./icons.css";

interface FoldersProps {
  username: string;
}

const HelpIcon = ({ username }: FoldersProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const HelpIconGraphic = getLucideIcon("HelpCircle");

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <HelpIconGraphic
        className="help-icon"
        strokeWidth={1.5}
        onClick={showModal}
        style={{ color: "var(--text-200)" }}
      />
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent
          onInteractOutside={(event) => event.preventDefault()}
          onEscapeKeyDown={(event) => event.preventDefault()}
        >
          <div className="tutorial-popup">
            <h2>Hi, {username}!</h2>
            <p>Click on the folders or the icons to explore more about me :)</p>
            <div className="tutorial-buttons">
              <Button className="ok-button" onClick={handleCancel}>
                Got it!
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HelpIcon;
