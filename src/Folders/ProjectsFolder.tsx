import React, { useState } from "react";
import { Modal } from "antd";
import ReactMarkdown from "react-markdown";
import "./StyleSheets/styles.css";
import "./StyleSheets/projects.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { getLucideIcon } from "../lib/lucide";
import coffeeShopsMarkdown from "./ProjectMarkdowns/coffee-shops.md?raw";
import everfitBeltMarkdown from "./ProjectMarkdowns/everfit-belt.md?raw";
import newPortfolioMarkdown from "./ProjectMarkdowns/new-portfolio.md?raw";
import petfetchMarkdown from "./ProjectMarkdowns/petfetch.md?raw";
import aeyeMarkdown from "./ProjectMarkdowns/aeye.md?raw";
import oldPortfolioMarkdown from "./ProjectMarkdowns/old-portfolio.md?raw";
import vbjMarkdown from "./ProjectMarkdowns/vbj.md?raw";

const FolderIcon = getLucideIcon("Folder");
const CloseIcon = getLucideIcon("X");
const BackIcon = getLucideIcon("ChevronLeft");

const normalizeAssetPath = (src?: string) => {
  if (!src) {
    return "";
  }
  if (/^(https?:)?\/\//.test(src) || src.startsWith("data:")) {
    return src;
  }
  if (src.startsWith("./")) {
    return src.slice(1);
  }
  if (src.startsWith("../")) {
    return `/${src.replace(/^(\.\.\/)+/, "")}`;
  }
  if (src.startsWith("images/")) {
    return `/${src}`;
  }
  return src;
};

const ProjectsClickComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = window.innerWidth < 768;
  const [currentView, setCurrentView] = useState<"projects" | "details">(
    "projects"
  );
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: "boston-coffee-shops",
      title: "Boston Coffee Shops",
      markdown: coffeeShopsMarkdown,
      description:
        "Developed a web page for Boston coffee shop enthusiasts to explore shops around the area. Users are able to gain insights such as nearest shop via their current location, if the shop has ample seating, and if there is WiFi availability.",
      imgSrc: "./images/boston-coffee-shops-image.png",
      images: [
        "./images/boston-coffee-shops-images/initial-sketch.png",
        "./images/boston-coffee-shops-images/figma-design.png",
      ],
    },
    {
      id: "everfit-belt",
      title: "EverFit Belt Website Design",
      markdown: everfitBeltMarkdown,
      description:
        "Designed a mock website in Figma to showcase my paper prototype of my fictional object -- an automatic belt that uses EEG sensors to adapt to an individual's body. Incorporated three pages to allow users to learn more about the product.",
      imgSrc: "./images/sustain-belt-image.png",
      images: [
        "./images/everfit-images/everfit-belt-storyboard.png",
        "./images/everfit-images/regular-belt.png",
        "./images/everfit-images/prototype-1.png",
        "./images/everfit-images/prototype-2.png",
        "./images/everfit-images/prototype-3.png",
        "./images/everfit-images/prototype-3-worn.png",
      ],
    },
    {
      id: "new-personal-portfolio",
      title: "Updated Personal Portfolio",
      markdown: newPortfolioMarkdown,
      description:
        "Designed and developed an interactive portfolio dashboard using React. Created intuitive folder-style navigation components with CSS animations and transitions, enhancing user engagement. Utilized React Router for smooth client-side navigation and integrated custom hooks for state management.",
      imgSrc: "./images/updated-portfolio-images/new-portfolio-main.png",
      images: ["./images/updated-portfolio-images/new-portfolio-main.png"],
    },
    {
      id: "pet-fetch",
      title: "PetFetch",
      markdown: petfetchMarkdown,
      description:
        "Designed and implemented REST APIs in Flask to support CRUD operations, and built a responsive UI using Streamlit tailored to user personas. Deployed the application using Docker containers and utilized Git for version control, ensuring a streamlined development workflow.",
      imgSrc: "./images/pet-fetch-image.png",
      images: [
        "./images/pet-fetch-images/persona-1.png",
        "./images/pet-fetch-images/persona-2.png",
        "./images/pet-fetch-images/persona-3.png",
        "./images/pet-fetch-images/ER-diagram.png",
        "./images/pet-fetch-images/relational-db.png",
        "./images/pet-fetch-images/app-page1.png",
        "./images/pet-fetch-images/app-page2.png",
        "./images/pet-fetch-images/app-page3.png",
        "./images/pet-fetch-images/app-page4.png",
      ],
    },
    {
      id: "a-eye",
      title: "AEye",
      markdown: aeyeMarkdown,
      description:
        "Conducted needfinding and usability tests, led a Wizard of Oz study, and developed prototypes to gather user feedback and refine app design. Created a high-fidelity prototype in Figma to ensure a seamless and engaging user experience.",
      imgSrc: "./images/aeye-image.png",
      images: [
        "./images/aeye-images/persona1.png",
        "./images/aeye-images/persona2.png",
        "./images/aeye-images/persona3.png",
        "./images/aeye-images/storyboard1.png",
        "./images/aeye-images/storyboard2.png",
        "./images/aeye-images/storyboard3.png",
        "./images/aeye-images/journey1.png",
        "./images/aeye-images/journey2.png",
        "./images/aeye-images/journey3.png",
        "./images/aeye-images/sketch.png",
        "./images/aeye-images/lofi.png",
        "./images/aeye-images/sticker-sheet.png",
        "./images/aeye-images/hifi1.png",
        "./images/aeye-images/hifi2.png",
      ],
    },
    {
      id: "old-personal-portfolio",
      title: "Old Personal Portfolio",
      markdown: oldPortfolioMarkdown,
      description:
        "Independently mastered React and Bootstrap to build a visually compelling interface, showcasing skills in UI/UX design and front-end development. Integrated a contact page for email communication, enhancing user engagement.",
      imgSrc: "./images/old-portfolio-image.png",
      images: [
        "./images/old-portfolio-image.png",
        "./images/old-portfolio-images/figma-design.png",
      ],
    },
    {
      id: "virtual-bullet-journal",
      title: "Virtual Bullet Journal",
      markdown: vbjMarkdown,
      description:
        "Designed a Java GUI application using Model-View-Controller patterns and engineered a data storage mechanism following SOLID principles to enhance the user experience.",
      imgSrc: "./images/virtual-bj-image.png",
      images: [
        "./images/virtual-bj-image.png",
        "./images/vbj-images/uml-diagram.png",
      ],
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setCurrentView("projects"); // Reset view when modal closes
    setSelectedProject(null); // Clear selected project
  };

  const handleLearnMore = async (projectId: string) => {
    const project = projects.find((p) => p.id === projectId);
    if (!project) {
      console.error("Project not found:", projectId);
      return;
    }

    setSelectedProject(projectId);
    setCurrentView("details");
  };

  const handleBack = () => {
    setCurrentView("projects");
    setSelectedProject(null);
  };
  const selectedProjectData = projects.find((p) => p.id === selectedProject) || null;

  return (
    <>
      <div className="folder-wrapper">
        <FolderIcon
          onClick={showModal}
          className="folder-icon"
          size={96}
          strokeWidth={1.5}
        />
        <span className="folder-text">Projects</span>
      </div>
      <Modal
        className="folder-modal"
        width={isMobile ? "90%" : "70%"}
        open={isModalOpen}
        closable={false}
        footer={null}
        styles={{ body: { padding: 0, maxHeight: "80vh", overflowY: "auto", overflowX: "hidden" } }}
      >
        <div className="folder-panel-header">
          {currentView === "details" ? (
            <div className="folder-panel-header-left">
              <button
                type="button"
                onClick={handleBack}
                className="folder-panel-action"
                aria-label="Back to projects list"
              >
                <BackIcon size={18} />
              </button>
              <span className="folder-panel-title">
                {projects.find((p) => p.id === selectedProject)?.title}
              </span>
            </div>
          ) : (
            <div className="folder-panel-header-left">
              <h3 className="folder-panel-title">Projects</h3>
            </div>
          )}
          <button
            type="button"
            onClick={handleCancel}
            className="folder-panel-action"
            aria-label="Close Projects modal"
          >
            <CloseIcon size={18} />
          </button>
        </div>

        {currentView === "projects" && (
          <div className="project-cards">
            {projects.map((project) => (
              <Card key={project.id} className="card">
                <div className="card-cover">
                  <img
                    alt={`${project.title}`}
                    src={normalizeAssetPath(project.imgSrc)}
                    className="card-cover-image"
                  />
                </div>
                <CardHeader className="card-header">
                  <CardTitle className="card-title">{project.title}</CardTitle>
                  <CardDescription className="card-description">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="card-content" />
                <CardFooter className="card-footer">
                  <Button
                    className="project-link-btn"
                    onClick={() => handleLearnMore(project.id)}
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {currentView === "details" && selectedProjectData && (
          <div className="project-details folder-panel-content">
            <div key={selectedProjectData.id}>
              <div className="project-media-grid">
                {selectedProjectData.images.map((image, index) => (
                  <div key={index} className="project-media-item">
                    <img
                      src={normalizeAssetPath(image)}
                      alt={`Image ${index + 1} of ${selectedProjectData.title}`}
                      className="project-media-image"
                    />
                  </div>
                ))}
              </div>
              <div>
                <ReactMarkdown
                  className="mds"
                  components={{
                    a: ({ node, ...props }) => (
                      <a
                        {...props}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    ),
                    img: ({ node, src, alt, ...props }) => (
                      <img
                        {...props}
                        src={normalizeAssetPath(src)}
                        alt={alt || "Project asset"}
                        loading="lazy"
                      />
                    ),
                  }}
                >
                  {selectedProjectData.markdown}
                </ReactMarkdown>
                {!selectedProjectData.markdown?.trim() && (
                  <p className="project-empty-note">
                    Project details are currently unavailable for this entry.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default ProjectsClickComponent;
