import React from 'react';
import avatar from './av.jpg';
import avatarHover from './avHover.jpg';

import './Home.css';

function Home() {
  return (
    <div className='homeBox'>
      <div class='Avatar'>
        <img src={avatar} />
        <img src={avatarHover} class='image-hover' alt='hover' />
      </div>
    </div>
  );
}
export default Home;
