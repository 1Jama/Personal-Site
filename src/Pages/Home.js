import React from 'react';
import avatar from '../Images/av.jpg';

import avatarHover from '../Images/avHover.jpg';
import MovingComponent from 'react-moving-text';
import RotatingWords from '../Components/RotatingWords';

import '../Styles/Home.css';
import '../Styles/RotatingWords.css';

function Home() {
  return (
    <div className='homeBox'>
      <MovingComponent
        type='popIn'
        duration='1000ms'
        delay='0s'
        direction='normal'
        timing='ease'
        iteration='1'
        fillMode='none'
      >
        <div className='Avatar'>
          <img src={avatar} alt='' />
          <img src={avatarHover} class='image-hover' alt='hover' />
        </div>
        <div className='firstName'>
          <h1>
            <span className='homeName'>JAMA FARAH</span>
          </h1>
        </div>
        <div className='rotWords'>
          <RotatingWords />
        </div>
      </MovingComponent>
    </div>
  );
}
export default Home;
