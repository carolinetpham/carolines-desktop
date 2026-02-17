import React, { useState } from "react";
import { Card, Button, Modal, Carousel } from "antd";
import { FaFolder } from "react-icons/fa";
import { ArrowLeftOutlined, CloseOutlined } from "@ant-design/icons";
import ReactMarkdown from "react-markdown";
import "./StyleSheets/projects.css";

const FolderIcon = FaFolder as unknown as React.FC<
  React.SVGProps<SVGSVGElement>
>;

const ProjectsClickComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = window.innerWidth < 768;
  const [currentView, setCurrentView] = useState<"projects" | "details">(
    "projects"
  );
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [markdownContent, setMarkdownContent] = useState<string>("");

  const projects = [
    {
      id: "boston-coffee-shops",
      title: "Boston Coffee Shops",
      description:
        "Developed a web page for Boston coffee shop enthusiasts to explore shops around the area. Users are able to gain insights such as nearest shop via their current location, if the shop has ample seating, and if there is WiFi availability.",
      markdownFile: "./ProjectMarkdowns/coffee-shops.md",
      imgSrc: "./images/boston-coffee-shops-image.png",
      images: [
        "./images/boston-coffee-shops-images/initial-sketch.png",
        "./images/boston-coffee-shops-images/figma-design.png",
      ],
    },
    {
      id: "everfit-belt",
      title: "EverFit Belt Website Design",
      description:
        "Designed a mock website in Figma to showcase my paper prototype of my fictional object -- an automatic belt that uses EEG sensors to adapt to an individual's body. Incorporated three pages to allow users to learn more about the product.",
      markdownFile: "./ProjectMarkdowns/everfit-belt.md",
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
      description:
        "Designed and developed an interactive portfolio dashboard using React. Created intuitive folder-style navigation components with CSS animations and transitions, enhancing user engagement. Utilized React Router for smooth client-side navigation and integrated custom hooks for state management.",
      markdownFile: "./ProjectMarkdowns/new-portfolio.md",
      imgSrc: "./images/updated-portfolio-images/new-portfolio-main.png",
      images: ["./images/updated-portfolio-images/new-portfolio-main.png"],
    },
    {
      id: "pet-fetch",
      title: "PetFetch",
      description:
        "Designed and implemented REST APIs in Flask to support CRUD operations, and built a responsive UI using Streamlit tailored to user personas. Deployed the application using Docker containers and utilized Git for version control, ensuring a streamlined development workflow.",
      markdownFile: "./ProjectMarkdowns/petfetch.md",
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
      description:
        "Conducted needfinding and usability tests, led a Wizard of Oz study, and developed prototypes to gather user feedback and refine app design. Created a high-fidelity prototype in Figma to ensure a seamless and engaging user experience.",
      markdownFile: "./ProjectMarkdowns/aeye.md",
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
      description:
        "Independently mastered React and Bootstrap to build a visually compelling interface, showcasing skills in UI/UX design and front-end development. Integrated a contact page for email communication, enhancing user engagement.",
      markdownFile: "./ProjectMarkdowns/old-portfolio.md",
      imgSrc: "./images/old-portfolio-image.png",
      images: [
        "./images/old-portfolio-image.png",
        "./images/old-portfolio-images/figma-design.png",
      ],
    },
    {
      id: "virtual-bullet-journal",
      title: "Virtual Bullet Journal",
      description:
        "Designed a Java GUI application using Model-View-Controller patterns and engineered a data storage mechanism following SOLID principles to enhance the user experience.",
      markdownFile: "./ProjectMarkdowns/vbj.md",
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
    if (project && project.markdownFile) {
      const content = await import(`${project.markdownFile}`);
      fetch(content.default)
        .then((response) => response.text())
        .then((text) => {
          setMarkdownContent(text);
          setSelectedProject(projectId);
          setCurrentView("details");
        })
        .catch((error) => console.error("Error loading Markdown:", error));
    }
  };

  const handleBack = () => {
    setCurrentView("projects");
    setSelectedProject(null);
  };

  const { Meta } = Card;

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
        <span className="folder-text">Projects</span>
      </div>
      <Modal
        width={isMobile ? "90%" : "70%"}
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
          {currentView === "details" ? (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <ArrowLeftOutlined
                onClick={handleBack}
                style={{ cursor: "pointer", fontSize: "18px" }}
              />
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                {projects.find((p) => p.id === selectedProject)?.title}
              </span>
            </div>
          ) : (
            <h3 style={{ margin: 0 }}>Projects</h3>
          )}
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

        {/* Scrollable Content */}

        {currentView === "projects" && (
          <div className="project-cards">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="card"
                cover={
                  <img
                    alt={`${project.title}`}
                    src={project.imgSrc}
                    style={{ objectFit: "cover", height: "150px" }} // Consistent image height
                  />
                }
                actions={[
                  <Button
                    key="learn-more"
                    type="link"
                    onClick={() => handleLearnMore(project.id)}
                  >
                    Learn More
                  </Button>,
                ]}
              >
                <Meta title={project.title} description={project.description} />
              </Card>
            ))}
          </div>
        )}

        {currentView === "details" && selectedProject && (
          <div>
            {projects
              .filter((project) => project.id === selectedProject)
              .map((project) => (
                <div key={project.id}>
                  <Carousel
                    autoplay
                    autoplaySpeed={2000}
                    style={{
                      marginTop: "20px",
                      width: "80%",
                      maxWidth: "600px",
                      margin: "0 auto",
                    }}
                  >
                    {project.images.map((image, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "300px",
                          backgroundColor: "#f0f0f0",
                        }}
                      >
                        <img
                          src={image}
                          alt={`Slide ${index + 1} of ${project.title}`}
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    ))}
                  </Carousel>
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
                      }}
                    >
                      {markdownContent}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}
          </div>
        )}
      </Modal>
    </>
  );
};

export default ProjectsClickComponent;