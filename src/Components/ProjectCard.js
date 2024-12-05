import React from 'react';
import '../Styles/ProjectCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsGithub } from 'react-icons/bs';

const ProjectCard = (props) => {
  return (
    <div id='wholeCard'>
      <Card className='customCard'>
        <Card.Img className='projectImg' variant='top' src={props.imgSrc} />
        <Card.Body className='cardBody'>
          <Card.Title className='cardTitle'>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        <Card.Body>{props.technology}</Card.Body>
        <div className='buttonContainer'>
          <Button
            className='projButton'
            variant='primary'
            href={props.gitUrl}
            target='_blank'
          >
            <BsGithub />
          </Button>

          <Button
            className='projButton'
            variant='primary'
            href={props.url}
            target='_blank'
          >
            Demo
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
