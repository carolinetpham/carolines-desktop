import { getLucideIcon } from "../lib/lucide";
import "./icons.css";
export default function Github() {
  const GithubIcon = getLucideIcon("Github");
  return (
    <div className="github-wrapper">
      <a
        className="github-icon-link"
        href="https://github.com/carolinetpham"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon
          size={80}
          strokeWidth={1.5}
          style={{
            color: "var(--text-200)",
            cursor: "pointer",
            filter: "drop-shadow(2px 2px 2px #242424)",
          }}
        />
      </a>
      <span className="icon-text">GitHub</span>
    </div>
  );
}
