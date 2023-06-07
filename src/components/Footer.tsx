import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

export default function Footer() {
    return (
      <div className="footer">
        <a href="https://www.linkedin.com/in/henry-pham-07/">
          <FaLinkedin size={25} className="footer-icon" />
        </a>
        <a href="https://github.com/hpham20">
        <FaGithub size={25} className="footer-icon" />
        </a>
      </div>
    )
}