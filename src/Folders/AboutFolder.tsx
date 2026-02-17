import React, { useState } from "react";
import { FaFolder } from "react-icons/fa";
import { CloseOutlined } from "@ant-design/icons";
import "./StyleSheets/styles.css";
import "./StyleSheets/about.css";
import { Flex, Modal } from "antd";
const FolderIcon = FaFolder as unknown as React.FC<
  React.SVGProps<SVGSVGElement>
>;

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
          style={{
            color: "#fff2b3",
            cursor: "pointer",
            fontSize: "100px",
            filter: "drop-shadow(2px 2px 2px #242424)",
          }}
        />
        <span className="folder-text">About</span>
      </div>
      <Modal
        width={isMobile ? "90%" : "85%"}
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
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>About</span>

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

        <Flex
          className="about-info"
          justify="center"
          align="center"
          style={{ marginTop: "10px" }}
        >
          <img
            className="headshot"
            alt="headshot"
            src="./images/headshot.png"
            style={{
              display: "block",
              width: 300,
              borderRadius: "50%",
              boxShadow: "none",
              filter: "none",
            }}
          />
          <Flex vertical justify="center" style={{ padding: 32 }}>
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