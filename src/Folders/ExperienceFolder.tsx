import React, { useState } from "react";
import "./StyleSheets/styles.css";
import "./StyleSheets/experience.css";
import { Modal, Timeline } from "antd";
import { getLucideIcon } from "../lib/lucide";

const FolderIcon = getLucideIcon("Folder");
const CloseIcon = getLucideIcon("X");

const FolderIcon = FaFolder as unknown as React.FC<
  React.SVGProps<SVGSVGElement>
>;

const ExperienceClickComponent: React.FC = () => {
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
        <span className="folder-text">Experience</span>
      </div>
      <Modal
        className="folder-modal"
        width={isMobile ? "90%" : "60%"}
        open={isModalOpen}
        closable={false}
        footer={null}
        styles={{ body: { padding: 0, maxHeight: "80vh", overflowY: "auto", overflowX: "hidden" } }}
      >
        <div className="folder-panel-header">
          <div className="folder-panel-header-left">
            <span className="folder-panel-title">Experience</span>
          </div>
          <button
            type="button"
            onClick={handleCancel}
            className="folder-panel-action"
            aria-label="Close Experience modal"
          >
            <CloseIcon size={18} />
          </button>
        </div>
        <div className="work-timeline folder-panel-content">
          <Timeline
            className="timeline-items"
            pending={
              <>
                <span>Currently...</span> <br />
                <strong>Looking for full-time roles </strong>
                <br />
                <em>
                  UX Engineer, Front-end Engineer, UI Developer, Web Developer,
                  Software Engineer
                </em>{" "}
                <br />
                <span>
                  <b>Availability:</b> May 2026
                </span>
                <ul></ul>
              </>
            }
            items={[
              {
                children: (
                  <>
                    <strong>Software Quality Analyst Co-op</strong> <br />
                    <em>Verisk, Extreme Event Solutions</em> <br />
                    <span>Jan - Jun 2024</span>
                  </>
                ),
              },
              {
                children: (
                  <>
                    <strong>
                      Human Computer Interaction Teaching Assistant
                    </strong>{" "}
                    <br />
                    <em>Khoury College of Computer Sciences</em> <br />
                    <span>Sep - Dec 2024</span>
                  </>
                ),
              },
              {
                children: (
                  <>
                    <strong>Software Engineer Co-op</strong> <br />
                    <em>Optum (UHG)</em> <br />
                    <span>Jan - Jun 2025</span>
                  </>
                ),
              },
              {
                children: (
                  <>
                    <strong>Software Development Intern</strong> <br />
                    <em>Advanced Data Risk Management (ADRM)</em> <br />
                    <span>Jun - Aug 2025</span>
                  </>
                ),
              },
              {
                children: (
                  <>
                    <strong>Introduction to Databases Head Teaching Assistant</strong> <br />
                    <em>Khoury College of Computer Sciences</em> <br />
                    <span>Jun - Present</span>
                  </>
                ),
              },
            ]}
          />
        </div>
      </Modal>
    </>
  );
};
export default ExperienceClickComponent;