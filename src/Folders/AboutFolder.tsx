import React, { useState } from "react";
import "./StyleSheets/styles.css";
import "./StyleSheets/about.css";
import { Flex, Modal } from "antd";
import { getLucideIcon } from "../lib/lucide";
const FolderIcon = getLucideIcon("Folder");
const CloseIcon = getLucideIcon("X");

const AboutClickComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = window.innerWidth < 768;
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="folder-wrapper">
        <FolderIcon
          onClick={showModal}
          className="folder-icon"
          size={96}
          strokeWidth={1.5}
        />
        <span className="folder-text">About</span>
      </div>
      <Modal
        className="folder-modal"
        width={isMobile ? "90%" : "85%"}
        open={isModalOpen}
        closable={false}
        footer={null}
        styles={{ body: { padding: 0, maxHeight: "80vh", overflowY: "auto", overflowX: "hidden" } }}
      >
        <div className="folder-panel-header">
          <div className="folder-panel-header-left">
            <span className="folder-panel-title">About</span>
          </div>
          <button
            type="button"
            onClick={handleCancel}
            className="folder-panel-action"
            aria-label="Close About modal"
          >
            <CloseIcon size={18} />
          </button>
        </div>

        <Flex className="about-info folder-panel-content" justify="center" align="center">
          <img
            className="headshot"
            alt="headshot"
            src="./images/headshot.png"
          />
          <Flex vertical justify="center" className="about-text">
            <div className="about-header">
              <h2>Hi, I'm Caroline!</h2>
              <h3>
                <em>UX/Front-end Engineer</em> | 📍<em>Boston, MA</em>
              </h3>
            </div>
            <p className="about-desc">
              I’m a UX Engineer currently studying Computer Science and UI/UX
              Design at Northeastern University. My interests include UX
              Engineering, Frontend Engineering, UI/UX Design, and Human
              Computer Interaction. My goal is to blend my development and
              design skills in order to prioritize the user. Outside of Computer
              Science and Design, I find immense joy in reading, specifically
              translated fiction and classics, cats, and tea.
            </p>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};

export default AboutClickComponent;
