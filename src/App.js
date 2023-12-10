import SocialMediaLinks from './SocialMediaLinks';
import './App.css';
import { useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimatedCursor from './CursorAnimated';
import Particles from 'react-particles';
import particlesPreset from './particles';
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import Home from './Home';
import Nav from './Nav';

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
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
    </div>
  );
}

export default App;
