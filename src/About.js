import React from 'react';

import './About.css';

function About() {
  return (
    <div className='homeBox'>
      <h1>
        Hey, I'm Jama <span className='wave'>👋</span>
      </h1>
      <h2>Who I am</h2>
      <div className='aboutMeDescription'>
        <p>
          My name is Jama! I am a Software Engineer always looking for the next
          problem to solve!
        </p>
        <br />
        <p>
          I am always learning about new and advancing technologies to keep
          myself in the know
        </p>
        <br />
        <p>
          Outside of programming somf of my hobbies include gaming, music,
          watching sports (specifically the NBA) and going to the gym!
        </p>
      </div>
    </div>
  );
}
export default About;
