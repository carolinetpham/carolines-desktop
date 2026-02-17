import { message } from "antd";
import { getLucideIcon } from "../lib/lucide";
import "./icons.css";
export default function Mail() {
  const emailAddress = "carolinetpham@outlook.com";
  const MailIcon = getLucideIcon("Mail");
  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(emailAddress);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = emailAddress;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      message.success(`${emailAddress} copied to your clipboard!`);
    } catch (error) {
      message.error("Could not copy email. Please copy manually.");
    }
  };

  return (
    <div className="mail-container">
      <button
        type="button"
        className="mail-button"
        onClick={handleCopy}
        aria-label="Copy email address"
      >
        <MailIcon
          size={80}
          strokeWidth={1.5}
          style={{
            color: "var(--text-200)",
            cursor: "pointer",
            filter: "drop-shadow(2px 2px 2px #242424)",
          }}
        />
      </button>
      <span className="icon-text">Email</span>
    </div>
  );
}
