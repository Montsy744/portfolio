import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="wrap">
                <nav>
                    <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <span className="logo-mark" style={{margin: "10px"}}>HS</span>
                        Hugo Straseele
                    </NavLink>
                    <div className="nav-links">
                        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
                            <span className="idx">00</span> Accueil
                        </NavLink>
                        <NavLink to="/About" className={({ isActive }) => isActive ? "active" : ""}>
                            <span className="idx">01</span> À propos
                        </NavLink>
                        <NavLink to="/Skills" className={({ isActive }) => isActive ? "active" : ""}>
                            <span className="idx">02</span> Compétences
                        </NavLink>
                        <NavLink to="/Portfolio" className={({ isActive }) => isActive ? "active" : ""}>
                            <span className="idx">03</span> Portfolio
                        </NavLink>
                        <NavLink to="/Challenges" className={({ isActive }) => isActive ? "active" : ""}>
                            <span className="idx">04</span> Défis
                        </NavLink>
                    </div>
                    <a href="mailto:hugostraseele.ohmycode@gmail.com" className="nav-cta">Contact</a>
                    <button className="nav-toggle" aria-label="Menu">
                        <span></span><span></span><span></span>
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header