import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="wrap footer-row">
                <span className="left mono">© 2026 Hugo Straseele — Tous droits réservés</span>
                <div className="links">
                    <a href="https://github.com/Montsy744" target="_blank" rel="noopener">GitHub</a>
                    <a href="https://www.linkedin.com/in/hugo-straseele-187569337/" target="_blank" rel="noopener">LinkedIn</a>
                    <a href="https://www.instagram.com/straseele_hugo/" target="_blank" rel="noopener">Instagram</a>
                    <NavLink to="/Challenges">
                            Mentions légales
                    </NavLink>
                </div>
            </div>
        </footer>
    )
}

export default Footer;