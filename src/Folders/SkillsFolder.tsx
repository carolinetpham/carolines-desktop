import React, { useState } from "react";
import { FaNodeJs } from "react-icons/fa";
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
import { Modal } from "antd";
import { getLucideIcon } from "../lib/lucide";
import { Button } from "../Components/ui/button";

// Define the SkillType enum
export enum SkillType {
  FrontEnd = "Front-End",
  BackEnd = "Back-End",
  Design = "Design",
  Organization = "Organization",
}
const CloseIcon = getLucideIcon("X");
const FolderIcon = getLucideIcon("Folder");

const SkillsClickComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<SkillType | null>(null);
  const isMobile = window.innerWidth < 768;
  const categoryColors: Record<SkillType, string> = {
    [SkillType.FrontEnd]: "var(--accent-1)",
    [SkillType.BackEnd]: "#88b9ff",
    [SkillType.Design]: "#d19bff",
    [SkillType.Organization]: "var(--accent-2)",
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const toggleCategory = (category: SkillType) => {
    setActiveCategory((prev) => (prev === category ? null : category));
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
          opacity: isActive ? 1 : 0.7,
          transform: isActive ? "scale(1.08)" : "scale(1)",
          transition: "all 0.35s ease",
        }}
      >
        <Logo
          className="logo"
          style={{
            fontSize: isMobile ? "50px" : "30px",
            color: isActive
              ? activeColor || "var(--text-100)"
              : "rgba(207, 207, 214, 0.72)",
          }}
        />
        <p style={{ color: isActive ? "var(--text-100)" : "var(--text-200)" }}>
          {item.name}
        </p>
      </div>
    );
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
        <span className="folder-text">Skills</span>
      </div>
      <Modal
        className="folder-modal skills-modal"
        width={isMobile ? "90%" : "85%"}
        open={isModalOpen}
        closable={false}
        footer={null}
        styles={{ body: { padding: 0, maxHeight: "80vh", overflowY: "auto", overflowX: "hidden" } }}
      >
        <div className="folder-panel-header">
          <div className="folder-panel-header-left">
            <span className="folder-panel-title">Technical Skills</span>
          </div>
          <button
            type="button"
            onClick={handleCancel}
            className="folder-panel-action"
            aria-label="Close Skills modal"
          >
            <CloseIcon size={18} />
          </button>
        </div>
        <div className="button-options folder-panel-content">
          <Button
            className={`skill-filter-button ${
              activeCategory === SkillType.FrontEnd ? "is-active" : ""
            }`}
            onClick={() => toggleCategory(SkillType.FrontEnd)}
          >
            Front-End
          </Button>
          <Button
            className={`skill-filter-button ${
              activeCategory === SkillType.Design ? "is-active" : ""
            }`}
            onClick={() => toggleCategory(SkillType.Design)}
          >
            Design
          </Button>
          <Button
            className={`skill-filter-button ${
              activeCategory === SkillType.BackEnd ? "is-active" : ""
            }`}
            onClick={() => toggleCategory(SkillType.BackEnd)}
          >
            Back-End
          </Button>
          <Button
            className={`skill-filter-button ${
              activeCategory === SkillType.Organization ? "is-active" : ""
            }`}
            onClick={() => toggleCategory(SkillType.Organization)}
          >
            Organization
          </Button>
        </div>
        <div id="#skills">
          <div className="skills-description folder-panel-content">
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
                      activeColor={
                        activeCategory ? categoryColors[activeCategory] : null
                      }
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