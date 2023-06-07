import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive)
    }

    return <nav className="nav">
        <Link to="/" className="site-title">
            Henry
        </Link>
        <a href="javascript:;" className="toggle-button" onClick={handleToggle}>
          <GiHamburgerMenu size={25} style={{ color: "white" }} />
        </a>
        <div className={`nav-links ${isActive ? "active" : ""}`}>
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/skills">Skills</CustomLink>
                <CustomLink to="/projects">Projects</CustomLink>
            </ul>
        </div>
    </nav>
}

interface CustomLinkProps {
    to: string;
    children: React.ReactNode;
  }

function CustomLink({ to, children, ...props } : CustomLinkProps) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}