import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Challenges from "../../pages/Challenges";
import About from "../../pages/About";
import Skills from "../../pages/Skills";
import Portfolio from "../../pages/Portfolio";


function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Challenges" element={<Challenges />} />
            <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
    );
}

export default AppRouter;