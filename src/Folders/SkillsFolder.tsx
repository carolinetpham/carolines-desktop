import React, { useState } from "react";
import { FaFolder, FaNodeJs } from "react-icons/fa";
import { CloseOutlined } from "@ant-design/icons";
import { IconType } from "react-icons";
import {
  FaJava,
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaReact,
  FaDocker,
  FaGit,
  FaGithub,
  FaJira,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiIntellijidea,
  SiVscodium,
  SiStreamlit,
  SiFlask,
  SiMysql,
  SiFigma,
  SiEclipseide,
  SiJunit5,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiTypescript,
  SiAntdesign,
  SiExpress,
} from "react-icons/si";

import "./StyleSheets/styles.css";
import "./StyleSheets/skills.css";
import { Button, Modal } from "antd";

// Define the SkillType enum
export enum SkillType {
  FrontEnd = "Front-End",
  BackEnd = "Back-End",
  Design = "Design",
  Organization = "Organization",
}

const SkillsClickComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<SkillType | null>(null);
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const isMobile = window.innerWidth < 768;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const toggleCategory = (category: SkillType, color: string) => {
    setActiveCategory((prev) => (prev === category ? null : category));
    setActiveColor((prev) => (prev === color ? null : color));
  };

  const skills = [
    {
      category: "Languages",
      items: [
        { logo: FaJsSquare, name: "JavaScript", type: [SkillType.FrontEnd] },
        { logo: SiTypescript, name: "TypeScript", type: [SkillType.FrontEnd] },
        { logo: FaHtml5, name: "HTML", type: [SkillType.FrontEnd] },
        { logo: FaCss3Alt, name: "CSS", type: [SkillType.FrontEnd] },
        { logo: FaJava, name: "Java", type: [SkillType.BackEnd] },
        { logo: FaDatabase, name: "SQL", type: [SkillType.BackEnd] },
        {
          logo: FaPython,
          name: "Python",
          type: [SkillType.BackEnd, SkillType.FrontEnd],
        },
      ],
    },
    {
      category: "Tools",
      items: [
        { logo: FaNodeJs, name: "NodeJS", type: [SkillType.BackEnd] },
        { logo: SiFigma, name: "Figma", type: [SkillType.Design] },
        { logo: FaJira, name: "Jira", type: [SkillType.Organization] },
        { logo: FaDocker, name: "Docker", type: [SkillType.Organization] },
        { logo: SiJunit5, name: "JUnit", type: [SkillType.BackEnd] },
        { logo: FaGit, name: "Git", type: [SkillType.Organization] },
        { logo: FaGithub, name: "GitHub", type: [SkillType.Organization] },
        {
          logo: SiVscodium,
          name: "VS Code",
          type: [SkillType.Organization],
        },
        { logo: SiEclipseide, name: "Eclipse", type: [SkillType.Organization] },
        {
          logo: SiIntellijidea,
          name: "IntelliJ",
          type: [SkillType.Organization],
        },
        { logo: SiAdobephotoshop, name: "Photoshop", type: [SkillType.Design] },
        {
          logo: SiAdobeillustrator,
          name: "Illustrator",
          type: [SkillType.Design],
        },
      ],
    },
    {
      category: "Libraries and Frameworks",
      items: [
        { logo: FaReact, name: "React", type: [SkillType.FrontEnd] },
        { logo: SiAntdesign, name: "Ant Design", type: [SkillType.FrontEnd] },
        { logo: FaBootstrap, name: "Bootstrap", type: [SkillType.FrontEnd] },
        { logo: SiMysql, name: "MySQL", type: [SkillType.BackEnd] },
        { logo: SiExpress, name: "Express.js", type: [SkillType.BackEnd] },
        { logo: SiStreamlit, name: "Streamlit", type: [SkillType.FrontEnd] },
        { logo: SiFlask, name: "Flask", type: [SkillType.BackEnd] },
        { logo: SiJunit5, name: "JUnit", type: [SkillType.BackEnd] },
      ],
    },
  ];

  interface SkillItemProps {
    item: {
      name: string;
      logo: IconType;
      type: SkillType[];
    };
    isActive: boolean;
    activeColor: string | null;
  }

  const SkillItem: React.FC<SkillItemProps> = ({
    item,
    isActive,
    activeColor,
  }) => {
    const Logo = item.logo as unknown as React.FC<
      React.SVGProps<SVGSVGElement>
    >;
    return (
      <div
        className="logo-container"
        style={{
          opacity: isActive ? 1.5 : 0.5,
          transform: isActive ? "scale(1.2)" : "scale(1)",
          transition: "all 0.8s ease",
        }}
      >
        <Logo
          className="logo"
          style={{
            fontSize: isMobile ? "50px" : "30px",
            color: isActive && activeColor ? activeColor : "#363636",
          }}
        />
        <p>{item.name}</p>
      </div>
    );
  };

  const FolderIcon = FaFolder as unknown as React.FC<
    React.SVGProps<SVGSVGElement>
  >;

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
        <span className="folder-text">Skills</span>
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
            Technical Skills
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
        <div className="button-options">
          <Button
            color="blue"
            variant="solid"
            onClick={() => toggleCategory(SkillType.FrontEnd, "#1677ff")}
          >
            Front-End
          </Button>
          <Button
            color="purple"
            variant="solid"
            onClick={() => toggleCategory(SkillType.Design, "#9254de")}
          >
            Design
          </Button>
          <Button
            color="pink"
            variant="solid"
            onClick={() => toggleCategory(SkillType.BackEnd, "#f759ab")}
          >
            Back-End
          </Button>
          <Button
            color="green"
            variant="solid"
            onClick={() => toggleCategory(SkillType.Organization, "#73d13d")}
          >
            Organization
          </Button>
        </div>
        <div id="#skills">
          <div className="skills-description">
            {skills.map((skill, index) => (
              <div key={index}>
                <h1>{skill.category}:</h1>
                <div className="category">
                  {skill.items.map((item, index) => (
                    <SkillItem
                      key={index}
                      item={item}
                      isActive={
                        !activeCategory || item.type.includes(activeCategory)
                      }
                      activeColor={activeColor}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SkillsClickComponent;