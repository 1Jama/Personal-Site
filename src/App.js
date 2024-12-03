import SocialMediaLinks from './SocialMediaLinks';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { useCallback } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimatedCursor from './CursorAnimated';
import Particles from 'react-particles';
import particlesPreset from './particles';
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

import Home from './Home';
import SiteNavbar from './SiteNavbar';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);
  return (
    <div className='App'>
      <Particles
        id='tsparticles'
        options={particlesPreset}
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <SiteNavbar />
      <main className='main-content'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Resume' element={<Resume />} />
          </Routes>
        </Router>
      </main>
      <div className='cursor__dot'>
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color='34, 211, 238'
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>

      <SocialMediaLinks />
    </div>
  );
}

export default App;
