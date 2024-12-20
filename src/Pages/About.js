import React from 'react';
import EmblaCarousel from '../Components/techCarousel.js';
import { CarouselData } from '../Components/CarouselData.js';
import '../Styles/About.css';

const OPTIONS = { loop: true };

const SLIDES = Array.from(CarouselData);
//const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function About() {
  return (
    <div className='homeBox'>
      <h1 className='aboutHeader'>
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
          myself in the know.
        </p>
        <br />
        <p>
          Outside of programming some of my hobbies include gaming, music,
          watching sports (specifically the NBA) and going to the gym!
        </p>
      </div>
      <div className='carouselContainer'>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
}
export default About;
