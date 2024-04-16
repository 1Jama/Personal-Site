import SocialMediaLinks from './SocialMediaLinks';

import './App.css';
import { useCallback } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimatedCursor from './CursorAnimated';
import Particles from 'react-particles';
import particlesPreset from './particles';
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { NextUIProvider } from '@nextui-org/react';
import Home from './Home';
import Nav from './Nav';
import About from './About';

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
      <NextUIProvider>
        <main className='dark text-foreground '>
          <Nav />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </BrowserRouter>
          <div className='cursor__dot'>
            <AnimatedCursor
              innerSize={15}
              outerSize={15}
              color='137, 207, 240'
              outerAlpha={0.4}
              innerScale={0.7}
              outerScale={5}
            />
          </div>
          <SocialMediaLinks />
          <Particles
            id='tsparticles'
            options={particlesPreset}
            init={particlesInit}
            loaded={particlesLoaded}
          />
        </main>
      </NextUIProvider>
    </div>
  );
}

export default App;
