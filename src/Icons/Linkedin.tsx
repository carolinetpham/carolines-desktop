import { getLucideIcon } from "../lib/lucide";
import "./icons.css";
export default function Linkedin() {
  const LinkedinIcon = getLucideIcon("Linkedin");
  return (
    <div className="linkedin-wrapper">
      <a
        className="linkedin-icon-link"
        href="https://www.linkedin.com/in/carolinetpham/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinIcon
          size={80}
          strokeWidth={1.5}
          style={{
            color: "var(--text-200)",
            cursor: "pointer",
            filter: "drop-shadow(2px 2px 2px #242424)",
          }}
        />
      </a>
      <span className="icon-text">LinkedIn</span>
    </div>
  );
}
