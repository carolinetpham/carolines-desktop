import React, { useState } from "react";
import "./StyleSheets/styles.css";
import "./StyleSheets/experience.css";
import { Modal, Timeline } from "antd";
import { getLucideIcon } from "../lib/lucide";

const FolderIcon = getLucideIcon("Folder");
const CloseIcon = getLucideIcon("X");
const ExpandClosedIcon = getLucideIcon("ChevronRight");
const ExpandOpenIcon = getLucideIcon("ChevronDown");

const ExperienceClickComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({});
  const isMobile = window.innerWidth < 768;

  const roles = [
    {
      id: "qa-coop-verisk",
      title: "Software Quality Analyst Co-op",
      org: "Verisk, Extreme Event Solutions",
      location: "Boston, MA",
      dates: "Jan 2024 - Jun 2024",
      bullets: [
        "Performed test analyses to validate software against compliance standards, preventing defects and improving reliability.",
        "Troubleshot and resolved software issues with Microsoft SQL Server Management Studio, improving system performance.",
      ],
    },
    {
      id: "swe-coop-optum",
      title: "Software Engineer Co-op",
      org: "Optum, Technology Development Program",
      location: "Boston, MA",
      dates: "Jan 2025 - Jun 2025",
      bullets: [
        "Parsed SQL data and rendered API responses dynamically in UI components to ensure real-time system status updates.",
        "Developed automated email reports with Java and HTML summarizing test failures, reducing manual QA work by approximately 80%.",
        "Configured GitHub Actions pipelines to run SonarQube and Prisma Cloud scans, enabling automated quality checks.",
      ],
    },
    {
      id: "swe-intern-adrm",
      title: "Software Developer Intern",
      org: "Advanced Data Risk Management (ADRM)",
      location: "Boston, MA",
      dates: "Jun 2025 - Aug 2025",
      bullets: [
        "Prototyped ADRM's website using Next.js and implemented a Prisma schema with SQLite, improving load times by approximately 25%.",
        "Contributed to development of DEFENDER, ADRM's SaaS platform, to optimize real-time security alerts.",
        "Designed and developed DEFENDER University, an educational portal to help users navigate ADRM's platform.",
      ],
    },
    {
      id: "ux-engineer-guardconnect",
      title: "UX Engineer (Software Consultant)",
      org: "MA National Guard, Northeastern University Practicum",
      location: "Boston, MA",
      dates: "Sep 2025 - Dec 2025",
      bullets: [
        "Empowered 4,000+ Guard members with a communications and mentorship platform, improving transparency and career navigation.",
        "Shipped production-ready Next.js views and shadcn/Tailwind components, driving responsive UI across the application.",
        "Authored UX workflows, interaction specs, and design tokens to streamline handoff and establish a consistent design language.",
        "Led evaluative research (WCAG audits and heuristic reviews) to identify usability gaps and validate visual hierarchy.",
      ],
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setExpandedRoles({});
  };

  const toggleRole = (roleId: string) => {
    setExpandedRoles((prev) => ({
      ...prev,
      [roleId]: !prev[roleId],
    }));
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
        styles={{
          body: {
            padding: 0,
            maxHeight: "80vh",
            overflowY: "auto",
            overflowX: "hidden",
            scrollbarGutter: "stable",
          },
        }}
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
                  UX Engineer, Front-end Engineer, UI Developer, Product Designer, UI/UX Designer,
                  Software Engineer
                </em>{" "}
                <br />
                <span>
                  <b>Availability:</b> Jun 2026
                </span>
                <ul></ul>
              </>
            }
            items={[
              ...roles.map((role) => ({
                children: (
                  <div className="timeline-item">
                    <strong>{role.title}</strong>
                    <em>
                      {role.org} - {role.location}
                    </em>
                    <span>{role.dates}</span>
                    <button
                      type="button"
                      className="timeline-toggle"
                      onClick={() => toggleRole(role.id)}
                      aria-expanded={expandedRoles[role.id] ? "true" : "false"}
                      aria-label={`${
                        expandedRoles[role.id] ? "Hide" : "Show"
                      } details for ${role.title}`}
                    >
                      {expandedRoles[role.id] ? (
                        <ExpandOpenIcon size={15} />
                      ) : (
                        <ExpandClosedIcon size={15} />
                      )}
                      {expandedRoles[role.id] ? "Hide details" : "Show details"}
                    </button>
                    {expandedRoles[role.id] && (
                      <ul className="timeline-bullets">
                        {role.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ),
              })),
            ]}
          />
        </div>
      </Modal>
    </>
  );
};
export default ExperienceClickComponent;
