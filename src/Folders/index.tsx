import { useEffect, useRef, useState } from "react";
import AboutClickComponent from "./AboutFolder";
import Github from "../Icons/Github";
import ProjectsClickComponent from "./ProjectsFolder";
import Linkedin from "../Icons/Linkedin";
import ExperienceClickComponent from "./ExperienceFolder";
import Mail from "../Icons/Mail";
import SkillsClickComponent from "./SkillsFolder";
import Resume from "../Icons/Resume";
import BottomNavBar from "../Components/BottomNavBar";
import "../index.css";
import HelpIcon from "../Icons/HelpIcon";

type FoldersPageProps = {
  onLogout?: () => void;
};


export default function FoldersPage({ onLogout }: FoldersPageProps) {

  // References to folder and icon containers
  const skillsRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const [username, setUsername] = useState<string | null>(
      localStorage.getItem("username") || null
    );
  
    // Load username from localStorage on startup
    useEffect(() => {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setUsername(storedUsername);
      }
    }, []);

  return (
    <div id="folders-container">
      <div id="row-one">
        <ProjectsClickComponent />
        <AboutClickComponent />
        <ExperienceClickComponent />
        <div ref={skillsRef}>
          <SkillsClickComponent />
        </div>
      </div>
      <div id="row-two">
        <Github />
        <Linkedin />
        <Mail />
        <div ref={resumeRef}>
          <Resume />
        </div>
        <HelpIcon username={username || ""} />
      </div>
      <BottomNavBar />
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
