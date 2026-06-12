import { useState, useEffect } from 'react';

import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import { GridScan } from "../components/GridScan";
import { roles } from '../utils/Constant';
import { NavLink } from 'react-router-dom';

import './../assets/css/Home.css'

const Home = () => {
    const texts = [...roles]

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [texts.length]);

    return (
        <>
            <Header />
            <div className="hero-section" style={{ width: '100%', height: '85vh', position: 'relative' }}>
                <GridScan
                    sensitivity={0.55}
                    lineThickness={1}
                    linesColor="#2F293A"
                    gridScale={0.1}
                    scanColor="#48b910"
                    scanOpacity={0.4}
                    enablePost
                    bloomIntensity={0.6}
                    chromaticAberration={0.002}
                    noiseIntensity={0.01}
                    lineJitter={0.1}
                    scanGlow={0.5}
                    scanSoftness={2}
                    enableWebcam={false}
                    showPreview={false}
                >
                    <div className='hero-section-child'>
                        <h1>Hugo Straseele</h1>
                        <div className="role-line mono">
                            <p>{texts[currentIndex]}</p>
                        </div>
                        <div className="hero-ctas">
                            <NavLink to="/Portfolio" className="btn btn-primary">
                                Voir mes projets →
                            </NavLink>
                            <a href="#" className="btn btn-secondary">Télécharger le CV</a>
                        </div>
                    </div>
                </GridScan>
            </div>
            <Footer />
        </>
    )
}

export default Home;