import React, { useState } from "react";
import { FaFolder } from "react-icons/fa";
import { CloseOutlined } from "@ant-design/icons";
import "./StyleSheets/styles.css";
import "./StyleSheets/experience.css";
import { Modal, Timeline } from "antd";

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
          style={{
            color: "#fff2b3",
            cursor: "pointer",
            fontSize: "100px",
            filter: "drop-shadow(2px 2px 2px #242424)",
          }}
        />
        <span className="folder-text">Experience</span>
      </div>
      <Modal
        width={isMobile ? "90%" : "60%"}
        open={isModalOpen}
        closable={false}
        footer={null}
        style={{
          padding: 0,
          height: "80vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Fixed Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 20px",
            backgroundColor: "#fff",
            borderBottom: "1px solid #ddd",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>
            Experience
          </span>

          <CloseOutlined
            onClick={handleCancel}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "18px",
            }}
          />
        </div>
        <div className="work-timeline">
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