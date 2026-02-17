import { getLucideIcon } from "../lib/lucide";
import "./icons.css";
export default function Resume() {
  const ResumeIcon = getLucideIcon("FileText");
  return (
    <div className="resume-wrapper">
      <a
        className="resume-icon-link"
        href="https://drive.google.com/file/d/1_QMTxTG494m9UuXVi6FLHTFzYU-mR6RJ/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ResumeIcon
          size={80}
          strokeWidth={1.5}
          style={{
            color: "var(--text-200)",
            cursor: "pointer",
            filter: "drop-shadow(2px 2px 2px #242424)",
          }}
        />
      </a>
      <span className="icon-text">Resume</span>
    </div>
  );
}
